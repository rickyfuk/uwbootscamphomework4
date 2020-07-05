// function vHJS 1 - load the highscore list to the body
function showHighScoreList(){
    // reset the table as empty
    highscoreTableBody.innerHTML ="";
    // hide the timer (main - function 5)
    hidetimer();
    // load the data from local storage (xxxxlocalStroageJS - function lSJS 2)
    // xxxx refer to the correpsonding html file (e.g. html => htmllocalStroageJS) 
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

// function vHJS 2 - add event lisetner for showHightScore
function addHighScoreListererToMain(){
    // start the click event listener to proceed goback or clearHighScore function 
    // locate the goback button (button)
    var goBack = document.getElementById("goBack");
    // locate the clear result button (button) 
    var clearRecord = document.getElementById("clearRecord");
    // set the click event as go back to main page (main - function 0)
    goBack.addEventListener("click", initpage);
    // set the click event to execute the clearHighScoreHistory function (function vHJS 3)
        // Note : the button will stay in focus status after click when it is a click function (due to chrome default features)
        // the walkaround is using mousedown and mouseup
    clearRecord.addEventListener("mousedown", clearHighScoreHistory);
    clearRecord.addEventListener("mouseup", function blurInput() {
        document.getElementById('clearRecord').blur();
      });
}

// function vHJS 3 - clear the past history and redisplay the list
function clearHighScoreHistory(){
    event.preventDefault();
    // load the data from local storage (xxxxlocalStroageJS - function lSJS 2)
    // xxxx refer to the correpsonding html file (e.g. html => htmllocalStroageJS) 
    loadFromLocal();
    // set the array as empty
    playerResultArray=[];
    // save the data to local storage (xxxxlocalStroageJS - function lSJS 1) 
    // xxxx refer to the correpsonding html file (e.g. html => htmllocalStroageJS)
    saveToLocal();
    // re-render the high score table (function vHJS 1)
    showHighScoreList();
    // remove the event listener
    clearRecord.removeEventListener("mousedown", clearHighScoreHistory);
}

// function vHJS 4  - hide the highscore body content
function hideHighScoreBody(){
    viewHighScoreBody.setAttribute ("style", "display:none;");
}

// function vHJS 5  - show the highscore body content
function showHighScoreBody(){
    // clear interval - stop counting down
    clearInterval(timeInterval);
    // ensure the question body is hidden (questionJS - function qJS 8)
    hideQuestionBody();
    // ensure the main body is hidden (function 3)
    hideMainBody();
    // build the score result body (viewHighscoreJS - function vHJS 1)
    showHighScoreList();
    // show the result body
    viewHighScoreBody.setAttribute ("style", "display:block;");
    // active the High Score Body button Lister (viewHighscoreJS - function vHJS 2)
    addHighScoreListererToMain();
}