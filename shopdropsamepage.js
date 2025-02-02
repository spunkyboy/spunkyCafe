
document.addEventListener("DOMContentLoaded", function() {
  // Show the section corresponding to the hash in the URL (if any)
  const sectionId = window.location.hash.substring(1); // Get the part after #
  if (sectionId) {
    showSection(sectionId); // Show the selected section
  }
    // Listen for clicks on all the links
    document.getElementById("capsules-link").addEventListener("click", function(event) {
      event.preventDefault();
      window.location.hash = "box1"; // Change the hash to box1
      showSection("box1"); // Show box1
    });
    
    document.getElementById("beans-link").addEventListener("click", function(event) {
      event.preventDefault();
      window.location.hash = "box2"; // Change the hash to box1
      showSection("box2"); // Show box1
    });
  
    document.getElementById("gift-cards-link").addEventListener("click", function(event) {
      event.preventDefault();
      window.location.hash = "box3"; // Change the hash to box1
      showSection("box3"); // Show box1
    });
    document.getElementById("gift-ideas-link").addEventListener("click", function(event) {
      event.preventDefault();
      window.location.hash = "box4"; // Change the hash to box1
      showSection("box4"); // Show box1
    });
  
    document.getElementById("clearance-link").addEventListener("click", function(event) {
      event.preventDefault();
      window.location.hash = "box5"; // Change the hash to box1
      showSection("box5"); // Show box1
    });
  });
  
  
  