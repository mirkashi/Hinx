document.addEventListener('DOMContentLoaded', () => {
    const navItemsWithMegaMenu = document.querySelectorAll('.nav-item > a');

    navItemsWithMegaMenu.forEach(item => {
        item.addEventListener('mouseenter', () => {
    
            const megaMenu = item.nextElementSibling;
            if (megaMenu && megaMenu.classList.contains('mega-menu')) {
                megaMenu.style.display = 'block';
            }
        });

        item.addEventListener('mouseleave', () => {

            const megaMenu = item.nextElementSibling;
            if (megaMenu && megaMenu.classList.contains('mega-menu')) {
                megaMenu.style.display = 'none';
            }
        });
    });


    const hamburger = document.querySelector('.hamburger');
    const navItems = document.querySelector('.nav-item');

    if (hamburger && navItems) {
        hamburger.addEventListener('click', () => {
            navItems.classList.toggle('open');
        });
    }
});
