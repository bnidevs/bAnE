var m = true; //true is rectangle, false is dot

var sb = document.getElementById("switchm");
var cb = document.getElementById("clearb");
var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

sb.innerHTML = "Switch to dots";
sb.addEventListener("click", function(){sw()});

cb.addEventListener("click", function(){ca()});

canvas.addEventListener("click", function(){dw()});

var ca = () => {
  ctx.fillStyle = 'white';
  ctx.fillRect("0, 0, 600, 600");
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
