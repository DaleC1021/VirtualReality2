let  scene, car, pokemonball, rocket, dude, sun;
window.addEventListener("DOMContentLoaded",function(){

    scene=this.document.querySelector("a-scene");

    car=this.document.querySelector("#car");
    car.posX=0;
    car.dPosX= -0.04;
    

    pokemonball=this.document.querySelector("#pokemonball");
    pokemonball.rotX=1;
    pokemonball.dRotX=2;

    rocket=this.document.querySelector("#rocket");
    rocket.posY=1;
    rocket.dPosY=0.3;

    dude=this.document.querySelector("#dude");
    dude.size=1;
    dude.dSize=0.2;

    sun=this.document.querySelector("#sun");
    sun.opacity = 0.0;
    sun.dOpacity = 0.002;

    loop();
});

function loop(){
    car.posX+=car.dPosX;
    car.setAttribute("position", {x:car.posX, y:0, z:-10});

    loopPoke();
    loopRocket();
    loopDude();
    loopSun();
    window.requestAnimationFrame(loop);
}

function loopPoke(){
    pokemonball.rotX+=pokemonball.dRotX;
    pokemonball.setAttribute("rotation", {x:pokemonball.rotX, y:0, z:0});
}

function loopRocket(){
    rocket.posY+=rocket.dPosY;
    rocket.setAttribute("position", {x:5, y:rocket.posY, z:-10});
}

function loopDude(){
    dude.size+=dude.dSize;
    dude.setAttribute("scale", {x:dude.size, y:dude.size, z:dude.size});
}

function loopSun(){
    // simple fade-in until fully opaque
    if (!sun || typeof sun.opacity !== 'number') return;
    sun.opacity += sun.dOpacity;
    if (sun.opacity > 1.0) sun.opacity = 1.0;
    if (sun.opacity < 0.0) sun.opacity = 0.0;
    sun.setAttribute('material', {opacity: sun.opacity});
}