class Ground{
constructor(x,y,width,height){

var options={
'restitution':2.0,
'friction':1.2,
'density':1.2,
isStatic:true


}

this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);

}
display(){
var pv=this.body.position;
push();
translate(pv.x,pv.y);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();


}




}