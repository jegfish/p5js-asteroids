let screen_width = 400;
let screen_height = 400;

let ship_width = 30;
let ship_height = 20;
let ship_y = 350;
let ship_x = screen_width / 2;

let laser = false;
let laser_x = 0;
let laser_y = 0;

let asteroid_radius = 20;
let asteroid = false;
let asteroid_x = 0;
let asteroid_y = 0;

let points = 0;

// "Magic" function that is called once at the beginning of your game.
function setup() {
  createCanvas(screen_width, screen_height);
  ellipseMode(RADIUS);
}

// "Magic" function that is called over and over to make your game run.
function draw() {
  updateGame();
  drawToScreen();
}

function updateGame() {
  // Section: Create asteroid at random position.
  if (asteroid === false) {
    asteroid_x = randomNumberBetween(20, screen_width - 20);
    asteroid_y = randomNumberBetween(20, 50);
    asteroid = true;
  }
  // End section.

  // Section: Check for object collisions.
  if (laser_y < 0) { // laser went off-screen
    laser = false;
  }
  let laserAsteroidDistance = Math.pow(laser_x - asteroid_x, 2) + Math.pow(laser_y - asteroid_y, 2);
  if (asteroid && laserAsteroidDistance <= Math.pow(asteroid_radius, 2)) {
    laser = false;
    asteroid = false;
    laser_x = 0
    laser_y = 0
    points = points + 1;
    console.log(points);
  }
  // End section.

  // Section: Handle user input.
  if (keyIsDown(LEFT_ARROW)) {
    ship_x = ship_x - 3;
  } else if (keyIsDown(RIGHT_ARROW)) {
    ship_x = ship_x + 3;
  }
  // End section.

  // Section: Make time move forward.
  if (laser) {
    laser_y = laser_y - 10;
  }
  // End section.
}

function drawToScreen() {
  setDefaultColors();
  background("black");

  // Draw ship.
  rect(ship_x, ship_y, ship_width, ship_height);
  // Draw asteroid.
  circle(asteroid_x, asteroid_y, asteroid_radius);

  if (laser) {
    drawLaser();
  }
}

// Magic function that is automatically called when the user presses any key.
function keyPressed() {
  if (keyCode === SPACEBAR) {
    if (laser === false) {
      laser_x = ship_x;
      laser_y = ship_y;
      laser = true;
    }
  }
}

function drawLaser() {
  setDrawColor("red");
  rect(laser_x, laser_y, 10, 40);
  setDefaultColors();
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
