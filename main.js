/*CURSOR*/
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove' , function(e){
    cursor.style.cssText = cursor2.style.cssText = "top: " + e.clientY + "px;" + "left: " + e.clientX + "px;"
})
const nav_links = document.querySelectorAll('.header__navLinks---link .link');
nav_links.forEach(link =>{
    link.addEventListener('mouseover', function(){
        cursor.classList.add('link-grow_cursor')
        cursor2.classList.add('link-grow_cursor2')
    })
    link.addEventListener('mouseleave', function(){
        cursor.classList.remove('link-grow_cursor')
        cursor2.classList.remove('link-grow_cursor2')
    })
});
const logo = document.querySelector('.header__logo a');
logo.addEventListener('mouseover', function(){
    cursor.classList.add('link-grow_cursor')
    cursor2.classList.add('link-grow_cursor2')
})
logo.addEventListener('mouseleave', function(){
    cursor.classList.remove('link-grow_cursor')
    cursor2.classList.remove('link-grow_cursor2')
})
const social = document.querySelectorAll('.social-icon');
social.forEach(links =>{
    links.addEventListener('mouseover', function(){
        cursor.classList.add('link-grow_cursor')
        cursor2.classList.add('link-grow_cursor2')
    })
    links.addEventListener('mouseleave', function(){
        cursor.classList.remove('link-grow_cursor')
        cursor2.classList.remove('link-grow_cursor2')
    })
});
const contacts = document.querySelectorAll('.contacts');
contacts.forEach(contact =>{
    contact.addEventListener('mouseover', function(){
        cursor.classList.add('link-grow_cursor')
        cursor2.classList.add('link-grow_cursor2')
    })
    contact.addEventListener('mouseleave', function(){
        cursor.classList.remove('link-grow_cursor')
        cursor2.classList.remove('link-grow_cursor2')
    })
})
const contentTitle = document.querySelectorAll('.homepage-title--contentTitle p');
contentTitle.forEach(content =>{
    content.addEventListener('mouseover', function(){
        cursor.classList.add('link-grow_cursor')
        cursor2.classList.add('link-grow_cursor2')
        content.style.cssText = 'cursor: none'
    })
    content.addEventListener('mouseleave', function(){
        cursor.classList.remove('link-grow_cursor')
        cursor2.classList.remove('link-grow_cursor2')
        content.style.cssText = 'cursor: pointer'
    })
})
/*TOGGLER NAVBAR*/
const navBar = document.querySelector('.header__menuToggler');
const navbarMobilePage = document.querySelector('.navbarMobile');
navBar.addEventListener('click', function(){
    navBar.classList.toggle('open');
    navbarMobilePage.classList.toggle('openPage');
})
/*DARK MODE*/
const checkbox = document.querySelector('input[name="theme"]');
checkbox.addEventListener('change', function(){
    if(this.checked){
        tran();
        document.documentElement.setAttribute('data-theme','dark');
    }
    else{
        tran();
        document.documentElement.setAttribute('data-theme','light');
    }
})
let tran = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    } , 1000)
}
checkbox.addEventListener('click', function(){
    nav_links.forEach(link=>{
        link.classList.toggle('changeColor')
    })
    logo.classList.toggle('changeColor');
    social.forEach(links =>{
        links.classList.toggle('changeColor')
    })
    contacts.forEach(contact =>{
        contact.classList.toggle('changeColor')
    })
})