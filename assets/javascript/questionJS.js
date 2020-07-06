// function qJS 1 - show the question content
function showQuestionBody(){
    // hide the landing page (main - function 3)
    hideMainBody();
    // hide result body (scoreResultJS - function sRJS 5)
    hideResultBody();
    // hide highscore body (viewHighscoreJS - function vHJS 4)
    hideHighScoreBody();
    // active the choice button eventListener (function qJS 6)
    addChoiceListererToMain();
    // display the question body
    questionBody.setAttribute ("style", "display:block;");
    // show the question content (function qJS 2)
    nextQuestion();
}

// function qJS 2 - set up for the next question content
function nextQuestion(){
    // clear all the previous quesions content and choice (function qJS 3) 
    resetQuestion();
    // build the question content (function qJS 4)
    questionBuilder(currentQues);
}

// function qJS 3 - reset the question content
function resetQuestion(){
    // clear the question heading
    questionNum.textContent = "";
    // clear the question title content
    questionTitle.textContent = "";
    //clear the answer choice
    choiceList.innerHTML = "";
}
// function qJS 4 - bulid in the content to the question
function questionBuilder(questionCount){
    if (questionCount<numOfQuestion){
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

// function qJS 5 - find the user choice and check if it is correct
function chooseAns(){
    var userChoiceEle = event.target;
    var userChoice = event.target.textContent;
    var correctAns = questions[currentQues].answer;
    var correctSound = document.getElementById("correctAnsAudio");
    var wrongSound = document.getElementById("wrongAnsAudio");
    // only run when the user select the list item
    if(userChoiceEle.matches("button") === true){
        // if the selection from user same as the correct answer
        if (userChoice === correctAns){
                feedback.textContent = "Correct"
                // play correct sound effect
                correctSound.play();
                // run the feedback function (function qJS 7)
                returnFeedback();
                return;
        }
        else {
                feedback.textContent = "Wrong! The correct answer is " + questions[currentQues].answer;
                // play wrong sound effect
                wrongSound.play();
                // run the feedback function (function qJS 7)
                returnFeedback();
                // reduce the time with 10 seconds
                return secondLeft -= 10; 
        }
    }
}

// function qJS 6 - add event lisetner for showQuestionBody
function addChoiceListererToMain(){
    // activate the view high score button (viewHighscoreJS - function vHJS 5)
    highScorePageBtnChoice.addEventListener("click",showHighScoreBody);
    // start or resume the click event listener to proceed with chooseAns function (function qJS 5)
    choiceList.addEventListener("click", chooseAns);
    // start or resume the click event listener to proceed with next question
    // delay returning to the next question (function qJS 2)for half sec to read the correct / wrong response
    choiceList.addEventListener("click", function(){
        setTimeout(function(){
        nextQuestion();
        },500);
    });
}

// function qJS 7 - return the answer feedback to the user
function returnFeedback(){
choiceList.appendChild(feedbackli);
feedbackli.appendChild(feedback);
// add 1 to the question counter
currentQues++;
// freeze the click function (function qJS 5) and so the click will not active after the choice is made
choiceList.removeEventListener("click", chooseAns);
// return to addListenToMain function to resume the click event function (function qJS 6) after half sec
setTimeout(addChoiceListererToMain,500);
}

// function qJS 8 - hide the question content
function hideQuestionBody(){
    questionBody.setAttribute ("style", "display:none;");
}
