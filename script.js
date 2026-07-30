const visualStyles = document.createElement('link');
visualStyles.rel = 'stylesheet';
visualStyles.href = 'visuals.css';
document.head.appendChild(visualStyles);

const importedPhotoStyles = document.createElement('link');
importedPhotoStyles.rel = 'stylesheet';
importedPhotoStyles.href = 'assets-import.css';
importedPhotoStyles.onerror = () => importedPhotoStyles.remove();
document.head.appendChild(importedPhotoStyles);

const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');

function updateHeader() {
  if (!header || header.classList.contains('solid')) return;
  header.classList.toggle('is-scrolled', window.scrollY > 24);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
    document.body.style.overflow = !open ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.style.overflow = '';
  }));
}

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add('is-visible'));
}

document.querySelectorAll('[data-accordion] .accordion-item').forEach(item => {
  const button = item.querySelector('button');
  const panel = item.querySelector('.accordion-panel');
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    button.querySelector('b').textContent = expanded ? '+' : '−';
    panel.hidden = expanded;
  });
});

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
