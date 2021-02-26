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
        andswer: "style"

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


function beginQuiz() {

    countdownEl
}


