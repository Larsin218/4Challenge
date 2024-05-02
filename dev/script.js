var startButton = document.getElementById("start");
var saveButton = document.getElementById("save");
var leaderboardButton = document.getElementById("leaderboard");

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

function displayQuestions() {
  var currentQuestion = questions[currentIndex];
  document.getElementById("question").innerText = `${currentQuestion.question}`;
}

startButton.addEventListener("click", displayQuestion);
