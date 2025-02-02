
const links = document.querySelectorAll('.show-box');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default link behavior

        // Store the target box ID in localStorage
        const targetId = link.getAttribute('data-target');
        localStorage.setItem('targetBox', targetId);

         // Introduce a delay before redirecting (e.g., 1 second = 1000ms)
         setTimeout(() => {
            // Redirect to page2.html
            window.location.href = 'shopproducts.html';
        }, 700);  
        });
    });

  

