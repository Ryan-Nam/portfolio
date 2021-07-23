'use strict';
// track scrolling position
// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbar__logo = document.querySelector('.navbar__logo__img');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
        navbar__logo.classList.add('navbar--changelogo');
 

    }else{
        navbar.classList.remove('navbar--dark');
    }
});
