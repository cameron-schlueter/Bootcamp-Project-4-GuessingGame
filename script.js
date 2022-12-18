var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;


// make my own words
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// The startGame function is called when the start button is clicked
function startGame() {
    isWin = false;
    timerCount = 10;
      // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}
// The winGame function is called when the win condition is met
function winGame() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    winCounter++
    startButton.disabled = false;
    setWins()
  }
  
  // The loseGame function is called when timer reaches 0
  function loseGame() {
    wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
  }
// Timer
function countdown() {
    var timeLeft = 10;
     timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeleft + 'seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + 'seconds remaining';
        timeLeft--;
      } else {
        timerEl.textContent = ''
        clearInterval(timeinterval)
        displayMessage('Time is Up')
      }
    }, 100)
  }