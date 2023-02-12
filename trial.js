const question = document.getElementById("question")
const choices = document.getElementById('choices')
const submitBtn = document.getElementById('submit')
const timer = document.getElementsByClassName('card timer')
const resetBtn = document.getElementById('reset-button')

var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
//enabling the start button


function init() {
    getWins();
    getlosses();
  }
  
const questions = [
    {
        question: "What is the first letter in the alphabet?",
        choices: ['a', 'b', 'c', 'z'],
        answer: 'a'
    },

    {
        question: "Who was the sole Developer of 'Stardew Valley'?",
        choices: ['OpticMyth', 'ConcernedApe', 'DeveloperZ', 'Ninja'],
        answer: 'a'
    },

    {
        question: "What is the first letter in the alphabet?",
        choices: ['a, b, c, z'],
        answer: 'a'

    },
];

let currentQuestion = 0;
let timeAvailable = 15;

function loadQuestion() {
    question.innerHTML = questions[currentQuestion].question;
    choices.innerHTML = "";
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
      const option = document.createElement("button");
      option.innerHTML = questions[currentQuestion].choices[i];
      option.classList.add("choice");
      option.addEventListener("click", selectAnswer);
      choices.appendChild(option);
    }
    countdown();
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


  function selectAnswer(e) {
    const selectedChoice = e.target;
    const correct = selectedChoice.innerHTML === questions[currentQuestion].answer;
    Array.from(choices.children).forEach((choice) => {
      choice.disabled = true;
      if (choice.innerHTML === questions[currentQuestion].answer) {
        choice.classList.add("correct");
      } else if (selectedChoice === choice) {
        choice.classList.add("incorrect");
      }
    });
    if (correct) {
      submitBtn.innerHTML = "Correct! Next question...";
    } else {
      submitBtn.innerHTML = "Wrong! Next question...";
    }
    submitBtn.disabled = false;
    clearInterval(countdownInterval);
  }

  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion === questions.length) {
      alert("You have completed the quiz!");
    } else {
      loadQuestion();
    }
  }
  
  submitBtn.addEventListener("click", nextQuestion);
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
  submitBtn.addEventListener("click", startGame);

  // even listener for reset
  resetBtn.addEventListener("click", resetGame);
  
// function countdown() {
//   timeLeft = 10;
//   countdownInterval = setInterval(() => {
//     timerDisplay.innerHTML = `Time left: ${timeLeft}`;
//     timeLeft--;
//     if (timeLeft === 0) {
//       clearInterval(countdownInterval);
//       alert("Time is up!");
//       nextQuestion();
//     }
//   }, 1000);
// }

loadQuestion();