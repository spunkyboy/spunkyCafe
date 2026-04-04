const links = document.querySelectorAll('.show-box');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    try {
      event.preventDefault();  // Prevent default link behavior

      const targetId = link.getAttribute('data-target');

      if (!targetId) {
        console.warn('No data-target found for this link');
        return;
      }

      window.location.href = `shopproducts.html#${targetId}`;

    } catch (error) {
      console.error('Error handling click event:', error);
    }
  });
});