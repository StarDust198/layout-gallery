// hamburger & menu

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuClose = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
});

// progress bars

const progress = document.querySelectorAll('.skills__item-status'),
    progressBars = document.querySelectorAll('.skills__item-done');

progress.forEach((item, i) => progressBars[i].style.width = item.textContent);