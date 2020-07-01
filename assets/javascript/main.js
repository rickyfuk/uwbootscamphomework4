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


hideQuestionBody();
startQuizBtn.addEventListener("click", startQuiz); 
addListererToMain();


// function 0 - hide the question content
function hideQuestionBody(){
    questionBody.setAttribute ("style", "display:none;");
}

// function 1 - start game
function startQuiz(){
    clearMainBody();
    countSecondLeft();
    timeInterval = setInterval(countSecondLeft,1000);
    currentQues = 0;
    showQuestionBody();
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

// function 4 - set up for the next question
function nextQuestion(){
    resetQuestion();
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
            returnFeedback();
            return;
    }
    else {
            console.log("false case have been run") // can delete when complete (checking)
            feedback.textContent = "Wrong! The correct answer is " + questions[currentQues].answer;
            returnFeedback();
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
        choiceList.addEventListener("click", chooseAns);
        choiceList.addEventListener("click", function(){
            setTimeout(function(){
            nextQuestion();
            },1000);
        });
}

// function 10 - return the answer feedback to the user
function returnFeedback(){
    choiceList.appendChild(feedbackli);
    feedbackli.appendChild(feedback);
    currentQues++;
    choiceList.removeEventListener("click", chooseAns);
    setTimeout(addListererToMain,1000);
}