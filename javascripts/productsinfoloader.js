// Get modal elements for products information include spinner
const modal = document.getElementById("myModal_2");
// const modalContent = document.getElementById("modal-content_2");
const closeModalButton = document.getElementsByClassName("close_2")[0];
const preloader_3 = document.getElementById('preloader_3');

// Close modal when clicking on <span> (x)
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

/* eslint-disable no-unused-vars */
async function pricesLoader(section) {
    const contentContainer = document.getElementById('contentChange');
    if (!preloader_3 || !modal || !contentContainer) return;
    
    modal.style.display = 'block';
    modal.offsetHeight;

    // Show preloader immediately
    preloader_3.style.display = "flex";
    // await new Promise(resolve => setTimeout(resolve, 2000));
    try {
        const response = await fetch('productsinfo.html');
        if (!response.ok) throw new Error(`Network error: ${response.status}`);

        const htmlText = await response.text();

        // Create a temporary div to parse HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlText;

        // Find the desired section
        const sections = tempDiv.getElementsByTagName('section');
        let sectionContent = '';
        for (let s of sections) {
            if (s.innerText.toLowerCase().includes(section.toLowerCase())) {
                sectionContent = s.outerHTML;
                break;
            }
        }

        // Display the section content
        contentContainer.innerHTML = sectionContent || 'Content not found.';

        // Show the modal
        modal.style.display = 'block';
    } catch (err) {
        console.error('Error loading content:', err);
        contentContainer.innerText = 'Error loading content.';
    } finally {
        // Hide preloader when content is ready or error occurred
        preloader_3.style.display = "none";
    }
}