
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".products_stage_Btn a");
    const preloaders = document.querySelectorAll(".preloaderShop");
  
    preloaders.forEach(preloader => {
      preloader.style.display = "flex";
    });
  
    const sectionId =
      window.location.hash.substring(1) || "box1";
  
    showSection(sectionId);
    setActiveButton(sectionId);
  
    setTimeout(() => {
      preloaders.forEach(preloader => {
        preloader.style.display = "none";
      });
    }, 500);
  

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        const sectionId = this.dataset.section;
  
        showSection(sectionId);
        setActiveButton(sectionId);
        window.history.pushState(null, null, `#${sectionId}`);
      });
    });
  });
  

  function showSection(sectionId) {
    const allSections = document.querySelectorAll(".top_one_1");
  
    allSections.forEach(section => {
      section.style.display = "none";
    });
  
    const selectedSection = document.getElementById(sectionId);
  
    if (selectedSection) {
      selectedSection.style.display = "";
      selectedSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  

  function setActiveButton(sectionId) {
    const allButtons = document.querySelectorAll(".products_stage_Btn a");
  
    allButtons.forEach(button => {
      button.classList.remove("button_visited");
      button.classList.add("button");
    });
  
    const activeButtons = document.querySelectorAll(
      `.products_stage_Btn a[data-section="${sectionId}"]`
    );
  
    activeButtons.forEach(button => {
      button.classList.remove("button");
      button.classList.add("button_visited");
    });
  }