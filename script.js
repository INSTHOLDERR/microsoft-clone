function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('active');
    

    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');
    menuButton.style.display = menu.classList.contains('active') ? 'none' : 'block';
    closeButton.style.display = menu.classList.contains('active') ? 'block' : 'none';
}


