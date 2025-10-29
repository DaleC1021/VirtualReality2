class rocket{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
        this.a=0;
        this.da=1;

        this.obj = document.createElement("a-entity");
        let head = document.createElement("a-cone");
        head.setAttribute("radius-top","0");
        head.setAttribute("radius-bottom", "0.5");
        head.setAttribute("height", "1");
        head.setAttribute("color", "teel");
        head.setAttribute("position", "0 0 -2");
        
        let body = document.createElement("a-cylinder");
        body.setAttribute("radius","0.5");
        body.setAttribute("height","2");
        body.setAttribute("color","gray");
        body.setAttribute("position","0 -1.5 -2");

        let flare = document.createElement("a-entity");
        flare.setAttribute("radius-top","0");
        flare.setAttribute("radius-bottom","0.25");
        flare.setAttribute("height","2");
        flare.setAttribute("color","orange");
        flare.setAttribute("position","0 -3.5 -2");
        flare.setAttribute("rotation","-180 0 0");

        this.object.setAttribute("position", {x:this.x, y:this.y. z:this.z});
        screen.append(this.object);
    }
    ascend(){
        this.a += this.da;
        this.object.setAttribute("position", "x:this.x, y:this.a z:this.z");
    }
}
