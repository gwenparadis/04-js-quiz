//question variables
let currentQuestion = 0;
let score = 0;

const questions = [{
    question: "Question Here?? Explore buttons while timer runs out!",
    answer: true
},
];

// other global variables
const startButton = document.getElementById('start');
const timerEl = document.getElementById('timer');
const questionContainerEl = document.getElementById('question-container');
const trueButton = document.getElementById('true');
const falseButton = document.getElementById('false');
const endGameEl = document.getElementById('end-game');
const highScoresEl = document.getElementById('high-scores');
const initialsEl = document.getElementById('initials-container');

// THEN a timer starts:
function countdown() {
    let timeLeft = 5;

    const timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds left!!';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second left!!';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            endGame();
        }
    }, 1000);
};

function startGame() {
    //hide the start button:
    startButton.classList.add('hide');
    //make the question show:
    timerEl.classList.remove('hide');
    questionContainerEl.classList.remove('hide');
    //start timer function needs to be created and run here!---- idea is keydown event set to answer boolean. if keydown selects true answer, add time, if selects false answer, subtract time
    countdown();
    nextQuestion();
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
    timerEl.classList.add('hide');
    initialsEl.classList.remove('hide');
};

function submitForm() {
    let userInput = document.getElementById('user-input');
    let highScores = document.getElementById('high-scores');

    highScores.classList.remove('hide');
    highScores.innerHTML = userInput.value + "'s score is: ";
};

function evaluateAnswer(color) {
    questionContainerEl.style.color = color;
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

*/
