/* global showSection */
const links = [
  { id: "capsules-link", box: "box1" },
  { id: "beans-link", box: "box2" },
  { id: "gift-cards-link", box: "box3" },
  { id: "gift-ideas-link", box: "box4" },
  { id: "clearance-link", box: "box5" }
];

links.forEach(link => {
  const allElements = document.getElementById(link.id);
  if (allElements) {
    allElements.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.hash = link.box;
      showSection(link.box);
    });
  }
});
  
  