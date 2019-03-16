var svg = document.getElementById("vimage");
var clr = document.getElementById("but_clear");
var mve = document.getElementById("but_move");
var ccb = document.getElementById("but_color");

var coch = false;

var going = false;
var anakin;

var vx = Math.random() * 3 + 1;
var vy = Math.random() * 3 + 1;

var dirx = []; //right = true; left = false
var diry = []; //down = true; up = false

var i = 0;

var ctoc = (coord) => {
  c = Math.floor(coord / 500 * 16777216);
  return c.toString(16);
}

var chc = () => {
  coch = !coch;
}

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

var st = () => {
  cancelAnimationFrame(anakin);
  going = false;
}

var dw = (e) => {
	svg.innerHTML += '<circle class="circ" cx="' + e.offsetX.toString() + '" cy="' + e.offsetY.toString() + '" r="20" fill="blue"/>';
  dirx.push(true);
  diry.push(true);

  all = document.getElementsByClassName("circ");
  for(i = 0; i < all.length; i++){
    all[i].addEventListener("click", cc);
  }
  
  i++;
}

var mv = () => {
  going = true;
  
  all = document.getElementsByClassName("circ");
  for(i = 0; i < all.length; i++){
    if(dirx[i]){
      all[i].setAttribute("cx", parseFloat(all[i].getAttribute("cx")) + vx);
    }else{
      all[i].setAttribute("cx", parseFloat(all[i].getAttribute("cx")) - vx);
    }

    if(diry[i]){
      all[i].setAttribute("cy", parseFloat(all[i].getAttribute("cy")) + vy);
    }else{
      all[i].setAttribute("cy", parseFloat(all[i].getAttribute("cy")) - vy);
    }

    if(parseFloat(all[i].getAttribute("cx")) <= 5 || parseFloat(all[i].getAttribute("cx")) >= 495){
      dirx[i] = !dirx[i];
    }

    if(parseFloat(all[i].getAttribute("cy")) <= 5 || parseFloat(all[i].getAttribute("cy")) >= 495){
      diry[i] = !diry[i];
    }

    if(coch){
      all[i].setAttribute("fill", "#" + ctoc(all[i].getAttribute("cx")));
    }else{
      all[i].setAttribute("fill", "blue");
    }
  }

  anakin = window.requestAnimationFrame(mv);
}

var cr = () => {
	svg.innerHTML = "";
  st();
}

svg.addEventListener("click",dw);
clr.addEventListener("click",cr);
mve.addEventListener("click",function(event){
  if(!going){
    mv();
  }else{
    st();
  }
});
ccb.addEventListener("click",chc);