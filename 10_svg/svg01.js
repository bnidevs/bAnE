var svg = document.getElementById("vimage");
var clr = document.getElementById("but_clear");

var i = 0;

var cc = (e) => {
  e.stopPropagation();
  var f = e.target.getAttribute("fill");
  if(f == "blue"){
    e.target.setAttribute("fill", "green");
  }else{
    e.target.remove();
    svg.innerHTML += '<circle class="circ" cx="' + (Math.floor(Math.random() * 500)).toString() + '" cy="' + (Math.random() * 500).toString() + '" r="20" fill="blue"/>';
    document.getElementsByClass("circ").addEventListener("click", cc);
    i++;
  }
}

var dw = (e) => {
	svg.innerHTML += '<circle class="circ" cx="' + e.offsetX.toString() + '" cy="' + e.offsetY.toString() + '" r="20" fill="blue"/>';
  document.getElementById(i.toString()).addEventListener("click", cc);
  i++;
}

var cr = () => {
	svg.innerHTML = "";
}

svg.addEventListener("click",dw);
clr.addEventListener("click",cr);
