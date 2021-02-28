class Mango{
constructor(x,y,width,height){
var options ={
'restitution':0,
'friction':1,
'density':1.2,
isStatic:true
}

this.body=Bodies.rectangle(x,y,width,height,options);
this.height=height
this.width=width
this.image=loadImage("sprites/mango.png");
World.add(world,this.body)

}

display(){
var pq=this.body.position;
push();
translate(pq.x,pq.y);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();

}






}