// locate the main body
var mainBody = document.getElementById("initialBody");
// locate the question body
var questionBody =  document.getElementById("questionBody");
// locate the result body
var resultBody =  document.getElementById("resultBody");
// locate the viewhighscore body
var viewHighScoreBody =  document.getElementById("viewHighScoreBody");
// locate the "Start Quiz Button"
var startQuizBtn = document.querySelector("#startQuiz");
// set the value for the current question
var currentQues = 0;
// locate the question number (h1)
var questionNum = document.getElementById("questionNum");
// locate the question Title (p)
var questionTitle = document.getElementById("questionTitle");
// locate the choice list (ul)
var choiceList = document.getElementById("choiceList");
// locate the timer section
var timer = document.getElementById("timer");
// set a var for timeInterval as novalue to stop the function
var timeInterval;
// the initial second count (should be 75)
var secondLeft = 0;
// add a paragraph p element name as feedback
var feedback = document.createElement("p");
// add an list element name as li
var feedbackli = document.createElement("li");
// locate the result heading (h1)
var resultHead = document.getElementById("resultHead");
// locate the result content - show score (p)
var resultMain = document.getElementById("resultMain");
// locate the result input for initial (<input>)
var resultInput = document.getElementById("resultInput");
// locate the result submit button (button)
var resultSubmit = document.getElementById("resultSubmit");
// locate the result message (div for error input message)
var resultMessage = document.getElementById("resultMessage");
// set an empty array for storing the player result
var playerResultArray = [];
// locate the highest score list (table)
var highscoreTableBody = document.getElementById("highscoreTableBody");
// locate view high score page button from main page (button)
var highScorePageBtnMain = document.getElementById("highScorePageBtnMain");
// locate view high score page button from the choice page (button)
var highScorePageBtnChoice = document.getElementById("highScorePageBtnChoice");