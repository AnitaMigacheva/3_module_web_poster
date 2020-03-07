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


// function showBalls() {
//   ballsWrapper.style.display = 'block'
//   balls.forEach(element => element.style.display = 'block');
// }

function loadImages(sources, callback) {
    let images = {};
    let loadedImages = 0;
    let numImages = 0;
    // get num of sources
    for ( let src in sources) {
        numImages++;
    }
    for ( let src in sources) {
        images[src] = new Image();
        images[src].onload = function() {
            if (++loadedImages >= numImages) {
                callback(images);
                }
        };
        images[src].src = sources[src];
    }
}
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
fitToContainer(canvas);
let sources = {
    ballText: 'img/ball-text.svg',
    moon: 'img/moon.png',
    face: 'img/face.png',
    ball: 'img/ball.svg'
};


loadImages(sources, function(images) {
let nextX = 0;
let nextY = 0;
context.drawImage(images.ball, nextX,0);
nextX+=images.ball.width;
context.drawImage(images.moon, nextX, 0);
nextX+=images.moon.width;
context.drawImage(images.ball, nextX,0);
nextX+=images.ball.width;
context.drawImage(images.ball, nextX,300);
nextX+=images.ball.width;
context.drawImage(images.ball, nextX,100);
nextX+=images.ball.width;
context.drawImage(images.ball, nextX,300);
nextX+=images.ball.width;
context.drawImage(images.ball, nextX,200);
nextX+=images.ball.width;
context.drawImage(images.ball, nextX,300);
nextX+=images.ball.width;
context.drawImage(images.ball, nextX,0);
nextX+=images.ball.width;
// ...and so on...
});

function fitToContainer(canvas) {
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    canvas.style.position = 'absolute';
    canvas.style.zIndex = '1';
}
