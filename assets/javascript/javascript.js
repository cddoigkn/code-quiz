// make a countdown timer
// make a button that says "start quiz"
// make a function to start the countdown once the "start quiz" button has been clicked
// make a function that makes the first question appear once the button has been pressed
// make a function to respond to answers displayed for question
// create an h3 container that displays the question
// display choices when question is presented
// make every choice able to be clicked (add event listener "click") so they are all options
// make it so only one choice is the correct choice
// create a function that is okay with one answer
// create a function that deducts 10 seconds from the time remaining whenever an incorrect answer is chosen


var timeEl = document.querySelector(".time")
var setButton = document.querySelector("#startButton")
var prompt = document.querySelector("#questions")
var index = 0

var quizActive = false;
var secondsLeft = 120;

var questions = [
  {
    question: "Which food is legitimately the best of all time?",
    choices: ["Hamburger", "Apples", "Cranberries", "Pizza"],
    correct: 2
  },
  {
    question: "Can you understand German?",
    choices: ["schrecklich", "Ja", "gut", "schon"],
    correct: 1
  },
  {
    question: "how was the weather today?",
    choices: ["a", "b", "c", "d"],
    correct: 3
  },
  {
    question: "how was the weather today?",
    choices: ["a", "b", "c", "d"],
    correct: 3
  },
  {
    question: "how was the weather today?",
    choices: ["a", "b", "c", "d"],
    correct: 0
  },
]

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining!"
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      timeEl.textContent = ("You're too Slow!");
    quizActive = false
    secondsLeft = 120;
    }
  }, 1000);
}

setButton.addEventListener("click", function() {
  if (!quizActive) {
    setTime();
    showQuestion(0);
    quizActive = true;
  }
})

function showQuestion(index) {
  var question = questions[index];
  var questionEl = document.createElement("span");
  questionEl.textContent = question.question;

}
