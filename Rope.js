class Rope{
constructor(bodyA,pointB)
{
var options={
    bodyA:bodyA,
    pointB:pointB,
    length:10,
    stiffness:0.04  
}
this.pointB = pointB
this.rope = Constraint.create(options)
World.add(world,this.rope)
}
fly(){
this.rope.bodyA = null
}
display(){
   if(this.rope.bodyA){
    var bodyA = this.rope.bodyA.position
            var pointB = this.pointB
            stroke('blue')
            strokeWeight(3)
            line(bodyA.x,bodyA.y,pointB.x,pointB.y);
   }
}
}