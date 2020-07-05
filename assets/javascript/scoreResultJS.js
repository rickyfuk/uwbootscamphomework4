// function sRJS 1 - show the result body content
function showResultBody(){
    // build the score result body (function sRJS 2)
    showScoreResult();
    // show the result body
    resultBody.setAttribute ("style", "display:block;");
}

// function sRJS 2 - set up the Result body content
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
    // after the submit button is press => go to get player initial (scoreResultJS - function sRJ 3)
    resultSubmit.addEventListener("click", getPlayerInitial) 
}


// function sRJS 3 - get the initial from the player
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
        // load the data from local storage (xxxxlocalStroageJS - function lSJS 2)
        // xxxx refer to the correpsonding html file (e.g. html => htmllocalStroageJS) 
        loadFromLocal();
        // display the success message (function sRJ 4)
        displayMessage("successResultMessage","Thanks for playing");
        // add the initial and result to the playerResultArray
        playerResultArray.push(playerResult);
        // save the data to local storage (xxxxlocalStroageJS - function lSJS 1) 
        // xxxx refer to the correpsonding html file (e.g. html => htmllocalStroageJS) 
        saveToLocal();
        // remove the event listener to freeze the button to add further result
        resultSubmit.removeEventListener("click", getPlayerInitial);
        // wait for half second and do the following action:
        // 1. hide the result body
        // 2. show high score body
        // 3. reset the input value and message to null
        setTimeout(function(){
            // hide the result body (function sRJS 5)
            hideResultBody();
            // show high score body (viewHighscoreJS - function vHJS 5)
            showHighScoreBody();
            // reset the result input as empty
            resultInput.value = ""; 
            // reset the resultMessage
            resultMessage.textContent =""; 
        },500); 
        } 
        // if nth enter => display the error message (function sRJ 4)
        else{
            displayMessage("errorResultMessage","Please input your initial");
        } 
}

// function sRJS 4 - display the message for the input
function displayMessage(type, message) {
    resultMessage.textContent = message;
    resultMessage.setAttribute("class", type);
}

// function sRJS 5 - hide the result body content
function hideResultBody(){
    resultBody.setAttribute ("style", "display:none;");
}

