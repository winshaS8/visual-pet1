 //Create variables here
var myDatabase,dogImg2,dogImg1,dog,foods,foodStock,readStock

function preload()
{
  //load images here 
  dogImg1 = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
 
}

function setup() {
  createCanvas(500,500);
  myDatabase = firebase.database();
  foodStock = myDatabase.ref('food'); 
  foodStock.on("value",readStock);
  foodStock.set(20);
  
  dog = createSprite(250,350,50,50);
  dog.addImage("dog",dogImg1);
  dog.scale = 0.2;

  
  
}

function draw()
 {  
  background(46,139,87);
 
  if(foods !== undefined)
  {
    textSize(20);
    fill(255);
    text("Press up arrow to feed the dog :)",120,30)
    text("food remaining: "+ foods,170,250);
 
  //add styles here
  if(keyWentDown("UP_ARROW"))
  {
    writeStock(readStock);
    dog.addImage("dog",dogImg2);        
  }

  if(keyWentUp("UP_ARROW"))
 {
    dog.addImage("dog",dogImg1);
    foods = foods -1;
 }

  if(foods == 0)
  {
    foods = 20;
  }
}  

  drawSprites();             
}
function readStock(data)
{
   foods = data.val(); 
   console.log("readStock"); 
}

function writeStock(x)
{
  if(x <= 0)
  {
    x = 0
  }
  else
  {
    x = x-1;
  }
}