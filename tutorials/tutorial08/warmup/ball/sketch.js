const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;

function draw() {
     frameRate(4);
    clear();

    //when ball hit right wall,
    //make it bounce
    if ( x>= 500 - width/2) {
        speed = (speed + 1) * -1;
        width = width + 2; 
    }
    else if ( x<= 175) {
        speed = -1 * speed + 1;
        width = width + 2;
    }

    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight);
    rect(500, 0, 50, canvasHeight);

    // draw circle:
    fill('black');
    circle(x, canvasHeight/2, 50);
    x += speed;
    console.log("x position is:", x);

    drawGrid(canvasWidth, canvasHeight);
}