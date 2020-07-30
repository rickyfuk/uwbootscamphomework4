// default setting (the first time when the page runs)
// hide question body (questionJS - function qJS 8)
hideQuestionBody();
// hide result body (scoreResultJS - function sRJS 5)
hideResultBody();
// hide highscore body (viewHighscoreJS - function vHJS 4)
hideHighScoreBody();
// show main body (function 4)
showMainBody();
// show timer (function 6)
showtimer();
// run function startQuiz (function 1) when the start quiz button pressed run
startQuizBtn.addEventListener('click', startQuiz);
// active the view highscore button to to go show High score body (viewHighscoreJS - function vHJS 5)
highScorePageBtnMain.addEventListener('click', showHighScoreBody);

// function 0 - return to intial page (landing page)
function initpage() {
	// default setting
	// hide question body (questionJS - function qJS 8)
	hideQuestionBody();
	// hide result body (scoreResultJS - function sRJS 5)
	hideResultBody();
	// hide highscore body ((viewHighscoreJS - function vHJS 4)
	hideHighScoreBody();
	// show main body (function 4)
	showMainBody();
	// show timer (function 6)
	showtimer();
	// run function startQuiz (function 1) when the start quiz button pressed run
	startQuizBtn.addEventListener('click', startQuiz);
	// active the view highscore button to to go show High score body (viewHighscoreJS - function vHJS 5)
	highScorePageBtnMain.addEventListener('click', showHighScoreBody);
}

// function 1 - start game
function startQuiz() {
	// hide the landing page (function 3)
	hideMainBody();
	// generate the question from the corresponding question pool (questionPoolJS - function 2)
	// (e.g. Javascript => jsquestionPool)
	generateQuestion();
	// set the countdown time (default as 75)
	secondLeft = 75;
	// start the countdown (function 2)
	countSecondLeft();
	// set time interval for every 1 sec to run the countdown function (function 2) once
	timeInterval = setInterval(countSecondLeft, 1000);
	currentQues = 0;
	// show the question (questionJS - function qJS 1)
	showQuestionBody();
}

// function 2 - counts second left
function countSecondLeft() {
	secondLeft--;
	timer.textContent = 'Time : ' + Math.max(0, secondLeft);
	// when time is up or no more question
	if (secondLeft <= 0 || currentQues > numOfQuestion - 1) {
		// clear interval - stop counting down
		clearInterval(timeInterval);
		// hide the question body (questionJS - function qJS 8)
		hideQuestionBody();
		// show the result body (scoreResultJS - function sRJS 1)
		showResultBody();
	}
	// else continue to count down (no action)
}

// function 3 - hide the body content
function hideMainBody() {
	mainBody.setAttribute('style', 'display:none;');
}

// function 4 - show the body content
function showMainBody() {
	mainBody.setAttribute('style', 'display:block;');
}

// function 5 - hide the timer
function hidetimer() {
	timer.setAttribute('style', 'display:none;');
}

// function 6 - show the timer
function showtimer() {
	// clear interval - stop counting down
	clearInterval(timeInterval);
	timer.setAttribute('style', 'display:block;');
	// make sure the display time is 0
	timer.textContent = 'Time : 0';
}
