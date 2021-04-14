class Chain{
constructor(bodyA,pb){

var options={
bodyA:bodyA,
pointB:pb,
stiffness:0.04,
length:10
}

this.catapult=Constraint.create(options);
World.add(world,this.catapult);



}

fly(){

    this.catapult.bodyA=null;
}

display(){

if(this.catapult.bodyA){

var pointA=this.catapult.bodyA.position;
var pointB=this.catapult.pointB;
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y);


}



}









}