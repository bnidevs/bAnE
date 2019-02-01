var m = true; //true is rectangle, false is dot
var mouse = false;

var sb = document.getElementById("switchm");
var cb = document.getElementById("clearb");
var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

sb.innerHTML = "Switch to dots";
sb.addEventListener("click", function(){sw()});

cb.addEventListener("click", function(){ca()});

canvas.addEventListener("mousedown", function(event){dw(event.pageX, event.pageY)});

ctx.fillStyle = 'black';

var ca = () => {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 600, 600);
  ctx.fillStyle = 'black';
}

var sw = () => {
  m = !m;
  if(m){
    sb.innerHTML = "Switch to dots";
  }else{
    sb.innerHTML = "Switch to rectangles";
  }
}

var dw = (x, y) => {
	y -= 135;
	x -= 10;
	if(m){
		ctx.fillRect(x - 5, y - 5, 10, 10);
	}else{
      	ctx.beginPath();
      	ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
      	ctx.fill();
      	ctx.stroke();
	}
}