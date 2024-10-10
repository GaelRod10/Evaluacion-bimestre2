let circleX, circleY; 
let rectX, rectY;     
let circleSpeedX = 3; 
let circleSpeedY = 2; 
let rectSpeedX = 2;   
let rectSpeedY = 3;   

function setup() {
  let canvas = createCanvas(400, 400); 
  canvas.parent('canvas-container');   
  circleX = width / 2;
  circleY = height / 2;
  rectX = random(width);
  rectY = random(height);
}

function draw() {
  background(220);


  fill(100, 200, 255);
  ellipse(circleX, circleY, 50, 50);


  fill(255, 100, 150);
  rect(rectX, rectY, 60, 40);


  circleX += circleSpeedX;
  circleY += circleSpeedY;


  rectX += rectSpeedX;
  rectY += rectSpeedY;


  if (circleX > width - 25 || circleX < 25) {
    circleSpeedX *= -1; 
  }
  if (circleY > height - 25 || circleY < 25) {
    circleSpeedY *= -1; 
  }


  if (rectX > width - 60 || rectX < 0) {
    rectSpeedX *= -1; 
  }
  if (rectY > height - 40 || rectY < 0) {
    rectSpeedY *= -1; 
  }
}
