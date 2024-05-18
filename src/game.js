let screen_width = 400;
let screen_height = 400;

// "Magic" function that is automatically called once at the beginning of your
// game.
function setup() {
  createCanvas(screen_width, screen_height);
  ellipseMode(RADIUS);
}

// "Magic" function that is automatically called over and over to make your game
// run.
function draw() {
  updateGame();
  drawToScreen();
}

function updateGame() {

}

function drawToScreen() {

}

// Can ignore the rest of the code after this line.
// ------------------------------------------------

function setDrawColor(color) {
  fill(color);
  stroke(color);
}

function setDefaultColors() {
  fill("white");
  stroke("white");
}

function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}

let SPACEBAR = 32;
