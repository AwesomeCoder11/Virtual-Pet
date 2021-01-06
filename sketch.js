var dog, dogImage, happyDog, happyDogImage
var database
var foodS, foodStock

function preload()
{
  dogImage = loadImage("dogImg.png");
  happyDogImage = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog.addImage(dogImage);

  food=database.ref('Food');
  foodStock.on("value", readStock)
}


function draw() {  
  background(46, 138, 87);

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(happyDogImage);

  }

  drawSprites();
  //add styles here

}

function readStock(data){

foodS = data.val();

}

function writeStock(x){

if(x<=0){
  x=0;
}
else{
  x=x-1;
}

database.ref('/').update({
Food: x  
})

}