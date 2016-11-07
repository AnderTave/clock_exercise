function setup() {
  createCanvas(800,600)
  angleMode(DEGREES)
}

function draw() {
  background(50)
  translate(width/2,height/2);
  
  // seconds
  clockHand(second(),60,2,200,[100])
  
  // minutes
  clockHand(minute(),60,4,150,[180])
  
  // hours
  if (hour()>12) {
    var hour12 = hour()-12;
  } else {
    var hour12 = hour();
  }
  clockHand(hour12,12,6,100,[220])
  
}

function clockHand(timeValue,range,size,radius,col){
  push();
  var angle = map(timeValue,0,range,-90,270);
  console.log(angle)
  noFill();
  noStroke();
  strokeWeight(size)
  stroke(col);
  line(0,0,radius*cos(angle),radius*sin(angle));
  pop()
  
}