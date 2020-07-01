// locate the timer section
var timer = document.getElementById("timer");
// set a var for timeInterval as novalue to stop the function
var timeInterval;
// the initial second count (should be 75)
var secondLeft = 15;
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
var currentQues = 0; 
// locate the user choice for the questions
var userChoice = document.getElementsByClassName("userChoice");
// an array to store the return item;
var ansReturn = [];


// function 1 - counts second left
function countSecondLeft (){
    secondLeft--;
    // add an function to find out the question true/false
    // if false, then secondLeft = secondLeft - 10;
    timer.textContent = "Time : " + secondLeft;

    if (secondLeft <= 0 || currentQues>4){
        clearInterval(timeInterval);
        // hideQuestionBody();
        // showMainBody();
        // add a function to display the result
        // displayResult ();
    }
    else {
        questionLoop();
        choiceList.addEventListener("click",checkAnswer)
        i++;
    }
}

// function 2 - execute time interval 
// function countDownExecute(){
//     timeInterval = setInterval(countSecondLeft,1000);
// }

// function 3 - display the question and get the result
function questionLoop(){
        console.log("questionloop is running");
        // if(i<5 && secondLeft>0)
        clearQuestionContent();
        // console.log(i);
        addQuestion(currentQues);
        showQuestionBody();
        // checkAnswer(i); 
        // console.log(ansReturn); 
    
}

// function 3.1 - add the question content
function addQuestion(i){
        // add the question number on the question heading
        questionNum.textContent = "Question " + (currentQues+1);
        // add the question title content
        questionTitle.textContent = questions[currentQues].title;
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

// function 3.2 - check the user response 
function checkAnswer(){
    // when an element is selected from the list
        var userSelect = event.target;
        // If that element is a button...
         if (userSelect.matches("button")){
             // add a paragraph p element name as feedback
             var feedback = document.createElement("p");
             // add an list element name as li
             var li = document.createElement("li");
             console.log("enter checkanswer");
             console.log(i);
             // check if the selection match with the correct answer
            if (userSelect.textContent === questions[i].answer){
                console.log("true case have been run")
                feedback.textContent = "Correct"
                choiceList.appendChild(li);
                li.appendChild(feedback);
                ansReturn[0] = i++;
                ansReturn[1] = true;
                return ansReturn;
            }
            else {
                console.log("false case have been run")
                feedback.textContent = "Wrong! The correct answer is " + questions[i].answer;
                choiceList.appendChild(li);
                li.appendChild(feedback);
                ansReturn[0] = i++;
                ansReturn[1] = false;
                return ansReturn;
            }
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
function hideQuestionBody(){
    questionBody.setAttribute ("style", "display:none;");
}

// function 7 - show the question content
function showQuestionBody(){
    questionBody.setAttribute ("style", "display:block;");
}

// function 8 - clear the previous question content
function clearQuestionContent(){
    // clear the question heading
    questionNum.textContent = "";
    // clear the question title content
    questionTitle.textContent = "";
    //clear the answer choice
    choiceList.innerHTML = "";
}


hideQuestionBody();
// After the start quiz button is clicked
// exectue function countDownExecute
startQ.addEventListener("click",function(event){
    event.preventDefault();
    clearMainBody();
    // questionLoop();
    countSecondLeft();
    timeInterval = setInterval(countSecondLeft,1000);
}
)

console.log(startQ);
console.log(questions[1].title);
console.log(choiceList);