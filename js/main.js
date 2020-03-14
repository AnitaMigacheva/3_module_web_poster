let canTop = document.body.querySelector('.can_top')
let can = document.body.querySelector('.can')
let bottle = document.body.querySelector('.bottle')
let liquid = document.body.querySelector('.liquid')
let bonesWrapper = document.body.querySelector('.bones')
let collar = document.getElementById('collar_img')
//
// images[0] = './img/collar-red.svg';
// images[1] = './img/collar-wat.svg';
// images[2] = './img/collar-black.svg';
// images[3] = './img/collar-eyes.svg';
// images[4] = './img/collar-gold.svg';
// images[5] = './img/collar-gold.svg';
// images[6] = './img/collar-black.svg';
// // images[7] = './img/fish.png';
// // let fish = images[7]
// // fish.width = '300px';


let images = new Array();
   let i = 0;

   images[0] = './img/collar-red.svg';
   images[1] = './img/collar-gold.svg';
   images[2] = './img/collar-black.svg';

function changeCollar() {
       collar.src = images[i];
       i++;
       if (i == images.length) {
           i = 0;
       }
       setTimeout("changeCollar()",5000);
}


//
// function changeCollar() {
//
//   for (i = 0; i < images.length; i++) {
//     collar.src = images[i];
//     console.log(images[i]);
//
//   }
//   setTimeout("changeCollar()",900);
//   // if (i == images.length) {
//   //   collar.src = './img/collar.svg';
//   // }
//   // setTimeout("changeCollar()",900);
// }


//------------------ОТКРЫВАНИЕ БАНОЧКИ--------------------

can.addEventListener('click', () => {
  can.classList.toggle('open')

  if (can.classList.contains('open')) {
    bonesWrapper.style.display = 'block'
    canTop.style.transform = 'rotate(-40deg) translate(50px, -8%)'
   } else {
    bonesWrapper.style.display = 'none'
    canTop.style.transform = 'rotate(0deg) translate(0px, 0px)'
    // can.style.transform = 'scale(1)'
   }


})



//-----------------------БУТЫЛКА-------------------------

function spill(){
  liquid.style.opacity = '1'
  liquid.style.transform = 'scale(1)'
}


// =------------------ПОЯВЛЕНИЕ ШАРОВ---------------------

let mainBall = document.body.querySelector('.main_ball')

let sortedBalls = []

function getRandomPosition(element) {
  let x = document.body.offsetHeight-element.clientHeight;
  var y = document.body.offsetWidth-element.clientWidth;
  var randomX = Math.floor(Math.random()*x);
  var randomY = Math.floor(Math.random()*y);
  return [randomX,randomY]
}
//
// let balls = new Array()
//
//   for (let i = 0; i < 10; i++) {
//      balls[i] = new Image ();
//      balls[i].src = './img/ball.svg'
//      balls[i].style.position = 'fixed'
//      let xy = getRandomPosition(balls[i]);
//      balls[i].style.width = '10vw';
//      balls[i].style.top = xy[0] + 'px';
//      balls[i].style.left = xy[1] + 'px';
//      balls[i].style.right = xy[1] + 'px';
//      balls[i].style.bottom = xy[0] + 'px';
//      balls[i].style.opacity = '0';
//      document.body.append(balls[i]);
//   }
//

let balls = new Array()

function showBalls() {

  let i = 0;
  for (i = 0; i < 30; i++) {
     balls[i] = document.createElement('img')
     balls[i].src = './img/ball.svg'
     balls[i].style.position = 'fixed'
     balls[i].style.display = 'block'
     balls[i].style.opacity = '1'
     balls[i].classList.add('new_ball')
     balls[i].style.transform = 'rotate(360deg)'
     balls[i].style.width = '16vw'
     let xy = getRandomPosition(balls[i])
     balls[i].style.top = xy[0] + 'px'
     balls[i].style.left = xy[1] + 'px'
     balls[i].style.right = xy[1] + 'px'
     balls[i].style.bottom = xy[0] + 'px'

     document.body.append(balls[i])
     console.log(balls[i].style.display)

     balls[i].addEventListener('mouseenter', function() {
         balls[i].style.display = 'none'
    })
// modern browsers


     // console.log( p.getBoundingClientRect());


  //
  // for (let j = i + 1; j < balls.length-1; j++) {
  //
  //
  //    let prev = balls[i]
  //    let next = balls[j]
  //    console.log(prev);
  //    console.log(next);
  //
  // //    let rr = prev.getBoundingClientRect();
  // //    let bb = next.getBoundingClientRect();
  // //
  // //    console.log(rr);
  // //    console.log(bb);
  // //
  // //
  // //    let noOverlap = (rr.right < bb.left ||
  // //                     rr.left > bb.right ||
  // //                     rr.bottom < bb.top ||
  // //                     rr.top > bb.bottom)
  // //
  // //    if (noOverlap) {
  // //
  // //      // sortedBalls.push(i)
  // //      balls[i].style.opacity = '1';
  // //
  // //
  // //    }
  // //
  // //
  // //  console.log(noOverlap);
  // //
  // }
  }
  balls[0].src = './img/ball-text.svg'
  balls[1].src = './img/moon.png'
  balls[2].src = './img/face.png'
  balls[3].src = './img/ball-text.svg'
  balls[4].src = './img/moon.png'
  balls[5].src = './img/ball-text.svg'
  balls[6].src = './img/face.png'



}


// for (let j = i + 1; j < balls.length; j++) {
//
//
//    let prev = balls[i]
//    let next = balls[j]
//    console.log(prev);
//    console.log(next);
//
//    let rr = prev.getBoundingClientRect();
//    let bb = next.getBoundingClientRect();
//
//    console.log(rr);
//    console.log(bb);
//
//
//    let noOverlap = (rr.right < bb.left ||
//                     rr.left > bb.right ||
//                     rr.bottom < bb.top ||
//                     rr.top > bb.bottom)
//
//    if (noOverlap) {
//
//      // sortedBalls.push(i)
//      balls[i].style.opacity = '1';
//
//
//    }
//
//
//  console.log(noOverlap);
//
// }






//------------ТУТ ПРОВЕРКА OVERLAP JQUERY----------------


// let elements = $(".boxes")
// let x = 60
// let dx = 60
//
// var boxDims = new Array();
//
// function setRandomPos(elements,x,dx) {
// console.log(elements);
//  elements.each(function(){
//   var conflict = true;
//   while (conflict) {
//       fixLeft=(Math.floor(Math.random()*x)*20) + dx;
//       fixTop = (Math.floor(Math.random()*40)*20) + 180;
//       $(this).offset({
//           left: fixLeft,
//           top: fixTop
//       });
//       var box = {
//           top: parseInt(window.getComputedStyle($(this)[0]).top),
//           left: parseInt(window.getComputedStyle($(this)[0]).left),
//           width: parseInt(window.getComputedStyle($(this)[0]).width),
//           height: parseInt(window.getComputedStyle($(this)[0]).height)
//       }
//       conflict = false;
//       for (var i = 0; i < boxDims.length; i++) {
//
//           if (overlap(box, boxDims[i])) {
//               conflict = true;
//               // box.style.display = "none"
//           } else {
//               conflict = false;
//           }
//       }
//   }
//   boxDims.push(box)
//   // box.style.display = 'block'
//
// });
// }
//
// function overlap(box1,box2) {
//   var x1 = box1.left
//   var y1 = box2.top;
//   var h1 = box1.height;
//   var w1 = box1.width;
//   var b1 = y1 + h1;
//   var r1 = x1 + w1;
//   var x2 = box1.left;
//   var y2 = box1.top;
//   var h2 = box1.height;
//   var w2 = box1.width;
//   var b2 = y2 + h2;
//   var r2 = x2 + w2;
//
//
//
//   if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2 ) return false;
//   return true;
// }
//
// setRandomPos($(".boxes"),40,40);
