'use strict';
// track scrolling position
// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const navbar__logo = document.querySelector('.navbar__logo__img--dynamic');

const hamburger__color = document.querySelector('.navbar__toggle-btn');
// const nav__underline_effect = document.querySelector('.navbar__menu__item:after');


document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
        navbar__logo.src="imgs/ryan_black.png"
        hamburger__color.style.color = "var(--color-black)"
        // nav__underline_effect.style.backgroundColor = "var(--color-black)"
        navbar.classList.add('floatingNav');
    }else{
        navbar.classList.remove('navbar--dark');
        navbar__logo.src="imgs/ryan_white.png"
        hamburger__color.style.color = "var(--color-white)"
        // nav__underline_effect.style.backgroundColor = "var(--color-white)"
        navbar.classList.remove('floatingNav');
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

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeheight /2){
        arrowUp.classList.add('visible');
    } else{
        arrowUp.classList.remove('visible');
    }
});

// Handle clicl on the "arrow up" button
arrowUp.addEventListener('click', () =>{
    scrollIntoViews('#home');
});

// Projects
const workBtncontainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
// add array for all the 8 projects
const projects = document.querySelectorAll('.project');
workBtncontainer.addEventListener('click', (e) =>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if( filter == null) {
        return;
    }
    // } if filter is null, do not do anything
    console.log(filter);
    projects.forEach((project) => {
        console.log(project.dataset.type);
        if(filter === '*' || filter === project.dataset.type ){
            project.classList.remove('invisible');
            //WHEN it is clicked, not showing...!!
        } else {
            project.classList.add('invisible');
        }
    });

    //console.log(`-----------------`);
// method 2
// for(let project of projects){
//  console.log(project);

// }

//console.log(`-----------------`);
// method 3
// let project;
// for (let i = 0; i < projects.length; i++) {
//     project = projects[i];
//      console.log(project);
// }

    //console.log(filter);
});


// smooth selector function
function scrollIntoViews(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}