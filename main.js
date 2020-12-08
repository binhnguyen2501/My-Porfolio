/*Cursor*/
const cursor = document.querySelector('.cursor')
const cursor2 = document.querySelector('.cursor2')
document.addEventListener('mousemove' , function(e){
    cursor.style.cssText = cursor2.style.cssText = "top: " + e.clientY + "px;" + "left: " + e.clientX + "px;"
})
const nav_links = document.querySelectorAll('.nav-links--link')
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
const logo = document.querySelector('.logo')
logo.addEventListener('mouseover', function(){
    cursor.classList.add('link-grow_cursor')
    cursor2.classList.add('link-grow_cursor2')
})
logo.addEventListener('mouseleave', function(){
    cursor.classList.remove('link-grow_cursor')
    cursor2.classList.remove('link-grow_cursor2')
})
const social = document.querySelectorAll('.social-icon')
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
const contacts = document.querySelectorAll('.contacts')
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
const sliderAll = document.querySelectorAll('.sliderAll');
sliderAll.forEach(allslide => {
    allslide.addEventListener('mouseover', function(){
        cursor.classList.add('link-grow_cursor')
        cursor2.classList.add('link-grow_cursor2')
    })
    allslide.addEventListener('mouseleave', function(){
        cursor.classList.remove('link-grow_cursor')
        cursor2.classList.remove('link-grow_cursor2')
    })
})
const chuyenslide = document.querySelector('.chuyenslide');
chuyenslide.addEventListener('mouseover', function(){
    cursor.classList.add('link-grow_cursor')
    cursor2.classList.add('link-grow_cursor2')
})
chuyenslide.addEventListener('mouseleave', function(){
    cursor.classList.remove('link-grow_cursor')
    cursor2.classList.remove('link-grow_cursor2')
})
const allWork = document.querySelector('.allWork');
allWork.addEventListener('mouseover', function(){
    cursor.classList.add('link-grow_cursor')
    cursor2.classList.add('link-grow_cursor2')
})
allWork.addEventListener('mouseleave', function(){
    cursor.classList.remove('link-grow_cursor')
    cursor2.classList.remove('link-grow_cursor2')
})
/*Slider*/
const slider = document.querySelector('.homepage-banner--slider ul');
const slide = document.querySelectorAll('.homepage-banner--slider li');

let counter = 1;
const size = slide[0].clientWidth;

slider.style.transform = 'translateX(' + ((-size)*counter) +'px)';

const nextBtn = document.querySelector('.next');
nextBtn.addEventListener('click' , () =>{
    if(counter >= slide.length - 1) return;
    slider.style.transition = 'transform 0.3s cubic-bezier(0.77, 0, 0.175, 1)';
    counter++;
    slider.style.transform = 'translateX(' + ((-size)*counter) +'px)';

    nextTextSlide();
})
slider.addEventListener('transitionend', () =>{
    if(slide[counter].id === 'fristSlide'){
        slider.style.transition = 'none';
        counter = slide.length - counter;
        slider.style.transform = 'translateX(' + ((-size)*counter) +'px)';
    }
    for(let x=0; x<slide.length;x++){
        sliderAll[x].classList.remove('slideAnimation');
    }
    let Index = counter+1
    sliderAll[Index].classList.add('slideAnimation');
})

const sliderCurrent = document.querySelector('.sliderCurrent');
const sliderProgress = document.querySelector('.sliderProgress');
const TextSlider = document.querySelector('.text-transition');
const TextSlide = document.querySelectorAll('.text-transition li');
let index = 0;
function nextTextSlide(){
    if(index==TextSlide.length-1){
        index=0
    }
    else{
        index++;
    }
    changeTextSlide();
    sliderCurrent.innerHTML = index+1;
    var k = index+1;
    var j = 33.33*k;
    sliderProgress.style.cssText = 'width:' +(j)+ '%';
}
function changeTextSlide(){
    for(let i=0; i<TextSlide.length;i++){
        TextSlide[i].classList.remove('active');
    }
    TextSlide[index].classList.add('active');
}
/*TOGGLER NAVBAR*/
const navBar = document.querySelector('.menu-toggler');
const navbarMobilePage = document.querySelector('.navbarMobile');
navBar.addEventListener('click', function(){
    navBar.classList.toggle('open');
    navbarMobilePage.classList.toggle('openPage');
})