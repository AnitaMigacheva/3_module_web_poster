let canTop = document.body.querySelector('.can_top')
let can = document.body.querySelector('.can')
let bottle = document.body.querySelector('.bottle')
let ball = document.body.querySelector('.ball')
let collar = document.body.querySelector('.collar')
let liquid = document.body.querySelector('.liquid')

let bones = document.body.querySelectorAll('.bone')
let bonesContainer = document.body.querySelector('.bones')

can.addEventListener('click', () => {
  can.classList.toggle("open")
})

// function flyBones(){
//   while(can.className == 'open')
// }

function openCan(){
  if (can.classList.contains('open')) {
    canTop.style.transform = 'rotate(-40deg) translate(50px, -60px)'
  }
}

function spill(){
  liquid.style.opacity = '1'
  liquid.style.transform = 'scale(1)'
}
