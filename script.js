var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
//enabling the start button
var startButton = document.getElementById("button").disabled = false;

var chosenWord = "";
// Number when no user input
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Chosen words
var wordsbank = ["HTML","bootcamp", "opossum", "variable", "function", "string", "boolean"];

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// The init function is called when the page loads 
function init() {
    getWins();
    getlosses();
  }
  



// The startGame function is called when the start button is clicked
function startGame() {
    isWin = false;
    timerCount = 10;
      // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}
//Box with prompt and options





// Creates blanks on screen
function renderBlanks() {
    // Randomly picks word from words array
    chosenWord = words[Math.floor(Math.random() * words.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;
    blanksLetters = []
    // Uses loop to push blanks to blankLetters array
    for (var i = 0; i < numBlanks; i++) {
      blanksLetters.push("_");
    }
    // Converts blankLetters array into a string and renders it on the screen
    wordBlank.textContent = blanksLetters.join(" ")
  }


// The winGame function is called when the win condition is met
function winGame() {
    wordBlank.textContent = "Good Job!";
    winCounter++
    startButton.disabled = false;
    setWins()
  }
  
  // The loseGame function is called when timer reaches 0
  function loseGame() {
    wordBlank.textContent = "Time is Up :(";
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

  // Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
      if (chosenWord[i] === letter) {
        letterInWord = true;
      }
    }
    if (letterInWord) {
      for (var j = 0; j < numBlanks; j++) {
        if (chosenWord[j] === letter) {
          blanksLetters[j] = letter;
        }
      }
      wordBlank.textContent = blanksLetters.join(" ");
    }
  }
  
  // Attach event listener to document to listen for key event
  document.addEventListener("keydown", function(event) {
    // If the count is zero, exit function
    if (timerCount === 0) {
      return;
    }
    // Convert all keys to lower case
    var key = event.key.toLowerCase();
    var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
    // Test if key pushed is letter
    if (alphabetNumericCharacters.includes(key)) {
      var letterGuessed = event.key;
      checkLetters(letterGuessed)
      checkWin();
    }
  });
  
  // start button event listener on click
  startButton.addEventListener("click", startGame);

  // even listener for reset
  resetButton.addEventListener("click", resetGame);
