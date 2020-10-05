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
World.add(world,this.body);




}


display(){


translate(this.body.position.x,this.body.position.y);
rectMode(CENTER);





}







}