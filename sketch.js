var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var bell


var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  bellSound = loadSound("sound/bell.mp3");
  
  mainRacerImg3 = loadAnimation("images/mainPlayer3.png")
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
  score = 0;
}

function draw() {
  background(0);
  
  
  if(keyDown("q")){
    bellSound.play();
  }
  
  
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ score,350,30);
  
  if(gameState===PLAY){
   score = score + Math.round(getFrameRate()/20);
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
   
    
    if(frameCount % 60 === 0){
      ObstaclesSet1();
    }
   
    
 
    
}
  
}



function ObstaclesSet1() {
  Player1 = createSprite(500, random(50,250), 20, 20);
  Player1.scale = -0.06;
  Player1.addAnimation("Rolling", mainRacerImg1)

  Player1.lifetime = 300;
  Player1.velocityX = -2;
}