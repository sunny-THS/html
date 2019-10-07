function setup() {
  createCanvas(600, 450);
  ball = new Ball();
}

function draw() {
  background(50);
  ball.display();
  ball.move();
  ball.maxMin();
}

function Ball() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.r = 50;
  this.speedX = 5;
  this.speedY = 3;

  this.move = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  this.display = function(){
    noFill();
    strokeWeight(5);
    stroke(255);
    ellipse(this.x, this.y, this.r);
  }
  this.maxMin = function(){
    if(this.x < 0 || this.x > width){
      this.speedX *= -1;
    }
    if(this.y < 0 || this.y > height){
      this.speedY *= -1;
    }
  }
}
