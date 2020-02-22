///////////////////// Constants /////////////////////////////////////
///////////////////// APP STATE (VARIABLES) /////////////////////////
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let x = canvas.width/2;
let y = canvas.height-30;
let move1 = 2;
let move2 = -2;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
///////////////////// EVENT LISTENERS ///////////////////////////////
///////////////////// FUNCTIONS /////////////////////////////////////
function ball(){
  ctx.beginPath();
  ctx.arc(x,y,10,0,Math.PI*2);
  ctx.fillStyle = "#48E5C2";
  ctx.fill();
  ctx.closePath();
}

function brickBreaker(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball();
  x = x+move1;
  y = y+move2;
}




setInterval (brickBreaker,10);
