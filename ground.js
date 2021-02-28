class ground{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER)
        //rect(x,y,this.width,this.height);
        pop();
    }
}