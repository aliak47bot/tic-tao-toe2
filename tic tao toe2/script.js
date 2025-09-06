var board = document.querySelectorAll(".cell");
var winnerText = document.getElementById("winner");
var currentPlayer = "X";
var gameActive = true;

var winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

board.forEach(function(cell) {
  cell.addEventListener("click", function() {
    if (cell.textContent === "" && gameActive) {
      cell.textContent = currentPlayer;
      checkWinner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

function checkWinner() {
  winPatterns.forEach(function(pattern) {
    var a = board[pattern[0]].textContent;
    var b = board[pattern[1]].textContent;
    var c = board[pattern[2]].textContent;

    if (a && a === b && a === c) {
      winnerText.textContent = "برنده: " + a;
      gameActive = false;
    }
  });

  if ([...board].every(cell => cell.textContent !== "") && gameActive) {
    winnerText.textContent = "مساوی شد!";
    gameActive = false;
  }
}

function resetGame() {
  board.forEach(function(cell) {
    cell.textContent = "";
  });
  winnerText.textContent = "";
  currentPlayer = "X";
  gameActive = true;
}
