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
let paddle_Width = 75;
let paddle_Height = 10;
let paddle_move = (width-paddle_Width)/2;
let right_Button = false;
let left_Button = false;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
///////////////////// EVENT LISTENERS ///////////////////////////////
document.addEventListener("keydown", down, false);
document.addEventListener("keyup", up, false);
///////////////////// FUNCTIONS /////////////////////////////////////
//moves the paddle
function down(e){
  if(e.ket == "Right" || e.key == "ArrowRight"){
    right_Button = true;
  }
  else if(e.key == "Right" || e.key == "ArrowLeft"){
    left_Button = true;
  }
}

function up (e){
  if(e.key == "Right" || e.key == "ArrowRight"){
    right_Button = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft"){
    left_Button = false;
  }
}

function ball(){
  ctx.beginPath();
  ctx.arc(x, y, circle, 0, Math.PI*2);
  ctx.fillStyle = "#48E5C2";
  ctx.fill();
  ctx.closePath();

}

function paddle(){
  ctx.beginPath();
  ctx.rect(paddle_move, height-paddle_Height, paddle_Width,paddle_Height);
  ctx.fillStyle = "#48E5C2";
  ctx.fill();
  ctx.closePath();
}

function brickBreaker(){
  ctx.clearRect(0, 0, width, height);
  ball();
  paddle();
//makes the balls bounce off the sides
  if(x + move1 > width - circle || x + move1 < circle){
    move1 = -move1;
  }
  if(y + move2 > height - circle || y + move2 < circle){
    move2 = -move2;
  }
  if(right_Button) {
        paddle_move = paddle_move+7;
        if (paddle_move + paddle_Width > width){
            paddle_move = width - paddle_Width;
        }
    }
    else if(left_Button) {
        paddle_move = paddle_move-7;
        if (paddle_move < 0){
            paddle_move = 0;
        }
    }

  x = x+move1;
  y = y+move2;
}



setInterval (brickBreaker,10);
