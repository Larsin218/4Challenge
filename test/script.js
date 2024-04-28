const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["New York", "London", "Paris", "Tokyo"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
        answer: "Da Vinci"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const options = document.getElementById('answer-options');
    options.innerHTML = '';

    question.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => selectAnswer(option);
        options.appendChild(li);
    });
}

function selectAnswer(option) {
    const question = quizQuestions[currentQuestionIndex];
    if (option === question.answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const result = document.getElementById('result');
    result.textContent = `Your score is ${score} out of ${quizQuestions.length}`;
    document.getElementById('answer-options').innerHTML = '';
    document.getElementById('question').textContent = '';
    document.getElementById('quiz-container').appendChild(result);
}

document.addEventListener('DOMContentLoaded', displayQuestion);
