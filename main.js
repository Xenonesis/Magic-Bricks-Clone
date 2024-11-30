const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu visibility
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
  // Toggle aria-expanded for accessibility
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
});

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
  if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    menuToggle.setAttribute('aria-expanded', false);
  }
});

// Close the menu with the Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    menuToggle.setAttribute('aria-expanded', false);
  }
});
