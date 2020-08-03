// list the all the questions, possible answers, and correct answer for quiz
var quiz = document.querySelector("#quizContent")
var questions = [ 
    {
        question: "Inside which HTML element do you put the JavaScript?", 
        answers: ["scripting", "script", "javascript", "js"],
        correctAnswer: "script",

    },
    {
        question: "What is the correct syntax for referring to an external script called xxx.js?",
        answers: ["script src", "script name", "script href", "script source"],
        correctAnswer: "script src",
    },

    {
        question: "What does Math.PI return??",
        answers: ["3.24", "3.14", "78.95", "4.14"],
        correctAnswer: "3.14",
    },

    {
        question: "What does a for loop do?",
        answers: ["also loops through a block of code while a specified condition is true", "loops through a block of code while a specified condition is true", "loop through a block of code a number of times", "loops through the properties of an object"],
        correctAnswer: "script src",
    },

    {
        question: "What is the correct syntax for referring to an external script called xxx.js?",
        answers: ["script src", "script name", "script href", "script source"],
        correctAnswer: "script src",
    },
]
// use a function to start the quiz:
// make it so the quiz questions display one at a time in order from 0-4
// create a timer that starts at 30 sec and counts down by seconds
// push the start button to start the timer 
// have the user answer questions 0-4 as timer counts down, all whikle keeping track of score
// when timer reaches 0, the quiz is paused and produces something that says the quiz is over
// return how many answers the user got right out of 0-4
// allow user to input their initals next to score in a form
// save the score in local storage
// allow user to play again and compare score