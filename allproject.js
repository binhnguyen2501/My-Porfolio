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