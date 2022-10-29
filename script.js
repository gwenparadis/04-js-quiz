//question variables
let currentQuestion = 0;
let score = 0;
let questionCount = 0;
let timeLeft = 30;

const questions = [{
    question: "Question Here?? answer is peaches",
    answers: [{text: "apples"}, {text: "oranges"}, {text: "peaches"}, {text: "bananas"}],
    isCorrect: "peaches"
},
{
    question: "Second choose bananas",
    answers: [{text: "apples"}, {text: "oranges"}, {text: "peaches"}, {text: "bananas"}],
    isCorrect: "bananas"
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
const initialsEl = document.getElementById('initials-container');

//THEN a timer starts:
function countdown() {
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
    showQuestion();
    showAnswers();
};

//and I am presented with a question:
function showQuestion() {
    // Getting the question and answer variables
    const questionEl = document.getElementById("question");
    // Setting the for loop to display questions
    questionEl.textContent = questions[questionCount].question;
};

//presenting answer choices with the coorelating questions, making them clickablle // other question button functions
function showAnswers() {
    // getting the answer choices
    const answerChoices = document.getElementById("answer");
    answerChoices.innerHTML = '';
    const answerList = document.createElement("ul");
    
    for (let i = 0; i < questions[questionCount].answers.length; i++) {
        let answerListOptions = questions[questionCount].answers[i].text;

    //create the html element with desired classes, where the corresponding answer choices will later populate
        const answerListChildren = document.createElement('li');
        answerListChildren.classList.add('btn');
        answerListChildren.classList.add('answer-btns');
    //make each list option a button
        answerListChildren.setAttribute('type', 'button');

    //when the button is clicked, if the answer is correct, trigger score+1 and add time to counter, if incorrect, take time off the counter
        answerListChildren.addEventListener("click", function(e) {
            console.log("yay clicky click");

            if (e.target.textContent === questions[questionCount].isCorrect) {
                score++;
                console.log(score);
                timeLeft = timeLeft + 10;
            } else {
                timeLeft = timeLeft - 5;
            };
    //display next question when the interactions are complete
            nextQuestion();
        });

    //appending the corresponding, clickable answer choices for the given question
        answerListChildren.textContent = questions[questionCount].answers[i].text;
        answerList.appendChild(answerListChildren);
        answerChoices.append(answerList);

        console.log(answerListOptions);
    };
};

//goes to the next question once an answer choice is selected
function nextQuestion() {
    questionCount++;
    if (questionCount == questions.length) {
        endGame();
    } else {
        showQuestion();
        showAnswers();
    }
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
    highScores.innerHTML = userInput.value + "'s score is: " + score;
    saveScore(userInput.value, score);
    console.log(localStorage.key(userInput.value));
    console.log(localStorage.getItem(userInput.value));
};

function saveScore(initials, score) {
    localStorage.setItem(initials, score);
};

//WHEN I click the start button, timer starts and game starts
startButton.addEventListener("click", startGame);