var questionsPool = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts'
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses'
    },
    {
      title: 'What is the return value for "length()"',
      choices: ['the index of the value in an array', 
                'the length of the string', 
                'the last element from an object', 
                'all of the above'],
      answer: 'the length of the string'
    },
    {
      title: 'What are the variable naming conventions in JavaScript?',
      choices: ['no JavaScript reserved keyword', 
                'not start with a numeral (0-9)', 
                'case sensitive', 
                'all of the above'],
      answer: 'all of the above'
    },
    {
      title: 'What would be the result of console.log(2+5+”3″) ?',
      choices: ['73', 
                '10', 
                '253', 
                'none of the above'],
      answer: '73'
    },
    {
      title: 'Which of the following is NOT a looping structures in Javascript ?',
      choices: ['if', 
                'for', 
                'while', 
                'do-while'],
      answer: 'if'
    },
    {
      title: 'Undefined value means the',
      choices: ["Variable used in the code doesn't exist", 
                'Variable is not assigned to any value', 
                "Property doesn't exist", 
                'all of the above'],
      answer: 'all of the above'
    },
    {
      title: 'Which is not a type of Pop up boxes available in JavaScript?',
      choices: ['Alert', 
                'Confirm', 
                'Div', 
                'Prompt'],
      answer: 'Div'
    },
    {
      title: 'What boolean operators can be used in JavaScript?',
      choices: ['&&', 
                '=', 
                '||', 
                '!'],
      answer: '='
    }
]

var numOfQuestion = 5; 
var tempNumArray = [];

// function 0 - generate a random number
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

// function 2 - random 5 non-repetitive number between 0 to the max number of question
function generateNonRepNum(){
  for  (var i=0;i<numOfQuestion;i++){
    var tempNum = getRandomInt(questionsPool.length);
    if (tempNumArray.indexOf(tempNum)===-1){
      tempNumArray.push(tempNum);
    } 
    else {
      i--;
    }
  } 
}

// function 1 - generate the questions from questions pool
function generateQuestion(){
    var questions = [];
  generateNonRepNum();
  for (var i=0; i<numOfQuestion;i++){
    questions[i] = questionsPool[tempNumArray[i]];
  }
  tempNumArray=[];
}


