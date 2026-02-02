function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('py-2');
    navbar.classList.remove('py-4');
  } else {
    navbar.classList.add('py-4');
    navbar.classList.remove('py-2');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');

  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    setTimeout(() => {
      menu.classList.remove('scale-y-0');
    }, 10);
  } else {
    menu.classList.add('scale-y-0');
    setTimeout(() => {
      menu.classList.add('hidden');
    }, 300);
  }
}

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById('backToTop');

  if (backToTopButton) {
    backToTopButton.addEventListener('click', function (e) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});