/* eslint-disable no-unused-vars */
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementsByClassName("close")[0];
const preloader = document.getElementById("preloader2");
const contentContainer = document.getElementById("content");

/**
 * Load content into modal dynamically
 * @param {string} section - section name to load from modalpages.html
 */

function loadContent(section) {
    if (!modal || !preloader || !contentContainer) return;

    // Show modal and preloader immediately
    modal.style.display = "block";
    preloader.style.display = "flex";
    preloader.style.opacity = 1;
    contentContainer.innerHTML = ""; 

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'modalpages.html', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = this.responseText;

            // Find the matching section
            const sections = tempDiv.getElementsByTagName('article');
            let sectionContent = '';
            for (let s of sections) {
                if (s.innerText.toLowerCase().includes(section.toLowerCase())) {
                    sectionContent = s.outerHTML;
                    break;
                }
            }

            // Insert content
            contentContainer.innerHTML = sectionContent || 'Content not found.';

        } else {
            contentContainer.innerText = 'Error loading content.';
        }

        // Hide preloader once content is ready
        preloader.style.display = "none";
        preloader.style.opacity = 0;
    };

    xhr.onerror = function () {
        contentContainer.innerText = 'Error loading content.';
        preloader.style.display = "none";
        preloader.style.opacity = 0;
    };

    xhr.send();
}

// Close modal when clicking the close button
closeModalBtn.onclick = function () {
    closeModal();
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Utility: close modal and reset preloader/content
function closeModal() {
    modal.style.display = "none";
    preloader.style.display = "none";
    preloader.style.opacity = 0;
    contentContainer.innerHTML = "";
}