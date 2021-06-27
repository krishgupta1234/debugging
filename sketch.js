const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg, platform;
var logthen, slingshot;
var score = 0;
var gamestate = "onsling"
function preload() {
    getBackgroundImg();
   // backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    //string
    var string = 'this is my coding class'
    console.log(string)

    //number
    var num = 100
    console.log(num)

    //boolean 
    var bool = true
    console.log(bool)

    //undefined
    var object
    console.log(object)

    //Re-assign the same undefined object to null 
    var object = null
    console.log(object)

    //ARRAY example
     //an Array holding same datatype 
    var arr1 = [1, 2, 3, 4]  
    console.log(arr1)

    //an array holding different datatype 
    var arr2 = [1, "krish", true, null] 
    console.log(arr2)

//array storing a list of array 
var arr3 =[[1,3],[21,22],[3.9],[54.121]]
 console.log(arr3)
  console.log([0][1])
 arr3.push("english")
console.log(arr3)
arr3.pop()
console.log(arr3)
    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 300, 300, 170);

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig3 = new Pig(810, 220);

    log3 = new Log(810, 180, 300, PI / 2);

    box5 = new Box(810, 160, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    bird = new Bird(200, 50);
    slingshot = new SlingShot(bird.body, { x: 200, y: 50 })
}

function draw() {
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
   // getBackgroundImg();
   noStroke(); 
   textSize(35)
    fill("white") 
    text("Score " + score, width-300, 50)


    // console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score()

    log1.display();

    box3.display();
    box4.display();
    pig3.display();
pig3.score()

    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    slingshot.display();
}
function mouseDragged() {
    if(gamestate!=="launched"){
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY })
 }
}
function mouseReleased() {
    slingshot.fly()
gamestate = "launched"

}
function keyPressed() {
    if (keyCode === 32 && bird.body.speed<1) {
       bird.trajectory = []
      Matter.Body.setPosition(bird.body,{x:200,y:50})
        slingshot.attach(bird.body)
    }
}

async function getBackgroundImg(){
    
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

 var responseJSON = await response.json();
 //console.log(responseJSON)
 var datetime = responseJSON.datetime;
//console.log(datetime)
//2021-06-23T14:39:26.147640+05:30
var hour = datetime.slice(11,13);
console.log(hour)

if(hour>=06 && hour<=19){ 
    bg = "sprites/bg.png";
 } 
else{
     bg = "sprites/bg2.jpg";
 }
 backgroundImg = loadImage(bg);
  console.log(backgroundImg);



}

