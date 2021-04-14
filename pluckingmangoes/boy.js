class Boy{
constructor(x,y,width,height){

var options={
'restitution':2.0,
'friction':1.2,
'density':1.2,
isStatic:true
}

this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width
this.height=height
this.image=loadImage("sprites/boy.png");

World.add(world,this.body);
}

display(){
var pc=this.body.position
push();
translate(pc.x,pc.y);
imageMode(CENTER);
image(this.image,0,0,200,400);
//rectMode(CENTER);
//rect(0,0,this.width,this.height);
pop();


}





}