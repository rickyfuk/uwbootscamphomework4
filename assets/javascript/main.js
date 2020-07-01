// locate the main body
var mainBody = document.getElementById("initialBody");
// locate the question body
var questionBody =  document.getElementById("questionBody");
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
var secondLeft = 100;
// add a paragraph p element name as feedback
var feedback = document.createElement("p");
// add an list element name as li
var feedbackli = document.createElement("li");

// default setting
// hide question (function 0)
hideQuestionBody();

// when the start quiz button pressed run:
// 1.function startQuiz (function 1)
// 2.function addListerertoMain (function 9)
startQuizBtn.addEventListener("click", startQuiz); 
addListererToMain();


// function 0 - hide the question content
function hideQuestionBody(){
    questionBody.setAttribute ("style", "display:none;");
}

// function 1 - start game
function startQuiz(){
    // clear the first page (function 2)
    clearMainBody();
    // start the countdown (function 8)
    countSecondLeft();
    // set time interval for every 1 sec to run function 8 once 
    timeInterval = setInterval(countSecondLeft,1000);
    currentQues = 0;
    // show the question (function 3)
    showQuestionBody();
    // show the question content (function 4)
    nextQuestion();
}

// function 2 - hide the body content
function clearMainBody(){
    mainBody.setAttribute ("style", "display:none;");
}

// function 3 - show the question content
function showQuestionBody(){
    questionBody.setAttribute ("style", "display:block;");
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

// function 7 - find the user choice and check if it is correct
function chooseAns(){
    var userChoice = event.target.textContent;
    var correctAns = questions[currentQues].answer;
    // if the selection from user same as the correct answer
    if (userChoice === correctAns){
            console.log("true case have been run") // can delete when complete (checking)
            feedback.textContent = "Correct"
            // run the feedback function (function 10)
            returnFeedback();
            return;
    }
    else {
            console.log("false case have been run") // can delete when complete (checking)
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

    if (secondLeft <= 0 || currentQues>4){
        clearInterval(timeInterval);
        // hideQuestionBody();
        // showMainBody();
        // add a function to display the result
        // displayResult ();
    }
}

// function 9 - add lisetner
function addListererToMain(){
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
    setTimeout(addListererToMain,500);
}