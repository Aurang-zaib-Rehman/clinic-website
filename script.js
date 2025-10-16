
document.addEventListener("DOMContentLoaded", () => {

  // Go to Top Button
  const goTopBtn = document.querySelector('.go-top-btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      goTopBtn.style.display = 'flex';
    } else {
      goTopBtn.style.display = 'none';
    }
  });

  // Navbar Toggle
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.getElementById('navLinks');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

});

