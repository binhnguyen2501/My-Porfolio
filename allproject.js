const backtoWorkBtn = document.querySelector('.backtoWorkBtn');
backtoWorkBtn.addEventListener('mouseover', function(){
    cursor.classList.add('link-grow_cursor')
    cursor2.classList.add('link-grow_cursor2')
})
backtoWorkBtn.addEventListener('mouseleave', function(){
    cursor.classList.remove('link-grow_cursor')
    cursor2.classList.remove('link-grow_cursor2')
})