// -----------------------------  VAR INIT  -----------------------------
var m = true; //brush mode -- true is rectangle, false is dot

var sb = document.getElementById("switchm");    //switch brush button
var cb = document.getElementById("clearb");     //clear canvas button
var canvas = document.getElementById("slate");  //canvas
var ctx = canvas.getContext("2d");              //canvas context
// ----------------------------------------------------------------------

// ------------------------  EVENTLISTENER INIT  ------------------------
sb.addEventListener("click", function(){sw()}); //switch button eventlistener add
cb.addEventListener("click", function(){ca()}); //clear button eventlistener add

canvas.addEventListener("mousedown", function(event){dw(event.pageX, event.pageY)}); //canvas draw eventlistener add
// ----------------------------------------------------------------------

// ------------------------  CANVAS STYLE INIT  -------------------------
ctx.fillStyle = 'black'; //set brush color black
// ----------------------------------------------------------------------

// ----------------------------  FUNCTIONS  -----------------------------

// --------------------  CLEAR FUNCTION  --------------------
var ca = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
}
// ----------------------------------------------------------

// --------------------  TOGGLE FUNCTION  -------------------
var sw = () => {
  m = !m; //change from rect to dot and dot to rect
}
// ----------------------------------------------------------

// ---------------------  DRAW FUNCTION  --------------------
var dw = (x, y) => {
	x -= canvas.getBoundingClientRect().x; //offsets
  y -= canvas.getBoundingClientRect().y; //offsets
	if(m){
		ctx.fillRect(x, y, 10, 10); //draw rect
	}else{
  	ctx.beginPath();                          //draw dot
  	ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
  	ctx.fill();
  	ctx.stroke();
	}
}
// ----------------------------------------------------------

// ----------------------------------------------------------------------
