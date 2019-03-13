var svg = document.getElementById("vimage");
var clr = document.getElementById("but_clear");

var x = -1;
var y = -1;

var dw = (e) => {

    if(x >= 0) { //checks if this is a dot drawn after the first
		svg.innerHTML += '<line x1="' + x.toString() + '" x2="' + e.offsetX.toString() + '" y1="' + y.toString() + '" y2="' + e.offsetY.toString() + '" stroke="black" stroke-width="1"/>';
		svg.innerHTML += '<circle cx="' + e.offsetX.toString() + '" cy="' + e.offsetY.toString() + '" r="20" fill="red"/>';
		svg.innerHTML += '<circle cx="' + x.toString() + '" cy="' + y.toString() + '" r="20" fill="red"/>';
    }
    else{ // if it is the first dot being drawn, only draws the dot
		svg.innerHTML += '<circle cx="' + e.offsetX.toString() + '" cy="' + e.offsetY.toString() + '" r="20" fill="red"/>';
    }
    x = e.offsetX; // recording x coordinate of dot for when drawing the next one
    y = e.offsetY; // same as above but with y coordinate

}

var cr = () => {
	svg.innerHTML = "";
	x = -1;
	y = -1;
}

svg.addEventListener("click",dw);
clr.addEventListener("click",cr);