class Tree{
constructor(x,y,width,height){
var options={
'restitution':2,
'friction':2,
'density':3,
isStatic:true



}


this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height;
this.image=loadImage("sprites/tree.png");

World.add(world,this.body);



}


display(){
push();
var pc=this.body.position
translate(pc.x,pc.y);
image(this.image,100,200,50,60);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();




}







}