const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('active');
    const isOpen = siteNav.classList.contains('active');
    menuToggle.textContent = isOpen ? 'Close' : 'Menu';
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'Please fill in all fields before sending.';
      formStatus.style.color = '#dc2626';
      return;
    }

    formStatus.textContent = `Thanks, ${name}! Your message is ready to send.`;
    formStatus.style.color = '#16a34a';
    contactForm.reset();
  });
}
