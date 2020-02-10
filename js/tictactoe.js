///////////////////// CONSTANTS /////////////////////////////////////

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

///////////////////// APP STATE (VARIABLES) /////////////////////////

let board;
let turn = "X";
let win;
let scoreX = 0;
let scoreO = 0;
var clear_board = document.getElementById("go");

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;
document.getElementById("first_X").onclick = first_X;
document.getElementById("first_O").onclick = first_O;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = turn;
  win = null;

  render();
}

//choose who goes first
function first_X(){
  init();
  document.getElementById("go").innerHTML = "Turn: X";
  turn = "X";

}
function first_O(){
  init();
  document.getElementById("go").innerHTML = "Turn: O";
  turn = "O";
}

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
}

function takeTurn(e) {
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    if (board[index] === "") {
      board[index] = turn;
      turn = turn === "X" ? "O" : "X";
      win = getWinner();

      render();
    }
  }
}

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {
      winner = board[condition[0]];
      if(winner === "X"){
        scoreX++;
        document.getElementById("score_X").innerHTML = scoreX;
      }
      if(winner === "O"){
        scoreO++;
        document.getElementById("score_O").innerHTML = scoreO;
      }
    }
  });

  return winner ? winner : board.includes("") ? null : "T";
}
