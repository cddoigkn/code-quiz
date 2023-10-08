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

var scoresList = document.querySelector("#scores");
var currentScore = 0
var submitScore = document.querySelector("#submitScore")
var endScreenInput = document.querySelector("#endScreenInput")
var endScreen = document.querySelector("#endScreen")
var timeEl = document.querySelector(".time")
var setButton = document.querySelector("#startButton")
var prompt = document.querySelector("#questions")
var index = 0
var timerInterval = ""

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
    question: "What year did 9/11 happen in?",
    choices: ["911 AD", "911 BC", "2023", "2001"],
    correct: 3
  },
  {
    question: "What male animal is capable of becoming pregnant?",
    choices: ["Sea Turtle", "Monkey", "Horse", "Seahorse"],
    correct: 3
  },
  {
    question: "What is the average air velocity of an unladen swallow?",
    choices: ["African or European?", "Well I don't know that", "Oh no", "Nobody likes the French!"],
    correct: 0
  },
]

submitScore.addEventListener("click", function() {
  var score = JSON.parse(window.localStorage.getItem("score"));
if(score){
  score.push({
    name:input.value,
    score:currentScore
  })
  score.sort();
} else {
  score = [
      {
          name: input.value,
          score: currentScore
      }
  ]
}
window.localStorage.setItem("score",JSON.stringify(score));
endScreen.setAttribute("class","ninjutsu");
})
// ninjutsu makes things hide
//set time piece so that we can get time a movin'
function setTime() {
  timerInterval = setInterval(function() {
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
    currentScore = 0; 
    showQuestion(currentQuestion);
    quizActive = true;
  }
})
// getting prompt element then creating choices for the question, then assigning the choices to a function call to check if they are correct or not, if correct then we will continue the quiz, if not then they will lose time
function showQuestion(index) {
  if (index >= questions.length ){
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
        currentQuestion++
        currentScore++
        showQuestion(currentQuestion);
      } else {
        secondsLeft = secondsLeft - 5
      }
    })
    prompt.appendChild(answerEl)
};
}

function quizComplete() {
  endScreen.setAttribute("class","");
  prompt.setAttribute("class","ninjutsu");
  clearInterval(timerInterval);
  displayScores();
}

function displayScores() {
  scoresList.innerHTML = "";
  var scores = JSON.parse(window.localStorage.getItem("score"));
  if (scores){
      for(let i; i < scores.length; i++)
        var scoreEl = document.createElement('li');
        scoreEl.textContent = scores[i].name + " - " + scores[i].score;
        scoresList.appendChild(scoreEl);
  }
}