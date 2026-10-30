let eye2Y  = 0;
let eye2Speed;
let shirtX = 0;
let shirtSpeed;

let triangleX = 0;
let triangleY = 0;
let triangleSpeedX;
let triangleSpeedY;
let triangleColor = 230;
let colorSpeed = 1;

let titleSize = 20;
let titleSpeed = 1;
let titleCount = 0;
let growing = true;

function setup() {
  createCanvas(400, 450);

  eye2Speed = random(1, 3);
  shirtSpeed = random(1, 3);
  triangleSpeedX = random(1, 3);
  triangleSpeedY = random(1, 3);
}

function draw() {
  background(220);
 
  //Hair 
  fill(70, 45, 30);
  ellipse(200, 140, 150, 170);
 
  //Face
  fill(240, 190, 150);
  ellipse(200, 150, 110, 135);

  // Second eye moves vertically
  eye2Y += eye2Speed;

  if (eye2Y > 5 || eye2Y < -5) {
    eye2Speed *= -1;
  }

  // Shirt moves hirizontally
  shirtX += shirtSpeed;

  if (shirtX > 5 || shirtX < -5) {
    shirtSpeed *= -1;
  }
  
  //Eyes move up and down together
  fill(255);
  ellipse(178, 140 + eye2Y, 22, 12);
  ellipse(222,  140 + eye2Y, 22, 12);
  fill(40);
  circle(178, 140+ eye2Y, 7);
  circle(222, 140 + eye2Y, 7);
 
  //Nose and mouth
  stroke(80, 45, 30);
  strokeWeight(2);
  line(200, 145, 193, 165);
  line(193, 165, 204, 165);
  line(185, 183, 215, 183);
  strokeWeight(1);
  noStroke();
 
  //Shirt
  fill(100, 80, 160);
  rect(145 + shirtX, 215, 110, 75);

 // Triangle moves diagonally
  triangleX += triangleSpeedX;
  triangleY += triangleSpeedY;

  if (triangleX > 5 || triangleX < -5) {
    triangleSpeedX *= -1;
}

  if (triangleY >5 || triangleY < -5) {
  triangleSpeedY *= -1;
}

triangleColor += colorSpeed;

  if (triangleColor >= 255 || triangleColor <= 150) {
    colorSpeed *= -1;
  }

  fill(triangleColor, 180, 80);
  
  triangle(
  170 + triangleX, 235 + triangleY,
  200 + triangleX, 275 + triangleY,
  230 + triangleX, 235 + triangleY
); 

  //Point detail
  stroke(0);
  strokeWeight(8);
  point(165, 250);
  strokeWeight(1);
  noStroke();
  
  //Title grows and shrinks
  if (growing) {
    titleSize += titleSpeed;

    if (titleSize >= 30) {
      growing = false;
   }
  } else {
    titleSize -= titleSpeed;

    if (titleSize <= 20) {
      growing = true;
      titleCount++;
    }
  }
  if (titleCount >= 5) {
    titleSize = 20;
  }

  fill(0);
  noStroke();
  textSize(titleSize);
  textAlign(CENTER);
  text("My Self-Potrait", 200, 350);
  
  //Signature
  fill(0)
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text("Shana Brown", 200, 385);
}
