const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 5,
    color: 'purple'

};
const c2 = {
    x: 1000,
    y: 300,
    width: 200,
    speed: -3,
    color: 'pink'

};

const c3 = {
    x: 100,
    y: 500,
    width: 100,
    speed: 2,
    color: 'green'

};
const t1 = {
    x: 100,
    y: 400,
    width: 100,
    speed: -4,
    color: 'blue'
}

// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:

    if (c1.x > canvasWidth + 100) {
        c1.x = 0 - 100
    }
    c1.x += c1.speed;
    c2.x += c2.speed;

    if (c2.x < 0 - 100) {
        c2.x = 1000
    }
    c2.x += c2.speed;

    if (c3.x > canvasWidth + 100) {
        c3.x = 0 - 100
    }
    c3.x += c3.speed;

    if (t1.x < 0 - 100) {
        t1.x = 1500
    }
    t1.x += t1.speed;

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x, c2.y, c2.width, c2.color);
    drawCar(c3.x, c3.y, c3.width, c3.color);
    drawTruck(t1.x, t1.y, t1.width, t1.color);


    // draw the grid (optional -- feel free to remove this line):
    drawGrid(canvasWidth, canvasHeight);


}


function drawCar(x, y, size, fillColor, wheelColor = 'black') {
    strokeWeight(0);

    // body
    fill(fillColor);
    rect(x - size / 4, y - (size / 5 + size / 7), size / 2, size / 7); // top
    rect(x - size / 2, y - size / 5, size, size / 5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);


}
function drawTruck(x, y, size, fillColor, wheelColor = 'black') {
    strokeWeight(0);

    // body
    fill(fillColor);
    rect(x - size / 4, y - (size / 5 + size / 7), size / 6, size / 7); // top
    rect(x - size / 2, y - size / 5, size, size / 5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);


}

