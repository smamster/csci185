function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):

    // drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    drawCreature(487, 110, 500, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
    // drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    // drawCreature(117, 314, 91, '#648d8e', '#afc272');

    drawGrid(canvasWidth, canvasHeight);
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
    drawCreature(mouseX, mouseY, 500);

}


