let canTop = document.body.querySelector('.can_top')
let can = document.body.querySelector('.can')
let bottle = document.body.querySelector('.bottle')
let collar = document.body.querySelector('.collar')
let liquid = document.body.querySelector('.liquid')

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


//------------------ОТКРЫВАНИЕ БАНОЧКИ--------------------

can.addEventListener('click', () => {
  can.classList.toggle('open')

  if (can.classList.contains('open')) {
    bonesWrapper.style.display = 'block'
    canTop.style.transform = 'rotate(-40deg) translate(50px, -50px)'
   } else {
    bonesWrapper.style.display = 'none'
    canTop.style.transform = 'rotate(0deg) translate(0px, 0px)'
   }

 
})


// function openCan() {
//   if (can.classList.contains('open')) {
//     bonesWrapper.style.display = 'block'
//     canTop.style.transform = 'rotate(-40deg) translate(50px, -50px)'
//   }
// }


//-----------------------БУТЫЛКА-------------------------

function spill(){
  liquid.style.opacity = '1'
  liquid.style.transform = 'scale(1)'
}


// =------------------ПОЯВЛЕНИЕ ШАРОВ---------------------

let mainBall = document.body.querySelector('.main_ball')

let balls = new Array()

let names = ['./img/ball.svg', './img/ball.svg','./img/ball.svg','./img/ball.svg','./img/ball.svg'] // массив адресов/имён файлов изображений

for ( i = 0; i < names.length; i++) {
   balls[i] = new Image ();
   balls[i].src = names[i];
   balls[i].style.position = 'fixed'
}


let sortedBalls = []

function showBalls() {


  function getRandomPosition(element) {
    let x = document.body.offsetHeight-element.clientHeight;
    var y = document.body.offsetWidth-element.clientWidth;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY]
  }



  for (i = 0; i < balls.length; i++) {
    let xy = getRandomPosition(balls[i]);
    // balls[i].style.width = mainBall.width;
    balls[i].style.top = xy[0] + 'px';
    balls[i].style.left = xy[1] + 'px';
    balls[i].style.right = xy[1] + 'px';
    balls[i].style.bottom = xy[0] + 'px';



    for (let j = i + 1; j < balls.length; j++) {


      let prev = balls[i]
      let next = balls[j]
      console.log(prev);
      console.log(next);

      // let rr = prev.getBoundingClientRect();
      // let bb = next.getBoundingClientRect();
      //
      // console.log(rr);
      // console.log(bb);





      let noOverlap = (prev.style.right < next.style.left ||
                       prev.style.left > next.style.right ||
                       prev.style.bottom < next.style.top ||
                       prev.style.top > next.style.bottom)

      if (noOverlap) {

        // sortedBalls.push(i)

        document.body.append(balls[i]);

      }


    console.log(noOverlap);

    }

  }



}


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
