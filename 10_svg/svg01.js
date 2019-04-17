var svg = document.getElementById("vimage");
var clr = document.getElementById("but_clear");
var mve = document.getElementById("but_move");

var m = false;
var vx = Math.random() * 10 + 10;
var vy = Math.random() * 10 + 10;

var i = 0;

var cc = (e) => {
  e.stopPropagation();
  var f = e.target.getAttribute("fill");
  if(f == "blue"){
    e.target.setAttribute("fill", "green");
  }else{
    e.target.remove();
    svg.innerHTML += '<circle class="circ" cx="' + (Math.floor(Math.random() * 500)).toString() + '" cy="' + (Math.random() * 500).toString() + '" r="20" fill="blue"/>';

    all = document.getElementsByClassName("circ")
    for(i = 0; i < all.length; i++){
      all[i].addEventListener("click", cc);
    }

    i++;
  }
}

var dw = (e) => {
	svg.innerHTML += '<circle class="circ" cx="' + e.offsetX.toString() + '" cy="' + e.offsetY.toString() + '" r="20" fill="blue"/>';

  all = document.getElementsByClassName("circ")
  for(i = 0; i < all.length; i++){
    all[i].addEventListener("click", cc);
  }

  i++;
}

var mv = () => {
  m = !m

  while(m){
    all = document.getElementsByClassName("circ");
    for(i = 0; i < all.length; i++){
      all[i].setAttribute("cx", (all[i].getAttribute("cx") + vx).toString());
      all[i].setAttribute("cy", (all[i].getAttribute("cy") + vy).toString());
    }
  }
}

var cr = () => {
	svg.innerHTML = "";
}

svg.addEventListener("click",dw);
clr.addEventListener("click",cr);
mve.addEventListener("click",mv)
