let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  
  rocket=this.document.querySelector("#rocket");
  rocket.posY=1;
  rocket.dPosY=0.3;

  loop();
})

function loop(){
  loopRocket();
  
  window.requestAnimationFrame( loop );
}

function loopRocket(){
    rocket.posY+=rocket.dPosY;
    rocket.setAttribute("position", {x:5, y:rocket.posY, z:-10});
}

