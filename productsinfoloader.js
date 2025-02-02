
// Get modal elements for products information include spinner
const modal = document.getElementById("myModal_2");
const modalContent = document.getElementById("modal-content_2");
const closeModalButton = document.getElementsByClassName("close_2")[0];

// Preloader element for modal on shop products.html
const preloader_3 = document.getElementById('preloader_3');

// Close modal when clicking on <span> (x)
closeModalButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

function pricesLoader(section) {
    // Show preloader after a delay
    setTimeout(() => {
        preloader_3.style.display = "none";  // Display the preloader after delay
    }, 1000); // Delay in milliseconds (1000ms)

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'productsinfo.html', true);
    xhr.onload = function() {
        if (this.status === 200) {
            // Create a temporary div to hold the loaded HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = this.responseText;
            
            // Find the desired section in the loaded content
            let sectionContent = '';
            const sections = tempDiv.getElementsByTagName('section'); // Use section instead of children

            for (let i = 0; i < sections.length; i++) {
                if (sections[i].innerText.toLowerCase().includes(section.toLowerCase())) {
                    sectionContent = sections[i].outerHTML; // Get the outer HTML of the matching section
                    break;
                }
            }

            // Display the section content
            document.getElementById('contentChange').innerHTML = sectionContent || 'Content not found.';
            
            // show preloader
            preloader_3.style.display = "block";
            
            // Show the modal
            modal.style.display = 'block';
        } else {
            document.getElementById('content_2').innerText = 'Error loading content.';
            
            // Hide preloader in case of error
            // preloader_3.style.display = "none";
        }
    };
    xhr.send();
}

