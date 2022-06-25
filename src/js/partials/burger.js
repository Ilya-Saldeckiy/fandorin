window.addEventListener('DOMContentLoaded', function() {

    let burger = document.querySelector('.header__burger');
    let burgerIco = document.querySelector('.burger-menu__icon');
    let menuItem = document.querySelectorAll('.menu-list__item');
    let burgerClose = document.querySelector('.burger-close');
    let navMenu = document.querySelector('.menu-list');

    burger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        this.classList.toggle('open');
        burgerIco.classList.toggle('open');
    })

    for ( menuItem of menuItem) {
        menuItem.addEventListener('click', function () {
            navMenu.classList.remove('active')
            burger.classList.remove('open');
            burgerIco.classList.remove('open');
        })
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            navMenu.classList.remove('active')
            burger.classList.remove('open');
            burgerIco.classList.remove('open');
        }
    })
})