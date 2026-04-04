
document.addEventListener("DOMContentLoaded", () => {
    const linksProducts = {
      "capsules-link": "box1",
      "beans-link": "box2",
      "gift-cards-link": "box3",
      "gift-ideas-link": "box4",
      "clearance-link": "box5"
    };

  try {

    Object.entries(linksProducts).forEach(([id, box]) => {
      const productsElement = document.getElementById(id);

      if (!productsElement) return; // skip if element not found

      productsElement.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = `shopproducts.html#${box}`;
        
      });
    });
  } catch (error) {
    console.error("Something went wrong:", error);
  }
});
