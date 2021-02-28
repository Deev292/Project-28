class mango{
    constructor(){
        this.body=Bodies.circle(x,y,radius)
        this.radius=raduis;
        this.image=loadImage("mango.png")
      
    }
    display(){
        push();
        ellipse(this.body.position.x, this.body.position.y,this.raduis)
        imageMode(CENTER)
        image(this.image,x,y,raduis)
        pop();
    } 
}