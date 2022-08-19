const burgerBtn = document.querySelector('.burger-box');
const burgerIcon = document.querySelector('.burger-menu');
const menuList = document.querySelector('.header__menu-list');
const menuLinks = document.querySelectorAll('.header__menu-link');

burgerBtn.addEventListener('click', function(){
    burgerIcon.classList.toggle('active');
    menuList.classList.toggle('active');
    menuLinks.forEach (el => el.addEventListener('click', function(){
        burgerIcon.classList.remove('active');
        menuList.classList.remove('active');
    }))
    blackout.addEventListener('click', function(){
        burgerIcon.classList.remove('active');
        menuList.classList.remove('active');
    })
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            burgerIcon.classList.remove('active');
            menuList.classList.remove('active');
        }
    })
})