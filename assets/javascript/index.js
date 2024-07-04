const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon')

const scrollButton = document.querySelector('.scroll-button');

window.addEventListener('scroll',()=>{
    if(window.scrollY>100){
        scrollButton.classList.add('add-scroll-button')
    }
    else{
        scrollButton.classList.remove('add-scroll-button')
    }
})

scrollButton.addEventListener('click',()=>{
    window.scrollTo({
        top:0
    })
})

menuIcon.addEventListener('click',()=>{
    menu.classList.toggle('active')

})