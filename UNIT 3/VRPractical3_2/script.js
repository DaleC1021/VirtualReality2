let scene, ufos=[], rockets=[], trees=[], house;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  for(let i=0; i<10; i++){
    let rockets = new rockets(rnd(-50,50), rnd(-1,-10), rnd(-50,50));
    rockets.push(rockets);
  }

  for(let i=0; i<10; i++){
    let ufos = new Ufo(rnd(-50,50), rnd(10,30), rnd(-50,50), rnd(3, 30)*0.01);
    ufos.push(Ufo);
  }

  loop();
})

function loop(){
  for(let rockets of rockets){
    rockets.ascend();
  }

  for(let ufo of ufos){
    ufos.invade();
  }
    
  window.requestAnimationFrame(loop);
}