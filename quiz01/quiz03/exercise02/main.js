const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawMonster(100, 100, 150, '#0bc9cd', true);
    drawMonster(300, 200, 75, '#8093f1', false);
    drawMonster(100, 325, 100, '#8093f1', false);
    drawMonster(250, 375, 125, '#7fb285', true);
    drawMonster(550, 200, 250, '#7fb285', true);

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawMonster(x, y, size, color, nose=true) {
    rectMode(CENTER);
    fill(color);
    rect(x, y, size);

    fill('white');
    rect(x - size/9, y - size/7, size/5);
    rect(x + size/9, y - size/7, size/5);
    
    fill('black');
    rect(x - size/9, y - size/7, size/18);
    rect(x + size/9, y - size/7, size/18);
    
    

    fill('black');
   rect(x , y + size/6, size/10, );
    
   
}
