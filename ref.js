let ship_width = 30;
let ship_height = 20;
let ship_y = 350;
let ship_x = 400 / 2;

let laser = false;
let laser_x = 0;
let laser_y = 0;

let asteroid_radius = 20;
let asteroid = false;
let asteroid_x = 0;
let asteroid_y = 0;

function setup() {
  createCanvas(400, 400);
  ellipseMode(RADIUS);
}

function draw() {
  setDefaultColors();
  background("black");

  // Section: Create asteroid at random position.
  if (asteroid === false) {
    asteroid_x = randomNumberBetween(20, 400 - 20);
    asteroid_y = randomNumberBetween(20, 50);
    asteroid = true;
  }
  // End section.

  // Section: Render objects to the screen.
  // Draw ship.
  rect(ship_x, ship_y, ship_width, ship_height);
  // Draw asteroid.
  circle(asteroid_x, asteroid_y, asteroid_radius);

  if (laser) {
    drawLaser();
  }
  // End section.

  // Section: Check for object collisions.
  if (laser_y < 0) { // laser went off-screen
    laser = false;
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

function keyPressed() {
  if (keyCode === SPACEBAR) {
    if (laser === false) {
      console.log("laser!");
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
