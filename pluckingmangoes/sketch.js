const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body
const Constraint=Matter.Constraint

function preload(){

}

function setup(){
var canvas= createCanvas(1200,580)

engine=Engine.create();
world=engine.world;
//keyPressed();
tree1=new Tree(920,310,500,100);
human=new Boy(330,470,10,10);
support=new Ground(600,570,1300,30);
mango1=new Mango(940,200,70,70);
mango2=new Mango(1020,180,80,80);
mango3=new Mango(900,140,70,70);
mango4=new Mango(840,200,80,80);
mango5=new Mango(940,300,80,80);
mango6=new Mango(1050,270,80,80);
mango7=new Mango(800,290,80,80);
mango8=new Mango(980,100,70,70);
mango9=new Mango(1130,230,70,70);
mango10=new Mango(750,230,70,70);
stone1=new Stone(390,420,50,50);
slingShot=new Chain(stone1.body,{x:265,y:380});
}




function draw(){
//rectMode(CENTER)
background(225);
Engine.update(engine)

tree1.display();
human.display();
support.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
stone1.display();
slingShot.display();

textSize(25);
text("press space to get another chance",100,90);

}

function mouseDragged(){

Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});

}


function mouseReleased(){

slingShot.fly();

}

function keyPressed(){
if (keyCode===32){

Matter.Body.setPosition(stone1.body,{x:265,y:380})
slingShot.attach(stone1.body);

}


}



