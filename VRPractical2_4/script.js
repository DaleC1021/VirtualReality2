let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket;

window.addEventListener("DOMContentLoaded",function(){
  scene = document.querySelector("a-scene"); 
  let rocket = new rocket(0, 2, -3);
  for(let i = 0; i < 100; i++){
		let rocket = new rocket(...);
		rocket.push(rocket);
  loop();
})

function loop(){
  rocket.ascend();
  
  window.requestAnimationFrame( loop );
}

function loopRocket(){
    rocket.posY+=rocket.dPosY;
    rocket.setAttribute("position", {x:5, y:rocket.posY, z:-10});
}

