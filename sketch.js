var tom,jerry,jerryimg,tomimg,cat1img,catimg2,mouse2,mouse3,gardenimg,garden;
function preload() {
    //load the images here
tomimg.loadAnimation=("images/cat2.png,cat3.png");
cat1img.loadImage=("images/cat1.png");
catimg2.loadImage=("images/cat4.png");
jerryimg.loadAnimation=("images/mouse2.png,mouse3.png");
mouse2.loadImage=("images/mouse1.png");
mouse3.loadImage=("images/mouse4.png");
gardenimg.loadImage=("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
jerry=createSprite(200,200,20,30);
jerry.addImage(mouse2);
tom.addImage(cat2.png);
garden.addImage(garden.png);
tom=createSprite(100,200,30,50);
garden=createSprite(1000,800);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if ( tom.isTouching(jerry)){
tom.changeImage(catimg2);
jerry.changeImage(mouseimg3);
}
 
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keycode === LEFT_ARROW){
    tom.x=tom.x-20;
    tom.changeAnimation(tomimg);
    jerry.changeAnimation(jerryimg);
}


}
