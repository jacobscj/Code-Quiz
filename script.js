// question list in an array
var qAndA = [
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "What html tag is NOT included in the HEAD tag?",
        choices: ["link", "meta", "title", "header"],
        answer: "header"
    },
    {
        question: "What attribute is used in html to decorate content?",
        choices: ["css", "class", "src", "style"],
        answer: "style"

    },
    {
        question: "The condition in an if / else statement is enclosed within ______.",
        choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
        answer: "parentheses"
    }
];

// variable to keep the state of the quiz in check 
var questionIndex = 0;
var time = qAndA.length * 15;
var timerId; 


// Grab DOM elements in variables
var timeEl = document.querySelector("#countdown");
var startBtn = document.querySelector("#startButton");
var submitBtn = document.querySelector("#submitButton");
var titleScreen = document.querySelector("#titleSection");
var quizScreen = document.querySelector("#quizQuestions");
var highScoreScreen = document.querySelector("#highScoreSection");
var highScoreDisplay = document.querySelector("highscoreDisplay");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");

var choicesEl = document.querySelector("#choiceBtns");

// 1 second taken off clock
function tick() {
    time--;
    timeEl.textContent = time;
    if (time <=o) {
        quizEnd();
    }
}

// starting quiz by getting question and hiding/showing different sections
function beginQuiz() {
    titleScreen.setAttribute("class", "hide");

    quizScreen.setAttribute("class", "show");

    timerId = setInterval(tick, 1000);

    timeEl.textContent = time;

    getQuestion();
}

// pulling one question from array of questions to display on screen
function getQuestion() {
    var currentQuestion = qAndA[questionIndex];

    var titleEl = document.getElementById("questionTitle");
    titleEl.textContent = currentQuestion.question;

    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + ". " + choice;

        choiceNode.onclick = questionClick;

        choicesEl.appendChild(choiceNode);
    });
}

function questionClick() {
    if (this.value !== qAndA[questionIndex].answer) {
        time -= 10;
        
        if (time < 0) {
            time = 0;
        }

        timeEl.textContent = time;

        feedbackEl.textContent = "Wrong!";
    } else {
        feedbackEl.textContent = "Correct!";
    }

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribue("class", "feedbackHide");
    }, 1000);

    questionIndex++;

    if (questionIndex === qAndA.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    clearInterval(timerId);

    var highscoreSectionEl = document.querySelector("#highScoreSection");
    highscoreSectionEl.setAttribute("class", "show");

    varFinalScoreEl = document.querySelector("#final-score");
    varFinalScoreEl.textContent = time;

    quizScreen.setAttribute("class", "hide");
}

function saveHighScore() {
    var initials = initialsEl.value.trim();
    
    if (initials !== "") {
        var highScores =
            JSON.parse(window.localStorage.getItem(highScores)) || [];

        var newScore = {
            score: time,
            initials: initials
        };

        highScores.push(newScore);
        window.localStorage.setItem("highScores", JSON.stringify(highScores));

        window.location.href = "highscores.html";
    }
}

function checkForEnter(event) {
    if(event.key=== "Enter") {
        saveHighScore();
    }
}

submitBtn.onclick = saveHighScore;

startBtn.onclick = beginQuiz;

initialsEl.onekeyup = checkForEnter;
