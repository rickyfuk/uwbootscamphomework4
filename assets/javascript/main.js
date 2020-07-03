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

// default setting
// hide question body (function 0)
hideQuestionBody();
// hide result body (function 11)
hideResultBody();
// hide highscore body (function 19)
hideHighScoreBody();
// show main body (function 13)
showMainBody();
// show timer (function 25)
showtimer();
// when the start quiz button pressed run:
// 1.function startQuiz (function 1)
// 2.function addChoioceListerertoMain (function 9)
startQuizBtn.addEventListener("click", startQuiz); 
// active the view highscore button to to go show High score body (function 20)
highScorePageBtnMain.addEventListener("click",showHighScoreBody);


function initpage(){
    // default setting
    // hide question body (function 0)
    hideQuestionBody();
    // hide result body (function 11)
    hideResultBody();
    // hide highscore body (function 19)
    hideHighScoreBody();
    // show main body (function 13)
    showMainBody();
    // show timer (function 25)
    showtimer();
    // when the start quiz button pressed run:
    // 1.function startQuiz (function 1)
    // 2.function addChoioceListerertoMain (function 9)
    startQuizBtn.addEventListener("click", startQuiz); 
    // active the view highscore button to to go show High score body (function 20)
    highScorePageBtnMain.addEventListener("click",showHighScoreBody);
}

// function 0 - hide the question content
function hideQuestionBody(){
    questionBody.setAttribute ("style", "display:none;");
}

// function 1 - start game
function startQuiz(){
    // hide the landing page (function 2)
    hideMainBody();
    // set the countdown time (test)
    secondLeft = 10;
    // start the countdown (function 8)
    countSecondLeft();
    // set time interval for every 1 sec to run function 8 once 
    timeInterval = setInterval(countSecondLeft,1000);
    currentQues = 0;
    // show the question (function 3)
    showQuestionBody();
}

// function 2 - hide the body content
function hideMainBody(){
    mainBody.setAttribute ("style", "display:none;");
}

// function 3 - show the question content
function showQuestionBody(){
    // hide the landing page (function 2)
    hideMainBody();
    // hide result body (function 11)
    hideResultBody();
    // hide highscore body (function 19)
    hideHighScoreBody();
    // active the choice button eventListener (function 9)
    addChoiceListererToMain();
    // display the question body
    questionBody.setAttribute ("style", "display:block;");
    // show the question content (function 4)
    nextQuestion();
}

// function 4 - set up for the next question content
function nextQuestion(){
    // clear all the previous quesions content and choice (function 5) 
    resetQuestion();
    // build the question content (function 6)
    questionBuilder(currentQues);
}

// function 5 - reset the question content
function resetQuestion(){
    // clear the question heading
    questionNum.textContent = "";
    // clear the question title content
    questionTitle.textContent = "";
    //clear the answer choice
    choiceList.innerHTML = "";
}

// function 6 - bulid in the content to the question
function questionBuilder(questionCount){
    if (questionCount<5){
        // add the question number on the question heading
        questionNum.textContent = "Question " + (questionCount+1);
        // add the question title content
        questionTitle.textContent = questions[questionCount].title;
        // add the answer choice
        for (j=0; j<questions[questionCount].choices.length; j++){
            // add an list element name as li
            var li = document.createElement("li"); 
            var choiceBtn = document.createElement("button");
            // create a list item with a button inside for displaying the selection
            choiceBtn.textContent = questions[questionCount].choices[j];    
            choiceBtn.setAttribute("class","userChoice mb-3 btn btn-outline-primary");            
            choiceList.appendChild(li);
            li.appendChild(choiceBtn);
        }
    }
}

// function 7 - find the user choice and check if it is correct
function chooseAns(){
    var userChoice = event.target.textContent;
    var correctAns = questions[currentQues].answer;
    // if the selection from user same as the correct answer
    if (userChoice === correctAns){
            feedback.textContent = "Correct"
            // run the feedback function (function 10)
            returnFeedback();
            return;
    }
    else {
            feedback.textContent = "Wrong! The correct answer is " + questions[currentQues].answer;
            // run the feedback function (function 10)
            returnFeedback();
            // reduce the time with 10 seconds
            return secondLeft -= 10; 
    }
}

// function 8 - counts second left
function countSecondLeft (){
    secondLeft--;
    timer.textContent = "Time : " + Math.max(0,secondLeft);
    // when time is up or no more question
    if (secondLeft <= 0 || currentQues>4){
        // clear interval - stop counting down
        clearInterval(timeInterval);
        // hide the question body (function 0)
        hideQuestionBody();
        // show the result body (function 12)
        showResultBody();
    }
    // else continue to count down (no action)
}

// function 9 - add event lisetner for showQuestionBody
function addChoiceListererToMain(){
        // activate the view high score button (function 20)
        highScorePageBtnChoice.addEventListener("click",showHighScoreBody);
        // start or resume the click event listener to proceed with chooseAns function 
        // (function 7)
        choiceList.addEventListener("click", chooseAns);
        // start or resume the click event listener to proceed with next question
        // delay the function for half sec to let the user read the correct / wrong response
        choiceList.addEventListener("click", function(){
            setTimeout(function(){
            nextQuestion();
            },500);
        });
}

// function 10 - return the answer feedback to the user
function returnFeedback(){
    choiceList.appendChild(feedbackli);
    feedbackli.appendChild(feedback);
    // add 1 to the question counter
    currentQues++;
    // freeze the click function and so the click will not active after the choice is made
    choiceList.removeEventListener("click", chooseAns);
    // return to addListenToMain function to resume the click event after half sec
    setTimeout(addChoiceListererToMain,500);
}

// function 11 - hide the result body content
function hideResultBody(){
    resultBody.setAttribute ("style", "display:none;");
}

// function 12 - show the result body content
function showResultBody(){
    // build the score result body (function 14)
    showScoreResult();
    // show the result body
    resultBody.setAttribute ("style", "display:block;");
}

// function 13 - show the body content
function showMainBody(){
    mainBody.setAttribute ("style", "display:block;");
}

// function 14 - set up the Result body content
// (show the result and get the name for the player to store it to local storage)
function showScoreResult(){
    // display the result heading
    // if the quiz end due to time equal to 0 => show Time up
    if (secondLeft <= 0 ){
        resultHead.textContent = "Time Up!"
    }
    else{
        // if the quiz end due to all question completed => show All done  
        resultHead.textContent = "All done!"
    }
    // display the result body (only show 0 as minimun)
    score = Math.max(0,secondLeft);
    resultMain.textContent = "Your final score is " + score;
    // after the submit button is press => go to get player initial (function 18)
    resultSubmit.addEventListener("click", getPlayerInitial) 
}

// function 15 - display the message for the input
function displayMessage(type, message) {
    resultMessage.textContent = message;
    resultMessage.setAttribute("class", type);
}

// function 16 - store the result to local storage
function saveToLocal(){
    localStorage.setItem("playerResultArray", JSON.stringify(playerResultArray));
}

// function 17 - load the previous data from local storage
function loadFromLocal(){
    var storedResult = JSON.parse(localStorage.getItem("playerResultArray"));
    if (storedResult !== null) {
        playerResultArray = storedResult;

    }
}

// function 18 - get the initial from the player
function getPlayerInitial(){
    event.preventDefault();  
    // create an object to store the result
    var playerResult = {
        playerinitial :resultInput.value.trim(),
        playerScore : score,
    };
    // make sure the player enter some strings inside the text box
    // if it is not blank
    if (playerResult.playerinitial !== ""){
        // load the result from local storage
        loadFromLocal();
        // display the success message
        displayMessage("successResultMessage","Thanks for playing");
        // add the initial and result to the playerResultArray
        playerResultArray.push(playerResult);
        // save the new array into the local storage (function 16)
        saveToLocal();
        // remove the event listener to freeze the button to add further result
        resultSubmit.removeEventListener("click", getPlayerInitial);
        // wait for half second and do the following action:
        // 1. hide the result body
        // 2. show high score body
        // 3. reset the input value and message to null
        setTimeout(function(){
            // hide the result body (function 11)
            hideResultBody();
            // show high score body (function 20)
            showHighScoreBody();
            // reset the result input as empty
            resultInput.value = ""; 
            // reset the resultMessage
            resultMessage.textContent =""; 
        },500); 
        } 
        // if nth enter => just display the message and nth to do
        else{
            displayMessage("errorResultMessage","Please input your initial");
        } 
}

// function 19 - hide the highscore body content
function hideHighScoreBody(){
    viewHighScoreBody.setAttribute ("style", "display:none;");
}

// function 20 - show the highscore body content
function showHighScoreBody(){
    // clear interval - stop counting down
    clearInterval(timeInterval);
    // ensure the question body is hidden (function 0)
    hideQuestionBody();
    // ensure the main body is hidden (function 2)
    hideMainBody();
    // build the score result body (function 21)
    showHighScoreList();
    // show the result body
    viewHighScoreBody.setAttribute ("style", "display:block;");
    // active the High Score Body button Lister (function 22)
    addHighScoreListererToMain();
}

// function 21 - load the highscore list to the body
function showHighScoreList(){
    // reset the table as empty
    highscoreTableBody.innerHTML ="";
    // hide the timer
    hidetimer();
    // load the result from local storage (function 17)
    loadFromLocal();
    // sort the array
    playerResultArray.sort(function(a,b){return b.playerScore - a.playerScore})
    // list out the highscorer from the array data
    for (k=0; k<playerResultArray.length; k++){
        // add an tr element name as tr for the adding a new table row
        var tr = document.createElement("tr"); 
        // add an th element name as th for the rank
        var th = document.createElement("th");
        // add an td element name as tr for the name
        var tdName = document.createElement("td");  
        // add an td element name as tr for the score
        var tdScore = document.createElement("td");  
        // add the text content and set the attribute for the rank
        th.textContent = k+1;
        th.setAttribute ("scope",'"row"');
        // add the text content (player name) for the tdName
        tdName.textContent = playerResultArray[k].playerinitial;
        // add the text content (score) for tdScore
        tdScore.textContent = playerResultArray[k].playerScore;
        // append the element to the table
        highscoreTableBody.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(tdName);
        tr.appendChild(tdScore);
    }
}

// function 22 - add event lisetner for showHightScore
function addHighScoreListererToMain(){
    // start the click event listener to proceed goback or clearHighScore function 
    // locate the goback button (button)
    var goBack = document.getElementById("goBack");
    // locate the clear result button (button) 
    var clearRecord = document.getElementById("clearRecord");
    goBack.addEventListener("click", initpage);
    clearRecord.addEventListener("click", clearHighScoreHistory);
}

// function 23 - clear the past history and redisplay the list
function clearHighScoreHistory(){
    event.preventDefault();
    // load the data from local storage (function 17)
    loadFromLocal();
    // set the array as empty
    playerResultArray=[];
    // save the data to local storage (function 16)
    saveToLocal();
    // re-render the high score table
    showHighScoreList();
}

// fuction 24 - hide the timer
function hidetimer(){
    timer.setAttribute ("style", "display:none;");
}

// show the timer
function showtimer(){
    // clear interval - stop counting down
    clearInterval(timeInterval);
    timer.setAttribute ("style", "display:block;");
    // make sure the display time is 0 
    timer.textContent = "Time : 0";
}