const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementsByClassName("close")[0];
const preloader = document.getElementById("preloader2"); // Preloader element

// Function to load content into the modal
function loadContent(section) {
    // hide preloader immediately
    setTimeout(() => {
        preloader.style.display = "none"; // hide preloader
        preloader.style.opacity = 0; 
        console.log('Preloader visible, loading content...');
    }, 3000);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'modalpages.html', true);
    xhr.onload = function() {
        if (this.status === 200) {
            console.log('Content loaded successfully.');
            
            // Create a temporary div to hold the loaded HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = this.responseText;
            
            // Find the desired section in the loaded content
            let sectionContent = '';
            const sections = tempDiv.getElementsByTagName('article');

            // Loop through sections and find the matching section by name or content
            for (let i = 0; i < sections.length; i++) {
                if (sections[i].innerText.toLowerCase().includes(section.toLowerCase())) {
                    sectionContent = sections[i].outerHTML;
                    break;
                }
            }

            // Display the section content in the modal
            document.getElementById('content').innerHTML = sectionContent || 'Content not found.';
            
            // Hide preloader and show the modal after a short delay
            setTimeout(() => {
                preloader.style.display = "flex"; // show preloader
                preloader.style.opacity = 1; 
                modal.style.display = 'block'; // Show the modal
                console.log('Preloader hidden, modal content shown.');
        }, 500);
        } else {
            console.log('Error loading content.');
            // If content loading fails
            document.getElementById('content').innerText = 'Error loading content.';
            
            // Hide preloader in case of error
            preloader.style.visibility = "hidden";
            preloader.style.opacity = 0;
        }
    };
    xhr.send();
}

// Close modal when clicking on the close button (x)
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


