let canTop = document.body.querySelector('.can_top')
let can = document.body.querySelector('.can')
let bottle = document.body.querySelector('.bottle')
let collar = document.body.querySelector('.collar')
let liquid = document.body.querySelector('.liquid')

let bones = document.body.querySelectorAll('.bone')
let bonesWrapper = document.body.querySelector('.bones')

let mainBall = document.body.querySelector('.main_ball')
let balls = document.body.querySelectorAll('.ball')
let ballsWrapper = document.body.querySelector('.balls_wrapper')

can.addEventListener('click', () => {
  can.classList.toggle("open")
})

// function flyBones(){
//   while(can.className == 'open')
// }

function openCan(){
  if (can.classList.contains('open')) {
    canTop.style.transform = 'rotate(-40deg) translate(50px, -50px)'
  }
}

function spill(){
  liquid.style.opacity = '1'
  liquid.style.transform = 'scale(1)'
}


function showBalls() {
  ballsWrapper.style.display = 'block'
  balls.forEach(element => element.style.display = 'block');
  
}
