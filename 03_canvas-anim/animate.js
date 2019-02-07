// UTF-8 -- Rachel Ng, Bill Ni
// SoftDev2 pd7
// K03 --
// 2019-02-04

// -----------------------------  VAR INIT  -----------------------------
var rad = 2;           //size of the circle
var growshrink = true; //true means circle will grow
var anakin;            //id of animationframe
var going = false;     //is animation running

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
  going = false;
}
// ----------------------------------------------------------

// --------------------  ANIMATE FUNCTION  ------------------
var dw = (ts) => {
  going = true;
  if(rad <= 1 || rad >= canvas.width / 2){
    growshrink = !growshrink;
  }

  if(growshrink){
    rad++;
  }else{
    rad--;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, rad, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  anakin = window.requestAnimationFrame(dw);
}
// ----------------------------------------------------------

// ----------------------------------------------------------------------

// ------------------------  EVENTLISTENER INIT  ------------------------
start.addEventListener("click", function(event){
  if(!going){
    dw()
  }}); //animation button eventlistener add
stop.addEventListener('click', st);  //stop button eventlistener add
// ----------------------------------------------------------------------
