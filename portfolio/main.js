'use strict';
// track scrolling position
// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const navbar__logo = document.querySelector('.navbar__logo__img--dynamic');

document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
        navbar__logo.src="imgs/ryan_black.png"
        
 

    }else{
        navbar.classList.remove('navbar--dark');
        navbar__logo.src="imgs/ryan_white.png"
    }
});

