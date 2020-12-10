const navbar = document.querySelector('.nav-links');
const navbarHeight = navbar.clientHeight;
const navbarMobile = document.querySelector('.menu-toggler');
window.addEventListener('scroll', function(){
    if(window.scrollY >= navbarHeight){
        navbar.classList.remove('navbarFadeIn');
        navbarMobile.style.cssText = 'display: flex; right: 5rem; position: fixed;';
    }
    else{
        navbar.classList.add('navbarFadeIn');
        navbarMobile.style.cssText = 'display: none';
    }
})