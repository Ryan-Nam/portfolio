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

// Handle Scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    
    const target = event.target;
    const link = target.dataset.link;
    if (link ==null){
        return;
    }
    //console.log(event.target.dataset.link);
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({behavior: 'smooth'});
    scrollIntoViews(link);
});

// Handle Click on "contact me" button on home
const contact__btn = document.querySelector('.home__contact');
contact__btn.addEventListener('click', () =>{
    scrollIntoViews('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    //console.log(homeheight);
    home.style.opacity = 1 - window.scrollY / homeheight;
});





// smooth selector function
function scrollIntoViews(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}