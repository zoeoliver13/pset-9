///////////////////// Constants /////////////////////////////////////
///////////////////// APP STATE (VARIABLES) /////////////////////////
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let x = canvas.width/2;
let y = canvas.height-30;
let width = canvas.width;
let height = canvas.height;
let move1 = 2;
let move2 = -2;
let circle = 10;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
///////////////////// EVENT LISTENERS ///////////////////////////////
///////////////////// FUNCTIONS /////////////////////////////////////
function ball(){
  ctx.beginPath();
  ctx.arc(x, y, circle, 0, Math.PI*2);
  ctx.fillStyle = "#48E5C2";
  ctx.fill();
  ctx.closePath();

}

function brickBreaker(){
  ctx.clearRect(0, 0, width, height);
  ball();
//makes it bounce off the sides
  if(x + move1 > width - circle || x + move1 < circle){
    move1 = -move1;
  }
  if(y + move2 > height - circle || y + move2 < circle){
    move2 = -move2;
  }
  x = x+move1;
  y = y+move2;
}




setInterval (brickBreaker,10);
