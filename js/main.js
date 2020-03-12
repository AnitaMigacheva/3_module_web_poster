// let canTop = document.body.querySelector('.can_top')
let can = document.body.querySelector('.can')
let bottle = document.body.querySelector('.bottle')
let collar = document.body.querySelector('.collar')
let liquid = document.body.querySelector('.liquid')

let bones = document.body.querySelectorAll('.bone')
let bonesWrapper = document.body.querySelector('.bones')

// let collars = document.body.querySelectorAll('.collar_other')
// let collarsArray = Array.from(collars)

let images = new Array();
let i = 0;

images[0] = './img/collar-red.svg';
images[1] = './img/collar-wat.svg';
images[2] = './img/collar-black.svg';
images[3] = './img/collar-eyes.svg';
images[4] = './img/collar-gold.svg';
images[5] = './img/collar-gold.svg';
images[6] = './img/collar-gold.svg';
// images[7] = './img/fish.png';
// let fish = images[7]
// fish.width = '300px';

function changeCollar() {

  let collar = document.getElementById('collar_img')
  // collarsArray.forEach(element => element.style.display = 'block')
  collar.src= images[i];
  i++;
  if (i == images.length) {
    collar.src = './img/collar.svg';
  }
  setTimeout("changeCollar()",900);


}


can.addEventListener('click', () => {
  can.classList.toggle('open')
  openCan()
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

// showBalls ----------------------------------------------

let mainBall = document.body.querySelector('.main_ball')
// let balls = document.body.querySelectorAll('.ball')
// let ballsWrapper = document.body.querySelector('.balls_wrapper')
// let a = Array.from(balls)
// let newBallsArray = []

//function showBalls() {
//  ballsWrapper.style.display = 'block'

  //-------ТУТ РАБОТАЕТ ТОЛЬКО ПРОВЕРКА ДЛЯ 2 СОСЕДНИХ ЭЛЕМЕНТОВ----------

  // a.forEach(element => element.style.display = 'block')
  //
  // function getRandomPosition(element) {
  //   let x = document.body.offsetHeight-element.clientHeight;
  //   var y = document.body.offsetWidth-element.clientWidth;
  //   var randomX = Math.floor(Math.random()*x);
  //   var randomY = Math.floor(Math.random()*y);
  //   return [randomX,randomY]
  // }
  //
  // let i = 0
  //
  // let prev = a[i];
  // console.log(prev);
  // let next = a[i+1];
  // console.log(next);
  //
  // // let next = 1
  //
  // for (i = 0; i < a.length-1; i++) {
  //   let xy = getRandomPosition(ballsWrapper);
  //
  //   a[i].style.width = mainBall.width;
  //   a[i].style.top = xy[0] + 'px';
  //   a[i].style.left = xy[1] + 'px';
  //   a[i].style.right = xy[1] + 'px';
  //   a[i].style.bottom = xy[0] + 'px';
  //
  //   //
  //   // function  checkCollision(el1, el2) {
  //   //  let rect1 = el1.getBoundingClientRect();
  //   //  let rect2 = el2.getBoundingClientRect();
  //   //  let overlap = !(rect1.right < rect2.left ||
  //   //                   rect1.left > rect2.right ||
  //   //                   rect1.bottom < rect2.top ||
  //   //                   rect1.top > rect2.bottom)
  //   //  return overlap;
  //   // }
  //
  //
  //   let rr = prev.getBoundingClientRect();
  //   let bb = next.getBoundingClientRect();
  //
  //       console.log(rr);
  //       console.log(prev);
  //
  //       console.log(bb);
  //       console.log(next);
  //   // console.log(a[i].getBoundingClientRect())
  //
  //
  //
  //
  //   // let collision = checkCollision(prev,next)
  //
  //   let noOverlap = (rr.right < bb.left ||
  //                     rr.left > bb.right ||
  //                     rr.bottom < bb.top ||
  //                     rr.top > bb.bottom)
  //   if (noOverlap) {
  //     a[i+1].style.opacity = '1'
  //   }
  //   console.log(noOverlap);
  // }



  //
  // let rect1 = a[0]
  // let rect2 = a[1]
  //
  //
  // let overlap = !(rect1.top <= rect2.bottom && rect1.bottom >= rect2.top && rect1.left <= rect2.right && rect1.right >= rect2.left)
  //
  //
  // console.log(rect1);
  // console.log(rect2);

//}

// let elements = $(".boxes")
// let x = 60
// let dx = 60

var boxDims = new Array();

function setRandomPos(elements,x,dx) {
console.log(elements);
 elements.each(function(){
  var conflict = true;
  while (conflict) {
      fixLeft=(Math.floor(Math.random()*x)*20) + dx;
      fixTop = (Math.floor(Math.random()*40)*20) + 180;
      $(this).offset({
          left: fixLeft,
          top: fixTop
      });
      var box = {
          top: parseInt(window.getComputedStyle($(this)[0]).top),
          left: parseInt(window.getComputedStyle($(this)[0]).left),
          width: parseInt(window.getComputedStyle($(this)[0]).width),
          height: parseInt(window.getComputedStyle($(this)[0]).height)
      }
      conflict = false;
      for (var i = 0; i < boxDims.length; i++) {
          if (overlap(box, boxDims[i])) {
              conflict = true;
              boxDims[i].style.display = "none"
          } else {
              conflict = false;
          }
      }
  }
  boxDims.push(box)
  // box.style.display = 'block'

});
}

function overlap(box1,box2) {
  var x1 = box1.left
  var y1 = box2.top;
  var h1 = box1.height;
  var w1 = box1.width;
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = box1.left;
  var y2 = box1.top;
  var h2 = box1.height;
  var w2 = box1.width;
  var b2 = y2 + h2;
  var r2 = x2 + w2;



  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2 ) return false;
  return true;
}

setRandomPos($(".boxes"),40,40);
