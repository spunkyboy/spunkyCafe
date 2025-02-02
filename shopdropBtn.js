
 document.addEventListener("DOMContentLoaded", function() {
  // Listen for clicks on all the links
  document.getElementById("capsules-link").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "shopproducts.html#box1"; // Navigate to box1 in shopproducts.html
  });
  
  document.getElementById("beans-link").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "shopproducts.html#box2"; // Navigate to box2 in shopproducts.html
  });

  document.getElementById("gift-cards-link").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "shopproducts.html#box3"; // Navigate to box3 in shopproducts.html
  });
  document.getElementById("gift-ideas-link").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "shopproducts.html#box4"; // Navigate to box3 in shopproducts.html
  });

  document.getElementById("clearance-link").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "shopproducts.html#box5"; // Navigate to box4 in shopproducts.html
  });
});


