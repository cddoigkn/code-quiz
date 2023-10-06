// make a countdown timer
// make a button that says "start quiz"
// make a function to start the countdown once the "start quiz" button has been clicked
// make a function that makes the first question appear once the button has been pressed
// make a function to respond to answers displayed for question

var timeEl = document.querySelector(".time")
var setButton = document.querySelector("#startButton")

var secondsLeft = 120;

var questions = [
  {
    question: "how was the weather today?",
    choices: ["a", "b", "c", "d"],
    correct: "c"
  },
  {
    question: "how was the weather today?",
    choices: ["a", "b", "c", "d"],
    correct: "c"
  },
  {
    question: "how was the weather today?",
    choices: ["a", "b", "c", "d"],
    correct: "c"
  },
  {
    question: "how was the weather today?",
    choices: ["a", "b", "c", "d"],
    correct: "c"
  },
  {
    question: "how was the weather today?",
    choices: ["a", "b", "c", "d"],
    correct: "c"
  },
]

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining!"
  }, 1000);
}

setButton.addEventListener("click", function() {
  setTime();
})
