function toggleMenu() {
    const menu = document.querySelector(".menu-links"); 
    const icon = document.querySelector(".hamburger-icon"); 
    
    // Toggle the 'open' class on both elements
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
