var player = 1;
var gameBoard;
var playerX = "X";
var playerO = "O";
var isTheEnd = false;
var sizeBoard;
var whoWon = "";
var win1 = 0;
var win2 = 0;
var draw = false;

function initGame() {
  sizeBoard = localStorage.getItem("sizeOfBoard");
  initBoard(sizeBoard);
}

function setSizeBoard(size) {
  localStorage.setItem("sizeOfBoard", size);
}

function clickimg(valueX, valueY, id) {
  if (!isTheEnd) {
    row = valueX;
    col = valueY;
    var imageID = "img" + row + col;
    $("#" + id)
      .prop("onclick", null)
      .off("click");
    if (player == 1) {
      gameBoard[row][col] = 1;
      document.getElementById(imageID).src = "img/x.png";
    } else {
      gameBoard[row][col] = -1;
      document.getElementById(imageID).src = "img/o.png";
    }
    nextPlayer();
    whoNext();
    isGameWon(valueX, valueY);
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
    $("#player").text(" X turn ");
  } else {
    $("#player").text(" O turn ");
  }
}
function printMessage() {
  $("#message1").text("double click to change name");
  $("#message1").text("double click to change name");
}
function removeMessage() {
  $("#message1").text("");
  $("#message1").text("");
}

function initBoard(x) {
  gameBoard = new Array(x);
  for (var i = 0; i < x; i++) {
    gameBoard[i] = new Array(x);
  }
  //insert zeros to array "board"
  for (var i = 0; i < sizeBoard; i++) {
    for (var j = 0; j < sizeBoard; j++) {
      gameBoard[i][j] = 0;
    }
  }
}

function isMovePossible() {
  for (var i = 0; i < sizeBoard; i++) {
    for (var j = 0; j < sizeBoard; j++) {
      if (gameBoard[i][j] === 0) {
        return true;
      }
    }
  }
  return false;
}

function cheers() {
  if (whoWon == playerX) {
      $("#showAlertX").show();
  }
  else if (whoWon == playerO) {
      $("#showAlertO").show();
  }
  else {
      $("#showAlertB").show();
  }
}

function checkRows() {
  for (var i = 0; i < sizeBoard; i++) {
    var rowSum = 0;
    for (var j = 0; j < sizeBoard; j++) {
      rowSum += gameBoard[i][j];
      // if first [0][0] position is o that means -1 and second positon [0][1] we need to set rowSum= 0
      if (gameBoard[i][j] === 0) {
        rowSum = 0;
      } else if (rowSum === 3) {
        whoWon = playerX;
        return true;
      } else if (rowSum === -3) {
        whoWon = playerO;
        return true;
      } else if (gameBoard[i][j] == -1 && gameBoard[i][j + 1] == 1) {
        rowSum = 0;
      } else if (gameBoard[i][j] == 1 && gameBoard[i][j + 1] == -1) {
        rowSum = 0;
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
      if (gameBoard[j][i] === 0) {
        colSum = 0;
      } else if (colSum === 3) {
        whoWon = playerX;
        return true;
      } else if (colSum === -3) {
        whoWon = playerO;
        return true;
      } else if (
        j != sizeBoard - 1 &&
        gameBoard[j][i] == -1 &&
        gameBoard[j + 1][i] == 1
      ) {
        // if previous position was O that means that colSum is -1 and if next position is X that means 1
        //we need to set sumCol to zero and at the same time we need to check if we are not at the end of board
        colSum = 0;
      } else if (
        j != sizeBoard - 1 &&
        gameBoard[j][i] == 1 &&
        gameBoard[j + 1][i] == -1
      ) {
        colSum = 0;
      }
    }
  }
  return false;
}
//check around mark and find qeual mark
function checkAround(x, y) {
  var sum1 = 0;
  var sum2 = 0;
  //sizeborad -1 bcs array start from 0 nope from 1
  if (x != 0 && x != sizeBoard - 1 && y != 0 && y != sizeBoard - 1) {
    sum1 = gameBoard[x - 1][y - 1] + gameBoard[x][y] + gameBoard[x + 1][y + 1];
    sum2 = gameBoard[x - 1][y + 1] + gameBoard[x][y] + gameBoard[x + 1][y - 1];
  }
  if (sum1 == 3 || sum2 == 3) {
    whoWon = playerX;
    return true;
  } else if (sum1 == -3 || sum2 == -3) {
    whoWon = playerO;
    return true;
  } else return false;
}

function checkLeftUpCorner(x, y) {
  var sum = 0;
  if (x >= 2 && y >= 2) {
    sum = gameBoard[x][y] + gameBoard[x - 1][y - 1] + gameBoard[x - 2][y - 2];
  }

  if (sum == 3) {
    whoWon = playerX;
    return true;
  } else if (sum == -3) {
    whoWon = playerO;
    return true;
  }
}

function checkRightUpCorner(x, y) {
  var sum = 0;
  if (x >= 2 && y + 2 <= sizeBoard - 1) {
    sum = gameBoard[x][y] + gameBoard[x - 1][y + 1] + gameBoard[x - 2][y + 2];
  }

  if (sum == 3) {
    whoWon = playerX;
    return true;
  } else if (sum == -3) {
    whoWon = playerO;
    return true;
  }
}
function checkLeftDownCorner(x, y) {
  var sum = 0;
  if (x + 2 <= sizeBoard - 1 && y >= 2) {
    sum = gameBoard[x][y] + gameBoard[x + 1][y - 1] + gameBoard[x + 2][y - 2];
  }

  if (sum == 3) {
    whoWon = playerX;
    return true;
  } else if (sum == -3) {
    whoWon = playerO;
    return true;
  }
}
function checkRightDownCorner(x, y) {
  var sum = 0;
  if (x + 2 <= sizeBoard - 1 && y + 2 <= sizeBoard - 1) {
    sum = gameBoard[x][y] + gameBoard[x + 1][y + 1] + gameBoard[x + 2][y + 2];
  }

  if (sum == 3) {
    whoWon = playerX;
    return true;
  } else if (sum == -3) {
    whoWon = playerO;
    return true;
  }
}

function isGameWon(x, y) {
  if (checkColumns() == true) {
    isTheEnd = true;
    cheers();
  }
  if (checkRows()) {
    isTheEnd = true;
    cheers();
  }

  if (checkLeftUpCorner(x, y) == true) {
    isTheEnd = true;
    cheers();
  }
  if (checkRightUpCorner(x, y) == true) {
    isTheEnd = true;
    cheers();
  }
  if (checkLeftDownCorner(x, y) == true) {
    isTheEnd = true;
    cheers();
  }
  if (checkRightDownCorner(x, y) == true) {
    isTheEnd = true;
    cheers();
  }

  if (checkAround(x, y) == true) {
    isTheEnd = true;
    cheers();
  }
  if (isMovePossible() == false) {
    isTheEnd = true;
    if (window.confirm("Draw , Play Again ?")) {
      window.location.reload();
    }
  }
}
