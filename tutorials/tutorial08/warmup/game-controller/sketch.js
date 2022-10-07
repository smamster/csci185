let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    fill('purple');

    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

const moveController = ev => {
    console.log(ev.code);
    // TODO:
    // left arrow moves circle left
    // right arrow moves circle right
  
  
    // up arrow moves circle up
  if (ev.code == 'ArrowUp') {y = y - 2;
} else if (ev.code == 'ArrowDown') { y = y + 2;}
if (ev.code == 'ArrowLeft') {x = x - 2;
} else if (ev.code == 'ArrowRight') { x = x + 2;}
  else if (ev.code == 'KeyR') {fillcolor = 'red';}
  else if (ev.code == 'KeyP') {fillColor = 'purple';}
  
    // down arrow moves circle down


    // redraw circle:
    clear();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
