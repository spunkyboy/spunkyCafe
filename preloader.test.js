require ('./preloader');

// myCode.test.js (Jest test file)

describe('Preloader behavior on page load', () => {
  let preloaderElement;

  beforeEach(() => {
    // Set up a mock DOM element for the preloader
    preloaderElement = document.createElement('div');
    preloaderElement.id = 'preloader';
    document.body.appendChild(preloaderElement);

    // Mocking setTimeout for controlling timers in Jest
    jest.useFakeTimers();
  });

  afterEach(() => {
    // Clean up after each test
    jest.clearAllTimers();
    document.body.innerHTML = ''; // Clear the DOM
  });

  it('should hide the preloader after 2 seconds', () => {
    // Dispatch the load event to trigger the event listener
    window.dispatchEvent(new Event('load'));

    // Initially, the preloader should be visible
    expect(preloaderElement.style.display).toBe('');

    // Fast-forward time by 2 seconds to simulate setTimeout
    jest.advanceTimersByTime(2000);

    // After the timeout, the preloader should be hidden
    expect(preloaderElement.style.display).toBe('none');
  });
});
