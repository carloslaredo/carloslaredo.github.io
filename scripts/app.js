const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//This code is for the nav menu on top to appear and disappear as scroll up or down, without the need to scroll all the way to the top
const body =document.body;
let lastScroll=0;

window.addEventListener('scroll', ()=> {
    const currentScroll = (window.pageYOffset)

    if(currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastScroll = currentScroll; //las scroll value 
})

//Code for the game
document.addEventListener('DOMContentLoaded', () => {
const dino = document.querySelector('.dino')
let isJumping = false

function control(e) {
    if (e.keyCode === 32) {
        if (!isJumping){
            isJumping = true
            jump()
        }
    }
}
document.addEventListener('keyup', control)

//this will make the dino move 10px every x amount of ms until the timer event is cleared

function jump() {
    let position = 0
    let timerId = setInterval(function() {

        //move down
        if (position === 150) {
            clearInterval(timerId)
            console.log('down')
            let downTimerId = setInterval(function() {
                if (position === 0){
                    clearInterval(downTimerId)
                    isJumping = false
                }
                position -= 30 
                dino.style.bottom = position + 'px'
            },20)
        }
        //move up
        console.log('up')
        position +=30 
        dino.style.bottom = position + 'px'
    },20)
}

})