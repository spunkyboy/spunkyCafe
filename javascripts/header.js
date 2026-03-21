// Script to toggle the navigation menu on smaller screens
const hamburger = document.querySelector('.click_Icon');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});
