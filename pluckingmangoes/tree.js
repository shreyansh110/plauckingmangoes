class Tree{
constructor(x,y,width,height){
var options={
'restitution':0.2,
'friction':5,
'density':7,
isStatic:true

}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width
this.height=height
this.image=loadImage("sprites/tree.png");

World.add(world,this.body)




}

display(){
var tc=this.body.position
push();
translate(tc.x,tc.y);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height)
pop();





}


















}