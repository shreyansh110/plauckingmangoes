class Stone{
constructor(x,y,width,height){
var options={
'restitution':0.1,
'friction':1,
'density':2.3,
isStatic:false

}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image=loadImage("sprites/pebble.png");
World.add(world,this.body);


}
display(){
 //this.body.position.x=mouseX
 //this.body.position.y=mouseY
var fj=this.body.position
push();
translate(fj.x,fj.y);
imageMode(CENTER)
image(this.image,0,0,70,70);

//rectMode(CENTER);
//rect(0,0,this.width,this.height);
pop();



}






}