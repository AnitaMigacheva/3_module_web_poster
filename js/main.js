let canTop = document.body.querySelector('.can_top')
let can = document.body.querySelector('.can')
let bottle = document.body.querySelector('.bottle')
let collar = document.body.querySelector('.collar')
let liquid = document.body.querySelector('.liquid')

let bones = document.body.querySelectorAll('.bone')
let bonesWrapper = document.body.querySelector('.bones')



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


let mainBall = document.body.querySelector('.main_ball')
let balls = document.body.querySelectorAll('.ball')
let ballsWrapper = document.body.querySelector('.balls_wrapper')
let a = Array.from(balls)

function showBalls() {
  ballsWrapper.style.display = 'block'
  a.forEach(element => element.style.display = 'block');
  // let nextX = '0';

  for (let i = 0; i = a.length; i++) {

    a[i].style.top =  a[i].width + 100;
    a[i].style.left = a[i].width;
    // nextX +=   balls[i].width;

  }


}

// let ball1 = document.getElementById('ball1')
// let ball2 = document.getElementById('ball2')
// let ball3 = document.getElementById('ball3')


// let nextX = '0';
// let nextY = '0';
//
//
// var overlap = !(ball1.right < ball2.left ||
//                 ball1.left > ball2.right ||
//                 ball1.bottom < ball2.top ||
//                 ball1.top > ball2.bottom)





// context.drawImage(images.ball, nextX,0);
// nextX+=images.ball.width;
// context.drawImage(images.moon, nextX, 0);
// nextX+=images.moon.width;
// context.drawImage(images.ball, nextX,0);
// nextX+=images.ball.width;
// context.drawImage(images.ball, nextX,300);
// nextX+=images.ball.width;
// context.drawImage(images.ball, nextX,100);
// nextX+=images.ball.width;
// context.drawImage(images.ball, nextX,300);
// nextX+=images.ball.width;
// context.drawImage(images.ball, nextX,200);
// nextX+=images.ball.width;
// context.drawImage(images.ball, nextX,300);
// nextX+=images.ball.width;
// context.drawImage(images.ball, nextX,0);
// nextX+=images.ball.width;
