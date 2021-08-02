// menu shoe y hidden
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close');

// show

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// hidden

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

// remove menu
const navLink = document.querySelectorAll('.nav__link');

function linkaction() {
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkaction));

// scroll sections active link
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollactive);

function scrollactive() {
  const scrolly = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 5;
    sectionId = current.getAttribute('Id');

    if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*= ' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*= ' + sectionId + ']').classList.remove('active');
    }
  });
}
