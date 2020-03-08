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
  a.forEach(element => element.style.display = 'block')


  function getRandomPosition(element) {
    var x = document.body.offsetHeight-element.clientHeight;
    var y = document.body.offsetWidth-element.clientWidth;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY]
  }



  let i = 0
  let next = 1
  for (i = 0; i < a.length-1; i++) {
    var xy = getRandomPosition(ballsWrapper);



    a[i].style.width = mainBall.width;

    a[i].style.top = xy[0] + 'px';
    a[i].style.left = xy[1] + 'px';
    a[i].style.right = xy[1] + 'px';
    a[i].style.bottom = xy[0] + 'px';

    next = i+1
    console.log(next);

    console.log( a[i+1].style.right)
    if ( a[i].style.right < a[next].style.left ||
         a[i].style.left > a[next].style.right ||
         a[i].style.bottom < a[next].style.top ||
         a[i].style.top > a[next].style.bottom) {

        console.log('noover')
      } else {
        console.log('over')
      }


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
