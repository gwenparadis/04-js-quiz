//question variables
let currentQuestion = 0;
let score = 0;

const questions = [{
    question: "What do you love about coding?",
    answer: true
},
{
    question: "What do you love about bootcamp?",
    answer: false
},
{
    question: "Third question answer true",
    answer: true
},
{
    question: "Fourth question answer?",
    answer: false
}
];

// other global variables
const startButton = document.getElementById('start');
const timerEl = document.getElementById('timer');
const questionContainerEl = document.getElementById('question-container');
const trueButton = document.getElementById('true');
const falseButton = document.getElementById('false');
const endGameEl = document.getElementById('end-game');
const highScoresEl = document.getElementById('high-scores');
const initialsEl = document.getElementById('initials-form');

function startGame() {
    //hide the start button:
    start.classList.add('hide');
    //make the question show:
    timerEl.classList.remove('hide');
    questionContainerEl.classList.remove('hide');
    //start timer function needs to be created and run here!---- idea is keydown event set to answer boolean. if keydown selects true answer, add time, if selects false answer, subtract time
    countdown();
    nextQuestion();
};

// THEN a timer starts:
function countdown() {
    let timeLeft = 15;

    const timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            endGame();
        }
    }, 1000);
};

//and I am presented with a question:
function nextQuestion() {
    // Getting the question and answer variables
    const questionEl = document.getElementById("question");
    // Setting the for loop to display questions
    for (let i = 0; i < questions.length; i++) {
        questionEl.innerText = questions[i].question;
    };
};

function endGame() {
    questionContainerEl.classList.add('hide');
    endGameEl.classList.remove('hide');
    highScoresEl.classList.remove('hide');
    timerEl.classList.add('hide');
    initialsEl.classList.remove('hide');
};

//WHEN I click the start button, timer starts and game starts
startButton.addEventListener("click", startGame);

/*
function nextQuestion() {    
    //WHEN I answer a question incorrectly
    //THEN time is subtracted from the clock
    //WHEN all questions are answered or the timer reaches 0
    //THEN the game is over
    //WHEN the game is over
    
    //THEN I can save my initials and my score
    localStorage.setItem(highScore);
    highScore.textContent = highScore;

    return (score);
};

function endGame() {
    show the score sheet
}

*/
