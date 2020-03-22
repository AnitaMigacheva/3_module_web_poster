let canTop = document.body.querySelector('.can_top')
let can = document.body.querySelector('.can')
let bottle = document.body.querySelector('.bottle')
let liquid = document.body.querySelector('.liquid')
let bonesWrapper = document.body.querySelector('.bones')
let collar = document.getElementById('collar_img')
let wrapper2 = document.querySelector('.wrapper2')
let items = document.body.querySelector('.items')


let images = new Array()

// let fishImg = './img/fish.png'
let i = 0
images[0] = './img/collar-red.svg'
images[1] = './img/collar-gold.svg'
images[2] = './img/collar-black.svg'
images[3] = './img/collar-red.svg'
images[4] = './img/collar-wat.svg'
images[5] = './img/collar-eyes.svg'
// images[6] = './img/fish.png'


collar.addEventListener('click', () => {
  collar.classList.toggle('changing')
  changeCollar()
})

function changeCollar() {
  if(collar.classList.contains('changing') && i < images.length) {
    collar.src = images[i];
    i++;
    setTimeout('changeCollar()', 600);
  } else {
    collar.src = './img/collar.svg'
    i = 0;
  }
}


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

bottle.addEventListener('click', () => {
  bottle.classList.toggle('open')

  if (bottle.classList.contains('open')) {
    liquid.style.opacity = '1'
    liquid.style.transform = 'scale(1.6)'
   } else {
     liquid.style.opacity = '0'
     liquid.style.transform = 'scale(1)'
   }
})


// =------------------ПОЯВЛЕНИЕ ШАРОВ---------------------

let mainBall = document.body.querySelector('.main_ball')

// let sortedBalls = []

function getRandomPosition(element) {
  let x = document.body.offsetHeight-element.clientHeight;
  var y = document.body.offsetWidth-element.clientWidth;
  var randomX = Math.floor(Math.random()*x);
  var randomY = Math.floor(Math.random()*y);
  return [randomX,randomY]
}

let balls = new Array()
let delay = 90;
let btnCreatBall = document.querySelector('.ball')
btnCreatBall.onclick = function() {

  for (let i = 0; i < 40; i++) {
    balls[i] = document.createElement('img')
    balls[i].src = './img/ball.svg'
    balls[i].style.position = 'fixed'
    balls[i].style.display = 'block'
    balls[i].classList.add('new_ball')
    balls[i].style.width = mainBall.width
    balls[i].style.top = '0'
    let xy = getRandomPosition(balls[i])
    balls[i].style.top = xy[0] + 'px'
    balls[i].style.left = xy[1] + 'px'
    balls[i].style.right = xy[1] + 'px'
    balls[i].style.bottom = xy[0] + 'px'
    delay+=90
    //
    // balls[i].style.transform = `translate(${anime.random(0,90)}vw, ${anime.random(0,100)}vh)`
    setTimeout(function(){
      document.body.append(balls[i])}, delay)
      balls[i].addEventListener('mouseout', function() {
      balls[i].style.display = 'none';
    });
  }

  balls[0].src = './img/ball-text.svg'
  balls[1].src = './img/moon.png'
  balls[2].src = './img/face.png'
  balls[3].src = './img/ball-text.svg'
  balls[4].src = './img/moon.png'
  balls[5].src = './img/ball-text.svg'
  balls[6].src = './img/face.png'
  balls[7].src = './img/ball-text.svg'
  balls[8].src = './img/moon.png'
  balls[9].src = './img/face.png'
}


//-----------------СЛАЙДЕР ДЛЯ ТЕЛЕФОНА--------------------

function changeCollarMobile() {
   collarMobile.src = images[i];
   i++;
   if (i == images.length) {
     i = 0;
     collarMobile.style.width = '100%'
   }
   setTimeout('changeCollarMobile()', 800);
}
let ballMobile = document.querySelector('.main_ball_mobile')

$(window).resize(function() {
  if (window.innerWidth < 600 ){
     items.remove()
  } else {
    wrapper2.append(items)
  }
});

$(document).ready(function () {
  //initialize swiper when document ready
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    preventClicks: false,
    preventClicksPropagation: false,
    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
    }
  })
})

let liquidMobile =  document.body.querySelector('.liquid_mobile')
let swiperWrapper = document.querySelector('.swiper-wrapper')
let btnCreatBallMobile = document.querySelector('.main_ball_mobile')
let collarMobile = document.querySelector('.collar_mobile')

swiperWrapper.addEventListener('click', function(event){
  if(event.target.classList.contains('bottle_mobile')) {
    liquidMobile.style.opacity = '1'
    liquidMobile.style.transform = 'scale(1)'
  } else if (event.target.classList.contains('collar_mobile')) {
    changeCollarMobile()

  }
})
