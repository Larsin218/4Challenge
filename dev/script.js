var startButton = document.getElementById("start");
var saveButton = document.getElementById("save");
var leaderboardButton = document.getElementById("leaderboard");
var optionList = document.getElementById("optionList");

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
var currentQuestion = questions[currentIndex];

function displayQuestions() {
  document.getElementById("question").innerText = `${currentQuestion.question}`;
  document.getElementById(
    "option1"
  ).innerText = `${currentQuestion.options[0]}`;
  document.getElementById(
    "option2"
  ).innerText = `${currentQuestion.options[1]}`;
  document.getElementById(
    "option3"
  ).innerText = `${currentQuestion.options[2]}`;
  document.getElementById(
    "option4"
  ).innerText = `${currentQuestion.options[3]}`;
}

function nextQuestion() {
  ++currentIndex;
  document.getElementById("question").innerText = `${currentQuestion.question}`;
  document.getElementById(
    "option1"
  ).innerText = `${currentQuestion.options[0]}`;
  document.getElementById(
    "option2"
  ).innerText = `${currentQuestion.options[1]}`;
  document.getElementById(
    "option3"
  ).innerText = `${currentQuestion.options[2]}`;
  document.getElementById(
    "option4"
  ).innerText = `${currentQuestion.options[3]}`;
  console.log("clicked");
  console.log(currentIndex);
}

startButton.addEventListener("click", displayQuestions);
optionList.addEventListener("click", nextQuestion);
