class boy{
    constructor(){
        this.body=Bodies.rectangle(x,y,width,height)
        this,width=width
        this.height=height
        image=loadImage("boy.png")
    }
    display(){
        translate(x,y,width,height)
        imageMode(CENTER)
        image(this.image,x,y,width,height)
    }
}