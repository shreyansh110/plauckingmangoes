class Stone{
constructor(x,y,width,height){
var options={
'restitution':0.4,
'friction':1.2,
'density':1.2,
isStatic:true

}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image=loadImage("sprites/pebble.png");
World.add(world,this.body);


}
display(){
var fj=this.body.position
push();
translate(fj.x,fj.y);
imageMode(CENTER)
image(this.image,0,0,this.width,this.height);
pop();



}






}