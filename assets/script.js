var time = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var start = document.getElementById("start");
var questionsDiv = document.getElementById("questions-div");
var options = document.getElementById("options");
var title = document.getElementById("title");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var seconds = 60
var questionIndex = 0
var timeInterval
var quizQuestions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    }
  ]


  //when start button is clicked start timer, hide start screen, unhide questions
  start.addEventListener("click", function(){
    timeInterval = setInterval(function(){
        seconds = seconds-1
        time.textContent = seconds
    if (seconds <= 0){
        clearInterval(timeInterval)
    }
    },1000)
  })