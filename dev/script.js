var startButton = document.getElementById("start");
var saveButton = document.getElementById("save");
var leaderboardButton = document.getElementById("leaderboard-button");
var clearButton = document.getElementById("clear");
var optionList = document.getElementById("optionList");
var timerElement = document.getElementById("timer");
var leaderboard = document.getElementById("leaderboard");
var leaderboardList = document.getElementById("leaderboard-list");

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

function nextQuestion(selectedAnswer) {
  tallyScore(selectedAnswer);
  currentIndex++;
  if (currentIndex < questions.length) {
    displayQuestions();
  } else {
    endQuiz("Quiz completed!");
  }
  console.log("score = " + score);
}

function startTimer() {
  timer = setInterval(function () {
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
  optionList.classList.toggle("hidden");
}

function tallyScore(selectedAnswer) {
  if (selectedAnswer === questions[currentIndex].answer) {
    score++;
  }
}

function saveScore() {
  var initials = window.prompt("Enter your initials");
  localStorage.setItem(`${initials}`, JSON.stringify(score));
}

function loadScore() {
  var scores = "";
  for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    var score = JSON.parse(value);
    scores += `${key} - ${score}<br>`;
  }
  leaderboardList.innerHTML = `${scores}`;
}

function showList() {
  optionList.classList.toggle("hidden");
}

function clearLeaderboard() {
  localStorage.clear();
  leaderboard.classList.add("hidden");
}

startButton.addEventListener("click", function () {
  currentIndex = 0;
  score = 0;
  timeLeft = 60;
  displayQuestions();
  startTimer();
  showList();
});

optionList.addEventListener("click", function (optionList) {
  if (optionList.target.tagName === "BUTTON") {
    var selectedAnswer = optionList.target.innerText;
    nextQuestion(selectedAnswer);
  }
});

saveButton.addEventListener("click", saveScore);

leaderboardButton.addEventListener("click", function () {
  loadScore();
  leaderboard.classList.toggle("hidden");
});

clearButton.addEventListener("click", clearLeaderboard);
