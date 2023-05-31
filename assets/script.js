var time = document.getElementById("time");
var timer = document.getElementById("timer");
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

    startScreen.setAttribute("class", "hide")
    questionsDiv.removeAttribute("class", "hide")
    //run function that displays questions
    startQuestions()
  })

  //create functions to iterate over questions array and display appropriate text and title options divs
  function startQuestions() {
  var currentQuestion = quizQuestions[questionIndex];
  title.textContent = currentQuestion.title;
  currentQuestion.choices.forEach(function(choice) {
    var optionButton = document.createElement("button");
    optionButton.textContent = choice;
    optionButton.setAttribute("value", choice);
    //add click event to the value weight against correct answer
    optionButton.addEventListener("click", function() {
      if (choice != currentQuestion.answer) {
        seconds -= 5;
      }
      time.textContent = seconds;
    });
    options.append(optionButton);
  })
};
/*ASK HOW TO PREVENT THE WRONG ANSWERS FROM SUBTRACTING PAST 0 */


if (seconds <= 0) {
    //game over
    clearInterval(timeInterval);
    endScreen.removeAttribute("class", "hide");

    //get initials from user
    var initials = prompt("Enter your initials:");

    //get score
    var score = seconds * quizQuestions.length;

    //save initials and score to local storage
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);
  }


