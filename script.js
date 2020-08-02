// list the all the questions, possible answers, and correct answer
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