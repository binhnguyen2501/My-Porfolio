const backtoWorkBtn = document.querySelector('.backtoWorkBtn');
backtoWorkBtn.addEventListener('mouseover', function(){
    cursor.classList.add('link-grow_cursor')
    cursor2.classList.add('link-grow_cursor2')
})
backtoWorkBtn.addEventListener('mouseleave', function(){
    cursor.classList.remove('link-grow_cursor')
    cursor2.classList.remove('link-grow_cursor2')
})

const nextProject = document.querySelector('.nextproject-caption h2');
nextProject.addEventListener('mouseover', function(){
    cursor.classList.add('link-grow_cursor')
    cursor2.classList.add('link-grow_cursor2')
})
nextProject.addEventListener('mouseleave', function(){
    cursor.classList.remove('link-grow_cursor')
    cursor2.classList.remove('link-grow_cursor2')
})

const projectImg = document.querySelectorAll('.desktop--img');
projectImg.forEach(img =>{
    img.addEventListener('mouseover', function(){
        cursor.classList.add('link-grow_cursor')
        cursor2.classList.add('link-grow_cursor2')
    })
    img.addEventListener('mouseleave', function(){
        cursor.classList.remove('link-grow_cursor')
        cursor2.classList.remove('link-grow_cursor2')
    })
});
// WORD DOM TO SET ANIMATION
const text = document.querySelector('.text-project');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i= 0; i < splitText.length; i++){
    text.innerHTML += "<span>"+ splitText[i] +"</span>";
} 
let char = 0;
let timer = setInterval(onTick, 50);
function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade')
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer = null;
}

const text1 = document.querySelector('.text-project1');
const StrText = text1.textContent;
const SplitText = StrText.split("");
text1.textContent = "";
for(let i= 0; i < SplitText.length; i++){
    text1.innerHTML += "<span>"+ SplitText[i] +"</span>";
} 
let Char = 0;
let Timer = setInterval(OnTick, 50);
function OnTick(){
    const Span = text1.querySelectorAll('span')[Char];
    Span.classList.add('Fade')
    Char++;
    if(Char === SplitText.length){
        Complete();
        return;
    }
}
function Complete(){
    clearInterval(Timer);
    Timer = null;
}