
///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  //horizontal
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  //vertical
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [15, 22, 29, 36],
  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [16, 23, 30, 37],
  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [17, 24, 31, 38],
  [4, 11, 18, 21],
  [11, 18, 21, 32],
  [18, 21, 32, 39],
  [5, 12, 19, 26],
  [12, 19, 26, 33],
  [19, 26, 33, 40],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [20, 27, 34, 41],
  //diagonal(right)
  [3, 9, 15, 21],
  [4, 10, 16, 22],
  [10, 16, 22, 28],
  [5, 11, 17, 23],
  [11, 17, 23, 29],
  [17, 23, 29, 35],
  [6, 12, 18, 24],
  [12, 18, 24, 30],
  [18, 24, 30, 36],
  [13, 19, 25, 31],
  [19, 25, 31, 37],
  [20, 26, 32, 38],
  //diagonal(left)
  [14, 22, 30, 38],
  [7, 15, 23, 31],
  [15, 23, 31, 39],
  [0, 8, 16, 24],
  [8, 16, 24, 32],
  [16, 24, 32, 40],
  [1, 9, 17, 25],
  [9, 17, 25, 33],
  [17, 25, 33, 41],
  [2, 10, 18, 26],
  [10, 18, 26, 34],
  [3, 11, 19, 27],
];

const firstColumn = [ 0, 7, 14, 21, 28, 35 ];
const secondColumn = [ 1, 8, 15, 22, 29, 36 ];
const thirdColumn = [ 2, 9, 16, 23, 30, 37 ];
const fourthColumn = [ 3, 10, 17, 24, 31, 38 ];
const fifthColumn = [ 4, 11, 18, 25, 32, 39 ];
const sixthColumn = [ 5, 12, 19, 26, 33, 40 ];
const seventhColumn = [ 6, 13, 20, 27, 34, 41 ];
///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let win;
let turn = "Red";
let scoreRed = 0;
let scoreYellow = 0;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////

const circles = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;
document.getElementById("first_Red").onclick = first_Red;
document.getElementById("first_Yellow").onclick = first_Yellow;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;

///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
  board = [ "", "", "", "", "", "", "",
            "", "","", "", "", "", "",
            "", "", "", "","", "", "",
            "", "", "", "", "", "","",
            "", "", "", "", "", "", "",
            "","", "", "", "", "", ""]
  turn = "Red";
  win = null;
  render();
}


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


function render() {
  board.forEach(function(mark, index) {
    console.log(mark, index);
    circles[index].style.backgroundColor = mark;
  });

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
}

function takeTurn(e) {
  if (!win) {
    let index = circles.findIndex(function(circle) {
      return circle === e.target;
    });

    let drop = -1;
        if (firstColumn.includes(index)) {
          for (let i = 0; i < firstColumn.length; i++) {
            if (board[firstColumn[i]] === "") {
              drop = firstColumn[i];
            } else {
              break;
            }
          }
        }
        if (secondColumn.includes(index)) {
          for (let i = 0; i < secondColumn.length; i++) {
            if (board[secondColumn[i]] === "") {
              drop = secondColumn[i];
            } else {
              break;
            }
          }
        }
        if (thirdColumn.includes(index)) {
          for (let i = 0; i < thirdColumn.length; i++) {
            if (board[thirdColumn[i]] === "") {
              drop = thirdColumn[i];
            } else {
              break;
            }
          }
        }
        if (fourthColumn.includes(index)) {
          for (let i = 0; i < fourthColumn.length; i++) {
            if (board[fourthColumn[i]] === "") {
              drop = fourthColumn[i];
            } else {
              break;
            }
          }
        }
        if (fifthColumn.includes(index)) {
          for (let i = 0; i < fifthColumn.length; i++) {
            if (board[fifthColumn[i]] === "") {
              drop = fifthColumn[i];
            } else {
              break;
            }
          }
        }
        if (sixthColumn.includes(index)) {
          for (let i = 0; i < sixthColumn.length; i++) {
            if (board[sixthColumn[i]] === "") {
              drop = sixthColumn[i];
            } else {
              break;
            }
          }
        }
        if (seventhColumn.includes(index)) {
          for (let i = 0; i < seventhColumn.length; i++) {
            if (board[seventhColumn[i]] === "") {
              drop = seventhColumn[i];
            } else {
              break;
            }
          }
        }
    if (board[index] === "") {
      board[drop] = turn;
      turn = turn === "Yellow" ? "Red" : "Yellow";
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
      board[condition[1]] === board[condition[2]] &&
      board[condition[2]] === board[condition[3]]
    ) {
      winner = board[condition[0]];
      if(winner === "Red"){
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
/*
///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  //horizontal
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  //verticle
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [15, 22, 29, 36],
  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [16, 23, 30, 37],
  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [17, 24, 31, 38],
  [4, 11, 18, 21],
  [11, 18, 21, 32],
  [18, 21, 32, 39],
  [5, 12, 19, 26],
  [12, 19, 26, 33],
  [19, 26, 33, 40],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [20, 27, 34, 41],
  //diagonal -> right
  [3, 9, 15, 21],
  [4, 10, 16, 22],
  [10, 16, 22, 28],
  [5, 11, 17, 23],
  [11, 17, 23, 29],
  [17, 23, 29, 35],
  [6, 12, 18, 24],
  [12, 18, 24, 30],
  [18, 24, 30, 36],
  [13, 19, 25, 31],
  [19, 25, 31, 37],
  [20, 26, 32, 38],
  //diagonal -> left
  [14, 22, 30, 38],
  [7, 15, 23, 31],
  [15, 23, 31, 39],
  [0, 8, 16, 24],
  [8, 16, 24, 32],
  [16, 24, 32, 40],
  [1, 9, 17, 25],
  [9, 17, 25, 33],
  [17, 25, 33, 41],
  [2, 10, 18, 26],
  [10, 18, 26, 34],
  [3, 11, 19, 27],
];

const column1 = [ 0, 7, 14, 21, 28, 35 ];
const column2 = [ 1, 8, 15, 22, 29, 36 ];
const column3 = [ 2, 9, 16, 23, 30, 37 ];
const column4 = [ 3, 10, 17, 24, 31, 38 ];
const column5 = [ 4, 11, 18, 25, 32, 39 ];
const column6 = [ 5, 12, 19, 26, 33, 40 ];
const column7 = [ 6, 13, 20, 27, 34, 41 ];

///////////////////// APP STATE (VARIABLES) /////////////////////////

let board;
let turn;
let win;
let chosen;
let yellowWins = 0;
let redWins = 0;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////

const circles = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
document.getElementById("yellow-first").onclick = yellowTurn;
document.getElementById("red-first").onclick = redTurn;

///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
  board = [ "", "", "", "", "", "", "",
            "", "","", "", "", "", "",
            "", "", "", "","", "", "",
            "", "", "", "", "", "","",
            "", "", "", "", "", "", "",
            "","", "", "", "", "", ""]
  turn = "Yellow";
  win = null;
  pieceDown();
  render();
}

 function yellowTurn(){
   init();
   document.getElementById("go").innerHTML = "Turn: Yellow";
   turn = "Yellow";
 }

 function redTurn(){
   init();
   document.getElementById("go").innerHTML = "Turn: Red";
   turn = "Red";
 }

function render() {
  board.forEach(function(mark, index) {
    //console.log(mark, index);
    circles[index].style.backgroundColor = mark;
  });

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
}

function pieceDown(col){

}

function takeTurn(e) {
  if (!win) {
    let index = circles.findIndex(function(circle) {
      return circle === e.target;
    });

    let avail = -1;
    if (column1.includes(index)) {
      for (let i = 0; i < column1.length; i++) {
        if (board[column1[i]] === "") {
          avail = column1[i];
        } else {
          break;
        }
      }
    }
    if (column2.includes(index)) {
      for (let i = 0; i < column2.length; i++) {
        if (board[column2[i]] === "") {
          avail = column2[i];
        } else {
          break;
        }
      }
    }
    if (column3.includes(index)) {
      for (let i = 0; i < column3.length; i++) {
        if (board[column3[i]] === "") {
          avail = column3[i];
        } else {
          break;
        }
      }
    }
    if (column4.includes(index)) {
      for (let i = 0; i < column4.length; i++) {
        if (board[column4[i]] === "") {
          avail = column4[i];
        } else {
          break;
        }
      }
    }
    if (column5.includes(index)) {
      for (let i = 0; i < column5.length; i++) {
        if (board[column5[i]] === "") {
          avail = column5[i];
        } else {
          break;
        }
      }
    }
    if (column6.includes(index)) {
      for (let i = 0; i < column6.length; i++) {
        if (board[column6[i]] === "") {
          avail = column6[i];
        } else {
          break;
        }
      }
    }
    if (column7.includes(index)) {
      for (let i = 0; i < column7.length; i++) {
        if (board[column7[i]] === "") {
          avail = column7[i];
        } else {
          break;
        }
      }
    }
    if (board[index] === "") {
      board[avail] = turn;
      turn = turn === "Yellow" ? "Red" : "Yellow";
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
      board[condition[1]] === board[condition[2]] &&
      board[condition[2]] === board[condition[3]]
    ) {
      winner = board[condition[0]];
      if(winner === "Yellow"){
        yellowWins++;
        document.getElementById("score_Yellow").innerHTML = yellowWins;
      }
      if(winner === "Red"){
        redWins++;
        document.getElementById("score_Red").innerHTML = redWins;
      }
    }
  });

  return winner ? winner : board.includes("") ? null : "T";
}*/
