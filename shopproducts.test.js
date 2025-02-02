describe('window.onload behavior', () => {
    let originalLocalStorage;
    let originalGetElementById;
    let originalQuerySelectorAll;

    beforeAll(() => {
        // Mock localStorage correctly
        originalLocalStorage = global.localStorage;
        Object.defineProperty(global, 'localStorage', {
            value: {
                getItem: jest.fn(),
                setItem: jest.fn(),
                clear: jest.fn(),
            },
        });

        // Mock querySelectorAll and getElementById
        originalGetElementById = document.getElementById;
        global.document.getElementById = jest.fn();

        originalQuerySelectorAll = document.querySelectorAll;
        global.document.querySelectorAll = jest.fn();

        // Mocking the preloader element's style
        const mockPreloader = {
            style: {
                display: '',
            },
        };

        // Return the mock element whenever querySelectorAll is called
        document.querySelectorAll.mockReturnValue([mockPreloader]);
    });

    afterAll(() => {
        // Restore original methods
        global.localStorage = originalLocalStorage;
        global.document.getElementById = originalGetElementById;
        global.document.querySelectorAll = originalQuerySelectorAll;
    });

    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks();

        // Ensure window.onload is set
        window.onload = function() {
            // Get the preloader element
            const preloaders = document.querySelectorAll('.preloaderShop');
            
            // Show each preloader (ensure they are visible while processing)
            preloaders.forEach(preloader => {
                preloader.style.display = 'flex';
            });

            // Get the stored target box ID from localStorage
            const targetId = localStorage.getItem('targetBox');

            if (targetId) {
                // Show the corresponding box if targetId is stored
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.style.display = 'block'; // Show the element
                } else {
                    console.warn(`Element with ID "${targetId}" not found.`);
                }
            } else {
                console.log('No target box ID found in localStorage.');
            }

            // Hide the preloaders after a short delay (optional)
            setTimeout(() => {
                preloaders.forEach(preloader => {
                    preloader.style.display = 'none'; // Hide each preloader
                });
            }, 700);  // Adjust the timeout as needed (500ms for example)
        };
    });

    it('should log a warning if the target box ID in localStorage does not exist in the DOM', () => {
        // Mock localStorage to return a target ID
        localStorage.getItem.mockReturnValue('nonExistentTargetId');

        // Spy on console.warn to check if it was called
        console.warn = jest.fn();

        // Mock getElementById to return null (i.e., element not found)
        document.getElementById.mockReturnValue(null);

        window.onload();

        // Check that console.warn was called with the correct message
        expect(console.warn).toHaveBeenCalledWith(
            'Element with ID "nonExistentTargetId" not found.'
        );
    });
});
