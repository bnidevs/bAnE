// UTF-8 -- Rachel Ng, Bill Ni
// SoftDev2 pd7
// K03 --
// 2019-02-04

// -----------------------------  VAR INIT  -----------------------------
var going = false;     //is animation running
var rad = 0;           //size of the circle
var growshrink = true; //true means circle will grow
var anakin;            //id of animationframe

var start = document.getElementById("circle");       //start animation button
var stop = document.getElementById("stop");          //clear canvas button
var canvas = document.getElementById("playground");  //canvas
var ctx = canvas.getContext("2d");                   //canvas context
// ----------------------------------------------------------------------

// ------------------------  CANVAS STYLE INIT  -------------------------
ctx.fillStyle = '#16fcf4'; //set brush color blue
// ----------------------------------------------------------------------



// ----------------------------  FUNCTIONS  -----------------------------

// --------------------  STOP FUNCTION  ---------------------
var st = () => {
  cancelAnimationFrame(anakin);
}
// ----------------------------------------------------------

// --------------------  ANIMATE FUNCTION  ------------------
var dw = (ts) => {
  if(rad == 0 || rad == canvas.width / 2){
    growshrink = !growshrink;
  }

  if(growshrink){
    rad++;
  }else{
    rad--;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath(canvas.width / 2, canvas.height / 2, rad, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  anakin = window.requestAnimationFrame(dw);
}
// ----------------------------------------------------------

// ----------------------------------------------------------------------

// ------------------------  EVENTLISTENER INIT  ------------------------
start.addEventListener("click", dw); //animation button eventlistener add
stop.addEventListener('click', st);  //stop button eventlistener add
// ----------------------------------------------------------------------
