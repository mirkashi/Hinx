// Get elements
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-item');

// Add click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    // Toggle the 'open' class on the navbar
    navbar.classList.toggle('open');
});
