
//script for scroll pop-up menus
window.addEventListener('scroll', function() {
    var scrollHeight = 300;  // Set the height at which the buttons appear
    var buttonIds = ['fixedScroll1', 'fixedScroll2', 'fixedScroll3', 'fixedScroll4', 'fixedScroll5']; // Array of button IDs
  
    buttonIds.forEach(function(id) {
      var button = document.getElementById(id);
  
      if (button) { // Check if the button exists
        if (window.scrollY >= scrollHeight) {
          button.style.display = 'flex';
          button.style.position = 'fixed';
          button.style.top = '120px';
          button.style.backgroundColor = '#ffffff'; // Add background color
        } else {
          button.style.display = 'none';
          button.style.position = '';    // Reset position when the button is hidden
          button.style.width = '';       // Reset width when the button is hidden
        }
      }
    });
  });
  
