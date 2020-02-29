///////////////////// Constants /////////////////////////////////////
///////////////////// APP STATE (VARIABLES) /////////////////////////
let interval = setInterval (brickBreaker,10);
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
let mouse = false;
let brick_Width = 75;
let brick_Height = 20;
let padding = 10;
let brick_Rows = 3;
let brick_Colums = 5;
let topOfCanvas = 30;
let left = 30;
let bricks = [];
  for(var i = 0; i < brick_Colums; i ++){
    bricks[i]=[];
    for(var j = 0; j < brick_Rows; j++){
      bricks[i][j] = {x: 0, y:0, status: 1};
    }
  }
let brickX = (i*(brick_Width+padding))+left;
let brickY = (j*(brick_Height+padding))+topOfCanvas;
let score = 0;
let lives = 3;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
///////////////////// EVENT LISTENERS ///////////////////////////////
document.addEventListener("keydown", keydown, false);
document.addEventListener("keyup", keyup, false);
///////////////////// FUNCTIONS /////////////////////////////////////

//moves the paddle
function keydown(e){
  if(e.ket == "Right" || e.key == "ArrowRight"){
    right_Button = true;
  }
  else if(e.key == "Right" || e.key == "ArrowLeft"){
    left_Button = true;
  }
}

function keyup (e){
  if(e.key == "Right" || e.key == "ArrowRight"){
    right_Button = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft"){
    left_Button = false;
  }
}

//makes the bricks
function brick_Array() {
    for(var i=0; i<brick_Colums; i++) {
        for(var j=0; j<brick_Rows; j++) {
          if(bricks[i][j].status == 1){
            var brickX = (i*(brick_Width+padding))+left;
            var brickY = (j*(brick_Height+padding))+topOfCanvas;
            bricks[i][j].x = brickX;
            bricks[i][j].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brick_Width, brick_Height);
            ctx.fillStyle = "#48E5C2";
            ctx.fill();
            ctx.closePath();
        }
      }
    }
  }

//breaks the bricks
function breakBricks() {
    for (var c = 0; c < brick_Colums; c++) {
        for (var r = 0; r < brick_Rows; r++) {
            var b= bricks[c][r];
            if (b.status == 1) {
                if (x > b.x && x < b.x + brick_Width && y > b.y && y < b.y + brick_Height) {
                    brickY = -brickY;
                    b.status = 0;
                    score++;
                    document.getElementById("score").innerHTML = "Score: " + score;
                    if (score == brick_Rows*brick_Colums){
                      alert( "You Win!");
                    document.location.reload();
                    }
                }
            }
        }
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
function livesRemaining() {
    ctx.font = "20px Roboto";
    ctx.fillStyle = "#48E5C2";
    ctx.fillText("Lives: "+lives, lives, 20, 60);
}
function brickBreaker(){
  ctx.clearRect(0, 0, width, height);
  ball();
  paddle();
  brick_Array();
  livesRemaining();
  breakBricks();

//makes the balls bounce off the sides
  if(x + move1 > width - circle || x + move1 < circle){
    move1 = -move1;
  }
  if( y + move2 < circle){
    move2 = - move2;
  }
//game over
  else if(y + move2 > height - circle) {
      if(x > paddle_move && x < paddle_move + paddle_Width) {
          move2 = - move2;
      }
      else {
        lives--;
        if(!lives){
        alert("Game Over! " + "Your Score: " + score + ".");
        document.location.reload();
      }
      else{
        x = width/2;
        y = height -30;
        brickX =3;
        brickY = -3;
        paddle_move = (width-paddle_Width)/2;
      }
   }
}
  //paddle
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
