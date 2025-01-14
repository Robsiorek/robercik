const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu');
const menuLinks = document.querySelectorAll('#mobile-menu a');

// Funkcja otwierania menu
function openMenu() {
  mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
  mobileMenu.classList.add('opacity-100');
}

// Funkcja zamykania menu
function closeMenu() {
  mobileMenu.classList.remove('opacity-100');
  mobileMenu.classList.add('opacity-0', 'pointer-events-none');
}

// Event listener na hamburgera
hamburgerBtn.addEventListener('click', openMenu);

// Event listener na przycisk X
closeMenuBtn.addEventListener('click', closeMenu);

// Event listener na linki w menu
menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
