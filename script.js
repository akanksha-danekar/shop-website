document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      document.body.classList.toggle('no-scroll');

      // Change icon based on state
      const icon = mobileMenuBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Set active link in navigation based on current page URL
  const currentPage = window.location.pathname.split("/").pop() || 'index.html';
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Simple smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          document.body.classList.remove('no-scroll');
          const icon = mobileMenuBtn.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  });
});

function sendToWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let url = "https://wa.me/919420874383?text="
    + "New Enquiry from Website:%0a%0a"
    + "Name: " + name + "%0a"
    + "Phone: " + phone + "%0a"
    + "Message: " + message;

  window.open(url, "_blank");
}