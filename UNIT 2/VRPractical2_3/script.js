let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
  }

  for (let i = 0; i < 200; i++){
    let x = rnd(-55,100);
    let y = rnd(10,60);
    let z = rnd(-100,50);
    let cloud = new Cloud(x,y,z);
  }

  for(let i = 0; i < 500; i++){
    let x = rnd(-50,50);
    let z = rnd(-40,40);
    let house = new House(x, z);
  }

})
