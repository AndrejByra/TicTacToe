var player = 1;
var gameBoard;
var playerX = "X";
var playerO = "O";
var isTheEnd = false;
var sizeBoard = 4;
var whoWon = "";

function initGame() {
  initBoard(4, 4);
}
function clickimg(value, id) {
  if (!isTheEnd) {
    console.log(value, id);
    var row = Math.floor(value / 10);
    var col = value % 10;
    var imageID = "img" + row + col;
    $("#" + id)
      .prop("onclick", null)
      .off("click");
    console.log(gameBoard);
    if (player == 1) {
      gameBoard[row][col] = 1;
      document.getElementById(imageID).src = "img/x.png";
    } else {
      gameBoard[row][col] = -1;
      document.getElementById(imageID).src = "img/o.png";
    }
    nextPlayer();
    whoNext();
    isGameWon();
    if (!isTheEnd) {
      isMovePossible();
    }
  } else {
    alert("game is over and winner is" + whoWon);
  }
}
function nextPlayer() {
  if (player == 1) {
    player = 2;
  } else {
    player = 1;
  }
}
function changeName(value) {
  if (value == 1) {
    var playersName = $("#Player1").text();
    $("#Player1").html(
      '<INPUT TYPE="TEXT" onFocusout="createName(1)" ID="inputP1" placeholder="Enter name">'
    );
    $("#inputP1").focus();
  } else {
    var playersName = $("#Player2").text();
    $("#Player2").html(
      '<INPUT TYPE="TEXT" onFocusout="createName(2)" ID="inputP2" placeholder="Enter name">'
    );
    $("#inputP2").focus();
  }
}

function createName(value) {
  if (value == 1) {
    var name = $("#inputP1").val();
    if (name.trim().length == 0) $("#Player1").text("Player 1");
    else $("#Player1").text(name);
  } else {
    var name = $("#inputP2").val();
    if (name.trim().length == 0) $("#Player2").text("Player 2");
    else $("#Player2").text(name);
  }
}
function whoNext() {
  if (player == 1) {
    // document.getElementById("player").innerHTML = " X turn ";
    $("#player").text(" X turn ");
  } else {
    // document.getElementById("player").innerHTML = " O turn ";
    $("#player").text(" O turn ");
  }
}
function printMessage() {
  //   document.getElementById("message1").innerHTML = "double click to change name";
  //   document.getElementById("message2").innerHTML = "double click to change name";
  $("#message1").text("double click to change name");
  $("#message1").text("double click to change name");
}
function removeMessage() {
  //   document.getElementById("message1").innerHTML = " ";
  //   document.getElementById("message2").innerHTML = " ";
  $("#message1").text("");
  $("#message1").text("");
}

function initBoard(x, y) {
  //create two dimensional array
  gameBoard = new Array(x);
  for (var i = 0; i < x; i++) {
    gameBoard[i] = new Array(y);
  }
  //insert zeros to array "board"
  for (var i = 0; i < sizeBoard; i++) {
    for (var j = 0; j < sizeBoard; j++) {
      gameBoard[i][j] = 0;
    }
  }
}

// function checkRow() {
//   var stopLoop = false;
//   for (var i = 0; i < sizeBoard && !stopLoop; i++) {
//     var rowSum = 0;
//     for (var j = 0; j < sizeBoard && !stopLoop; j++) {
//       rowSum += gameBoard[i][j];
//       if (gameBoard[i][j] === 0) {
//         rowSum = 0;
//       }
//       if (rowSum === 3) {
//         alert("X WIN!");
//         whoWon = playerX;
//         stopLoop = true;
//         return true;
//       }
//       if (rowSum === -3) {
//         alert("O WIN");
//         whoWon = playerO;
//         stopLoop = true;
//         return true;
//       }
//     }
//   }
//   return false;
// }
function checkRow() {
  for (var i = 0; i < sizeBoard; i++) {
    var rowSum = 0;
    for (var j = 0; j < sizeBoard; j++) {
      rowSum += gameBoard[i][j];
      if (rowSum === 4) {
        whoWon = playerX;
        return true;
      }
      if (rowSum === -4) {
        whoWon = playerO;
        return true;
      }
    }
  }
  return false;
}

function checkColumns() {
  for (var i = 0; i < sizeBoard; i++) {
    var colSum = 0;
    for (var j = 0; j < sizeBoard; j++) {
      colSum += gameBoard[j][i];
      if (colSum === 4) {
        whoWon = playerX;
        return true;
      }
      if (colSum === -4) {
        whoWon = playerO;
        return true;
      }
    }
  }
  return false;
}
function checkDiagonaleFor3X3() {
  if (gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2] + gameBoard[3][3] === 4) {
    whoWon = playerX;
    return true;
  }
  if (gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2] + gameBoard[3][3] === -4) {
    whoWon = playerO;
    return true;
  }

  if (gameBoard[3][0] + gameBoard[2][1] + gameBoard[1][2] + gameBoard[0][3] === -4) {
    whoWon = playerX;
    return true;
  }
  if (gameBoard[3][0] + gameBoard[2][1] + gameBoard[1][2] + gameBoard[0][3] === -4) {
    whoWon = playerO;
    return true;
  }
  return false;
}

function isGameWon() {
  if (sizeBoard === 4) {  
    if (checkColumns() || checkRow() || checkDiagonaleFor3X3()) {
      isTheEnd = true;
      cheers();
    }
  } else if (sizeBoard === 4) {
    if (checkColumns() || checkRow() || checkDiagonaleFor4X4()) {
      isTheEnd = true;
    }
  }
}
function isMovePossible() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (gameBoard[i][j] === 0) {
        return true;
      }
    }
  }
  alert("draw");
  return false;
}
function cheers() {
if (window.confirm('Winner is ' + whoWon + ' Play Again ?'))
{
  window.location.reload();
}
else
{
  
}
}