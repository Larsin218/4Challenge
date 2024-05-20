var startButton = document.getElementById("start");
var saveButton = document.getElementById("save");
var leaderboardButton = document.getElementById("leaderboard-button");
var optionList = document.getElementById("optionList");
var timerElement = document.getElementById("timer");
var leaderboard = document.getElementById("leaderboard");

var questions = [
  {
    question: "What is the capital of France?",
    options: ["New York", "London", "Paris", "Tokyo"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
    answer: "Da Vinci",
  },
];

var currentIndex = 0;
var timer;
var timeLeft = 60;
var score = 0;

function displayQuestions() {
  var currentQuestion = questions[currentIndex];
  document.getElementById("question").innerText = currentQuestion.question;
  document.getElementById("option1").innerText = currentQuestion.options[0];
  document.getElementById("option2").innerText = currentQuestion.options[1];
  document.getElementById("option3").innerText = currentQuestion.options[2];
  document.getElementById("option4").innerText = currentQuestion.options[3];
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    displayQuestions();
  } else {
    endQuiz("Quiz completed!");
  }
}

function startTimer() {
  timer = setInterval(function() {
    timeLeft--;
    timerElement.innerText = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      endQuiz("Time's up!");
    }
  }, 1000);
}

function endQuiz(message) {
  clearInterval(timer);
  document.getElementById("question").innerText = message;
  document.getElementById("option1").innerText = "";
  document.getElementById("option2").innerText = "";
  document.getElementById("option3").innerText = "";
  document.getElementById("option4").innerText = "";
  optionList.classList.add('hidden');
}

function saveScore() {
  
}

function loadScore() {
  
}

function showList() {
  optionList.classList.remove('hidden');
}

startButton.addEventListener("click", function() {
  displayQuestions();
  startTimer();
  showList();
});

optionList.addEventListener("click", function(optionList) {
  if (optionList.target.tagName === "LI") {
    nextQuestion();
  }
});

saveButton.addEventListener("click", saveScore);


