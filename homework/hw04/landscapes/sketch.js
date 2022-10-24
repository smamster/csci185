// const canvasWidth = window.innerWidth;
// const canvasHeight = window.innerHeight; 

// async function setup() {
//     createCanvas(canvasWidth, canvasHeight);
    
//     // picks a random number between 0 and 100:
//     let rando = Math.random() * 100;
//     console.log(rando);
    
//     // picks a random number between 10 and 500:
//     rando = Math.random() * 490 + 10;
//     console.log(rando);
    
//     // draws 4 stars: 
//     strokeWeight(0);
//     fill('white');
//     circle(50, 80, 2.5);
//     circle(50, 400, 1.5);
//     circle(600, 287, 3);
//     circle(400, 143, 1.5);
// }

// function drawStars() {
//     strokeWeight(0);
//     fill('white');
//     for (let i = 0; i < 1000; i++) {
//         const x = Math.random() * canvasWidth;
//         const y = Math.random() * canvasHeight;
//         const width = Math.random() * 2 + 0.5;
//         circle(x, y, width);
//     }
// }

// function drawBubbles() {
//     strokeWeight(1);
//     stroke('white');
//     noFill()
//     for (let i = 0; i < 500; i++) {
//         const x = Math.random() * canvasWidth;
//         const y = Math.random() * canvasHeight;
//         const width = Math.random() * 40 + 5;
//         circle(x, y, width);
//     }
// }

// const circleData = [
//     {x: 500, y: 50, d: 100, speedX: 3, speedY: 3},
//     {x: 300, y: 150, d: 50, speedX: 2, speedY: 0},
//     {x: 400, y: 400, d: 25, speedX: 0, speedY: 1},
//     {x: 40, y: 520, d: 80, speedX: 2, speedY: 0},
//     {x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5},
//     {x: 350, y: 350, d: 70, speedX: 1, speedY: 1}
// ];

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    let i = 0
        while (i < 200) {
        const ball = {
            x: randomIntFromInterval(0, canvasWidth),
            y: randomIntFromInterval(0, canvasHeight),
            d: randomIntFromInterval(5, 10),
            speedX: 3,
            speedY: 2,
        };
         circle (ball.x, ball.y, ball.d)
        i++;
        }
    }

        // initialize variables outside of the function:

        // let x = 0;
        // let y = 0;
        // let d = 50;
        // let speedX = 3;
        // let speedY = 2;

        const ball1 = {
            x: randomIntFromInterval(300, 500),
            y: 0,
            d: randomIntFromInterval(20, 50),
            speedX: 3,
            speedY: 2,
        }

        function randomIntFromInterval(min, max) {
            // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min);
        }


const palette = ['red', 'blue', 'green', 'pink', 'purple']

function draw(){let i = 0
   clear ()
   frameRate(10)
   
    while (i < 1000) {
        const color= palette[randomIntFromInterval(0,4)];
        fill(color);
    const ball = {
        x: randomIntFromInterval(0, canvasWidth),
        y: randomIntFromInterval(0, canvasHeight),
        d: randomIntFromInterval(5, 10),
        speedX: 3,
        speedY: 2,
    };
     circle (ball.x, ball.y, ball.d)
    i++;
    }}

