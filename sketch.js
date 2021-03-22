var  cat;
var  mouse;
var catImg2;
var mouseImg;
var keyPressed;

function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
catImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
mouseImg = loadAnimation("images/jerryOne.png");
catImg1 = loadAnimation("images/tomOne.png");
mouseImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
catImg3= loadAnimation("images/tomFour.png")
mouseImg3 = loadAnimation("images/jerryFour.png")

}

function setup(){
   canvas= createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600);
  cat.addAnimation("catRunning",catImg2);
  cat.scale=0.5;
mouse = createSprite(200,600);
mouse.addAnimation("mouseDancing",mouseImg);
mouse.scale=0.5;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
cat.velocityX=0
cat.addAnimation("anything",catImg3)
cat.x=300
cat.scale=0.2
cat.changeAnimation("anything");


mouse.addAnimation("anything1",mouseImg3)
mouse.scale=0.15
mouse.changeAnimation("anything1");
    }

   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catrunning",catImg2)
    cat.changeAnimation("catrunning")
    mouse.addAnimation("mouseDancing",mouseImg2)
    mouse.frameDelay=25
     mouse.changeAnimation("mouseDancing")
    
 
    
  }
}
