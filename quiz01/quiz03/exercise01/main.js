const makeRed = () => {
    // your code here...
    console.log('Change background to red');
    document.querySelector('body').style.backgroundColor = 'red';
};


function color2() {
    // target the element with the id of square2
    // and change its background color...
}

function color3() {
    // TODO
}

function color4() {
    // TODO
}

function color5() {
    // TODO
}

function color6() {
    // TODO
}
// coundnt figure it out so i watched a couple youtube videos. I am sorry, i hope this is okay
var grid = document.createElement('div');
grid.style.width = '700px';
grid.style.height = '100px';
grid.style.display = 'grid';
grid.style.gridTemplateColumns = '200px 200px 200px';
grid.style.gridTemplateRows = '200px 200px';
for (var i = 0; i < 6; i++) {
  var square = document.createElement('div');
  square.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  square.style.border = '2px solid black';
  square.style.margin = '10px';
  square.addEventListener('click', function() {
    this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  });
  grid.appendChild(square);
}
document.body.appendChild(grid);