var bg,bg2,form,system,code,security;
var score=0;
var bg2,bg2Img;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2 = loadImage("treasure.jpg");
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }
  fill("white") 
  textSize(15) 
  text("C U T N I F O N", 700,150) 
  fill("lightblue") 
  text("Hint: Performs a particular task !!", 700,170)

  fill("white") 
  textSize(15) 
  text("A T E D A S B A", 100,230) 
  fill("lightblue") 
  text("Hint: Stores all information !!", 100,250)

  drawSprites()
}