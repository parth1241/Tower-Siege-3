const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine,world,backgroundImg,score;
function preload(){
  getBackgroundImg();
}
function setup() {
  createCanvas(1000,700);
  score=0;
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(800,600,450,20);
    ss=new Hitter(200,350);
    sling=new SlingShot(ss.body,{x:200,y:350})
    box=new Box(602,550);
    box2=new Box(654,550);
    box3=new Box(706,550);
    box4=new Box(758,550);
    box5=new Box(810,550);
    box6=new Box(862,550);
    box7=new Box(914,550);
    box8=new Box(966,550);
    box9=new Box(627,500);
    box10=new Box(679,500);
    box11=new Box(731,500);
    box12=new Box(783,500);
    box13=new Box(835,500);
    box14=new Box(887,500);
    box15=new Box(939,500);
    box16=new Box(645,450);
    box17=new Box(706,450);
    box18=new Box(758,450);
    box19=new Box(810,450);
    box20=new Box(862,450);
    box21=new Box(914,450);
    box22=new Box(679,400);
    box23=new Box(731,400);
    box24=new Box(783,400);
    box25=new Box(835,400);
    box26=new Box(887,400);
    box27=new Box(706,350);
    box28=new Box(758,350);
    box29=new Box(810,350);
    box30=new Box(862,350);
    box31=new Box(731,300);
    box32=new Box(783,300);
    box33=new Box(835,300);
    box34=new Box(758,250);
    box35=new Box(810,250);
    box36=new Box(783,200);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);
  text("score"+score,900,650);  
  fill("Blue");
  ss.display();
  box.display();
  box.score();
  box2.display();
  box2.score();
  box3.display(); box3.score();
  box4.display(); box4.score();
  box5.display(); box5.score();
  box6.display(); box6.score();
  box7.display(); box7.score();
  box8.display(); box8.score();
  fill("Black");
  box9.display(); box9.score();
  box10.display(); box10.score();
  box11.display(); box11.score();
  box12.display(); box12.score();
  box13.display(); box13.score();
  box14.display(); box14.score();
  box15.display(); box15.score();
  fill("cyan")
  box16.display(); box16.score();
  box17.display(); box17.score();
  box18.display(); box18.score();
  box19.display(); box19.score();
  box20.display(); box20.score();
  box21.display(); box21.score();
  fill("brown");
  box22.display(); box22.score();
  box23.display(); box23.score();
  box24.display(); box24.score();
  box25.display(); box25.score();
  box26.display(); box26.score();
  fill(236, 188, 180);
  box27.display(); box27.score();
  box28.display(); box28.score();
  box29.display(); box29.score();
  box30.display(); box30.score();
  fill(61, 255, 61);
  box31.display(); box31.score();
  box32.display(); box32.score();
  box33.display(); box33.score();
  fill("Silver");
  box34.display();   box34.score();
  box35.display(); box35.score();
  fill(255,215,0)
  box36.display(); box36.score();
  ground.display();
  sling.display();
  console.log("All is Working Fine!")
}
function mouseDragged(){
      Matter.Body.setPosition(ss.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
 sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
   sling.attach(ss.body);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);
  if(hour>=0600 && hour<=1900){
      bg = "light.jpg";
  }
  else{
      bg = "dark.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}