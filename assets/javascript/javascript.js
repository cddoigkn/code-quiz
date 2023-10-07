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
var currentQuestion = 0;
var secondsLeft = 120;

var questions = [
  {
    question: "Which food is legitimately the best of all time?",
    choices: ["Hamburger", "Apples", "Cranberries", "Pizza"],
    correct: 2
  },
  {
    question: "What's 2 + 2?",
    choices: ["3", "4", "44", "22"],
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
    if(secondsLeft <= 0) {
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
    setButton.setAttribute("class", "ninjutsu");
    currentQuestion = 0;
    showQuestion(currentQuestion);
    quizActive = true;
  }
})
// getting prompt element then creating choices for the question, then assigning the choices to a function call to check if they are correct or not, if correct then we will continue the quiz, if not then they will lose time
function showQuestion(index) {
  if (index > questions.length ){
    quizComplete();
  }
  var question = questions[index];
  var questionEl = document.createElement("span");
  questionEl.textContent = question.question;
  prompt.appendChild(questionEl);
  for (let i = 0;i<question.choices.length;i++){
    var answerEl = document.createElement("button");
    answerEl.textContent = question.choices[i]
    answerEl.value = i;
    answerEl.addEventListener("click", function(event) {
      if (event.target.value==question.correct) {
        // had to do a quick google search for this cheeky one
        prompt.innerHTML = "";
        showQuestion(currentQuestion++);
      } else {
        secondsLeft = secondsLeft - 5
      }
    })
    prompt.appendChild(answerEl)
};
}

function quizComplete() {
  var endOfQuiz = document.createElement()
}
