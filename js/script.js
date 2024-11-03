const menu = document.querySelector('#menu');
const slideBar = document.querySelector('#slide-bar');
const cross = document.querySelector('#cross');
const logo = document.querySelector('#logo')
const headings = document.querySelectorAll('.header__logo');
const sidebarItems = document.querySelectorAll('.sidebar');

menu.addEventListener('click', () => {
    slideBar.classList.remove('-translate-y-full');
    slideBar.classList.add('translate-y-0');
    logo.classList.add('opacity-0')
});

cross.addEventListener('click', () => {
    slideBar.classList.add('-translate-y-full');
    slideBar.classList.remove('trnaslate-y-0');
    logo.classList.remove('opacity-0');
});

sidebarItems.forEach((item) => {
    item.addEventListener('click', () => {
        slideBar.classList.add('-translate-y-full');
        slideBar.classList.remove('trnaslate-y-0');
        logo.classList.remove('opacity-0');
    });
});

headings.forEach((heading) => {
    heading.addEventListener('click', () => {
        window.location.reload();
    });
});