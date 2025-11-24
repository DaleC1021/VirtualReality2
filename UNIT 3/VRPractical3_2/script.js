let scene, ufos=[], rockets=[], trees=[], house;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  for(let i=0; i<10; i++){
    let rocket = new rockets(rnd(-50,50), rnd(-1,-10), rnd(-50,50));
    rockets.push(rocket);
  }

  for(let i=0; i<10; i++){
    let ufo = new ufos(rnd(-50,50), rnd(10,30), rnd(-50,50), rnd(3, 30)*0.01);
    ufos.push(ufo);
  }

  for(let i=0; i<50; i++){
    let tree = new trees(rnd(-100,100), 0, rnd(-100,100));
    trees.push(tree);
  }

  loop();
})

function loop(){
  for(let rockets of rockets){
    rockets.ascend();
  }

  for(let ufos of ufos){
    ufos.invade();
  }
    
  window.requestAnimationFrame(loop);
}