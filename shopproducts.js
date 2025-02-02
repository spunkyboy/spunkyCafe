
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
}, 500);  // Adjust the timeout as needed (500ms for example)
};

