//questions

const questions = [{
    id: 0,
    question: "What do you love about coding?",
    answer: ["getting smarter", "getting money", "looking at my success", "all of the above"],
    correct: 3
}
];

// global variables
const startButton = document.getElementById('start');
const questionContainerEl = document.getElementById('question-container');
const answerButtonsEl = document.getElementById('answer');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');

let index = 0;
let score = 0;

function showQuestions() {

    // Getting the question
    const questionEl = document.getElementById("question");
    // getting answer variables
    const a = document.getElementById('a');
    const b = document.getElementById('b');
    const c = document.getElementById('c');
    const d = document.getElementById('d');


    // Setting the question text-- THIS WILL NEED TO BE A FOR LOOP TO APPLY TO ALL QUESTIONS
    questionEl.innerText = questions[0].question;

    // showing the answer choices -- THIS WILL NEED TO BE FOR LOOP AND 0=i SO IT WILL APPLY TO ALL ANSWER CHOICES PER QUESTION IN LOOP
    a.innerText = questions[0].answer[0];
    b.innerText = questions[0].answer[1];
    c.innerText = questions[0].answer[2];
    d.innerText = questions[0].answer[3];

    // Boolean value of each answer -- THIS WILL NEED TO BE FOR LOOP AND 0=i SO IT WILL APPLY TO ALL ANSWER CHOICES PER QUESTION IN LOOP
    a.value = questions[0].answer[0].isCorrect;
    b.value = questions[0].answer[1].isCorrect;
    c.value = questions[0].answer[2].isCorrect;
    d.value = questions[0].answer[3].isCorrect;

    // Evaluate method
    answerButtonsEl[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
};

//THEN a timer starts:
//and I am presented with a question:
function startGame() {
    //hide the start button:
    start.classList.add('hide');
    //make the question show:
    questionContainerEl.classList.remove('hide');
    //start timer function needs to be created and run here!
    showQuestions();
    console.log("start game func complete!")
};

//WHEN I click the start button, timer starts and game starts
start.addEventListener("click", startGame)

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
