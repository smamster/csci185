let x = 100
let y = 625
let bubbles = []; //top

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

let snowmanlist = []

let snowflakes = []

let snowflakeImage;
//let treeimage;
function setup() {

    createCanvas(canvasWidth, canvasHeight);
generatesnowflakes () 

}

function draw() {
  clear ()

    drawCreature(x , y, 300, '#bfdc65', '#abb880');
    drawCreature(200, 693, 150, '#aebb83', '#227876');
    
    for (const snowflake of snowflakes) {
        image(snowflakeImage, snowflake.x, snowflake.y);
        snowflake.y += snowflake.speed;
        if (snowflake.y > canvasHeight) {
            snowflake.y = -50
           
        }
    
    }

    for (const bubble of bubbles) {
        circle (bubble.x, bubble.y, bubble.size, )
        bubble.y -= bubble.speed;
    
    }

for (let i = 0; i < snowmanlist.length; i++) {
let snowman = snowmanlist [i]; 
    drawCreature (snowman.x, snowman.y, snowman.size) 
    snowman.x += snowman.speed
    if (snowman.x > canvasWidth) {
        snowman.x = 0
    }
}

}
// define your drawCreature function here:
function drawCreature(x, y, size, primaryColor = 'white', secondaryColor = 'black') {

    fill(primaryColor);
    circle(x, y, size / 4);

    fill(primaryColor);
    circle(x, y + size / 4 + size / 24, size / 3);

    fill('black');
    circle(x - size / 30, y - size / 30, size / 50);

    fill('black');
    circle(x + size / 30, y - size / 30, size / 50);

    fill('black');
    circle(x, y + size / 4, size / 100);

    fill('black');
    circle(x, y + size / 3, size / 100);

    fill('black');
    circle(x, y + size / 6, size / 100);




    const offset = size / 50

    beginShape();

    fill('orange');
    stroke('black');
    vertex(x - offset, y + offset);//bottom left
    vertex(x + size / 10 - offset, y + offset) //bottom right
    vertex(x - offset, y - size / 30 + offset); //top
    endShape(CLOSE)

    rectMode(CENTER)
    fill(secondaryColor)
    rect(x, y - size / 4 + size / 24, size / 10, size / 6, 5);

    rectMode(CENTER)
    fill(secondaryColor)
    rect(x, y - size / 8, size / 3, size / 10, 5)



}

function mousePressed() {
    drawCreature(mouseX, mouseY, 200);
let snowman = {x:mouseX, y:mouseY, size: Math.random() * 50 + 50, speed: Math.random() * 5}
snowmanlist.push(snowman)
}

function movePlayer(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        y -= 2;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        y += 2;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 2;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 2;
    } else if (ev.code == 'Space') {
        shoot();
}
}

function shoot() {
    const bubble = {
        x: x,
        y: y - 25,
        size: 8,
        speed: 10
    }
    bubbles.push(bubble)
    console.log(bubbles)
}


document.addEventListener('keydown', movePlayer);

function preload() {
    snowflakeImage = loadImage('snowflake.png');
   // treeimage = loadImage('tree1.png');
  } 
  function generatesnowflakes () {
    for (let i = 0; i < 100; i++) {
        let snowflake = { x : Math.random() * canvasWidth,
        y : Math.random() * canvasHeight, 
    speed : Math.random() * 2.5 + .5}
            snowflakes.push(snowflake);
           
            snowflakeImage = loadImage('snowflake.png');

    }
  }