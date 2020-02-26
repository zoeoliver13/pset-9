
const winningConditions = [
//horizontal
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  [28, 29, 30, 31]
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34]
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [14, 15, 16 ,17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [7, 8, 9 ,10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
//vertical
  [35, 28, 21, 14],
  [28, 21, 14, 7],
  [21, 14, 7, 0],
  [36, 29, 22, 15],
  [29, 22, 15, 8],
  [22, 15, 8, 1],
  [37, 30, 23, 16],
  [30, 23, 16, 9],
  [23, 16, 9, 2],
  [38, 31, 24, 17],
  [31, 24, 17, 10],
  [24, 17, 10, 3],
  [39, 32, 25, 18],
  [32, 25, 18, 11],
  [25, 18, 11, 4],
  [40, 33, 26, 19],
  [33, 26, 19, 12],
  [26, 19, 12, 5],
  [41, 34, 27, 20],
  [34, 27, 20, 13],
  [27, 20, 13, 6],
//diagonal(right)
  [38, 32, 26, 20],
  [37, 31, 25, 19],
  [36, 30, 24, 18],
  [35, 29, 23, 17],
  [31, 25, 19, 13],
  [30, 24, 18, 12],
  [29, 23, 17, 11],
  [28, 22, 16, 15],
  [24, 18, 12, 6],
  [23, 17, 11, 5],
  [22, 16, 10, 4],
  [21, 15, 9, 3],
//diagonal(left)
  [41, 33, 25, 17],
  [40, 32, 24, 16],
  [39, 31, 23, 15],
  [38, 30, 22, 14],
  [34, 26, 18, 10],
  [33, 25, 27, 9],
  [32, 24, 26, 8],
  [31, 23, 25, 7],
  [27, 19, 11, 3],
  [26, 18, 10, 2],
  [25, 17, 9, 1],
  [24, 16, 8, 0]
];

///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let win;
let turn = "Red";
let scoreRed = 0;
let scoreYellow = 0;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const circles = Array.from(document.querySelectorAll("#board div"));
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("first_Red").onclick = first_Red;
document.getElementById("first_Yellow").onclick = first_Yellow;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
///////////////////// FUNCTIONS /////////////////////////////////////
function first_Red(){
  init();
  document.getElementById("go").innerHTML = "Turn: Red";
  turn = "Red";

}
function first_Yellow(){
  init();
  document.getElementById("go").innerHTML = "Turn: Yellow";
  turn = "Yellow";
}
function init(){
  board = ["","","","","","","",
           "","","","","","","",
           "","","","","","","",
           "","","","","","","",
           "","","","","","","",
           "","","","","","",""]
  turn = turn;
  render();
}

  function render(){
    board.forEach(function(mark, index){
      console.log(mark, index);
      circles[index].style.backgroundColor = mark;
    });
}
function takeTurn(e) {
  let index = circles.findIndex(function(circles) {
    return circles === e.target;
  });
  board[index]= turn;
  turn = turn === "Red"?"Yellow":"Red";

  render();
}

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]&&
      board[condition[2]] === board[condition[3]]
    ) {
      winner = board[condition[0]];
      if(winner === "Winner"){
        scoreRed++;
        document.getElementById("score_Red").innerHTML = scoreRed;
      }
      if(winner === "Yellow"){
        scoreYellow++;
        document.getElementById("score_Yellow").innerHTML = scoreYellow;
      }
    }
  });

return winner ? winner : board.includes("") ? null : "T";
}
