function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    createCanvas(canvasWidth, canvasHeight);


    // Exercise 4:
    drawFace(100, 400, 50);
    drawFace(200, 300, 100,);
    drawFace(300, 400, 50, 'green');
    drawFace(400, 400, 100,'yellow');
    drawFace(600, 500, 250,'purple'); 


    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {
    fill('hotpink');
    circle(100, 100, 100);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill('teal');
    ellipse(100, 200, 100, 62.5);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size,) {
    fill('teal');
    circle(100, 300, 100);
    fill('navy');
    circle(100, 300, 75);
    fill('teal');
    circle(100, 300, 50);
    fill('navy');
    circle(100, 300, 25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size, faceColor = 'pink') {
    strokeWeight(0);
    fill(faceColor);
    circle(centerX, centerY, size); // 100, 400, 50
    fill('black');
    let sf = size / 6.5;
    circle(centerX - sf, centerY - sf, sf);     // left eye
    circle(centerX + sf, centerY - sf, sf);    // right eye
    noFill()
    stroke('black');
    strokeWeight (size/35);
    curve(
        centerX - sf, centerY -size/2, //left control point
        centerX - sf, centerY, // start of line
        centerX + sf, centerY, // end of line
        centerX + sf, centerY -size/2) // control point for right

}


