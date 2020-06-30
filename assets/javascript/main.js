var timer = document.getElementById("timer");
// set a var for timeInterval as novalue to stop the function
var timeInterval;
// the initial second count (should be 75)
var secondLeft = 5;
// locate the main body
var mainBody = document.getElementById("initialBody");
// locate the "Start Quiz Button"
var startQ = document.querySelector("#startQuiz");
// locate the question body
var questionBody =  document.getElementById("questionBody");
// locate the question number (h1)
var questionNum = document.getElementById("questionNum");
// locate the question Title (p)
var questionTitle = document.getElementById("questionTitle");
// locate the choice list (ul)
var choiceList = document.getElementById("choiceList");
// i for question counter (default as 0)
var i = 0; 
// locate the user choice for the questions
var userChoice = document.getElementsByClassName("userChoice");
// checker for the true/false with the user response
var ansChecker = true ; 






// function 1 - counts second left
function countSecondLeft (){
    secondLeft--;
    // add an function to find out the question true/false
    // if false, then secondLeft = secondLeft - 10;
    timer.textContent = "Time : " + secondLeft;

    if (secondLeft === 0){
        clearInterval(timeInterval);
        // add a function to display the result
        // displayResult ();
    }
}

// function 2 - execute time interval 
function countDownExecute(){
    timeInterval = setInterval(countSecondLeft,1000);
}

// function 3 - display the question and get the result
function questionLoop(){

        addQuestion(i);
        showQuestionBody();
        checkAnswer(i);
        i++;
          
    

}

// function 3.1 - add the question content
function addQuestion(i){
    if (i<5){
        // add the question number on the question heading
        questionNum.textContent = "Question " + (i+1);
        // add the question title content
        questionTitle.textContent = questions[i].title;
        // add the answer choice
        for (j=0; j<questions[i].choices.length; j++){
            var li = document.createElement("li");
            var choiceBtn = document.createElement("button");
            // create a list item with a button inside for displaying the selection
            choiceBtn.textContent = questions[i].choices[j];    
            choiceBtn.setAttribute("class","userChoice mb-3 btn btn-outline-primary");            
            choiceList.appendChild(li);
            li.appendChild(choiceBtn);
        }
    }   
}

// function 3.2  - check the user response with the answer
function checkAnswer(i){
    // add eventListener for getting the user response
        // locate the user choice for the questions
        // var userChoice = document.getElementsByClassName("userChoice"); 
        for(k = 0; k < userChoice.length; k++) {
                userChoice[k].addEventListener("click",function(event) {matchResponseToAnswer(event,k,i)});
                userChoice[k].removeEventListener("click",function(event) {matchResponseToAnswer(event,k,i)});
        }
}

// check if the answer if ture or false
function matchResponseToAnswer(event,k,i){
    event.preventDefault();
    var userSelect = event.target;
    console.log(event);
    console.log(questions[i]);
    console.log(userSelect);
    // check if the selection is a button
    if (userSelect.matches("button") === true){
        // add a paragraph p element name as feedback
        var feedback = document.createElement("p");
        // add an list element name as li
        var li = document.createElement("li");
        // check if the selection match with the correct answer
        if (userSelect.textContent === questions[i].answer){
            feedback.textContent = "Correct"
        }
        else {
            feedback.textContent = "Wrong! The correct answer is " + questions[i].answer;

        }
    choiceList.appendChild(li);
    li.appendChild(feedback);
    }      
}



// function 4 - hide the body content
function clearMainBody(){
    mainBody.setAttribute ("style", "display:none;");
}

// function 5 - show the body content
function showMainBody(){
    mainBody.setAttribute ("style", "display:block;");
}

// function 6 - hide the question content
function clearQuestionBody(){
    questionBody.setAttribute ("style", "display:none;");
}

// function 7 - show the question content
function showQuestionBody(){
    questionBody.setAttribute ("style", "display:block;");
}


clearQuestionBody();
// After the start quiz button is clicked
// exectue function countDownExecute
startQ.addEventListener("click",function(event){
    event.preventDefault();
    clearMainBody();
    countDownExecute();
    questionLoop();
}
)

console.log(startQ);
console.log(questions[1].title);
console.log(choiceList);