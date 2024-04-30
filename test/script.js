var questions = [
    // ... questions array as previously defined
];

var timeLeft = 60;
var currentQuestionIndex = 0;
var timerElement = document.getElementById('time');
var startButton = document.getElementById('start-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    setQuestion();
    startTimer();
}

function startTimer() {
    updateTimer(); // Initialize the timer display
    var intervalId = setInterval(function() {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(intervalId);
            // Call a function to end the game
        }
    }, 1000);
}

function setQuestion() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(function(answer) {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    // Clear out any old question data
}

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    if (!correct) {
        timeLeft -= 10;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setQuestion();
    } else {
        // Call a function to end the game
    }
}

function updateTimer() {
    timerElement.innerText = timeLeft;
}
