var questionsPool = [
    {
      title: 'which approach is Bootstrap taking ',
      choices: ['Computer first approach', 'Design first approach', 'Mobile first approach', 'Mobile last approach'],
      answer: 'Mobile first approach'
    },
    {
      title: 'Bootstrap Responsive design adjust to',
      choices: ['Desktop', 'Tablet', 'Mobile', 'All of the above'],
      answer: 'All of the above'
    },
    {
      title: 'Which is/are Contextual classes of table in Bootstrap?',
      choices: ['.active', 
                '.success', 
                '.danger', 
                'all of the above'],
      answer: 'all of the above'
    },
    {
      title: 'Which one is a feature of the Bootstrap Grid System?',
      choices: ['scale upto 12 coloums in a row', 
                'scale upto 18 coloums in a row', 
                'scale upto 24 coloums in a row', 
                'none of the above'],
      answer: '12 coloums in a row'
    },
    {
      title: 'Which class is used for basic button group?',
      choices: ['.btn-style', 
                '.btn-group', 
                '.btngroup', 
                'none of the above'],
      answer: '.btn-group'
    },
    {
      title: 'How will you create a bootstrap panel with footer',
      choices: ['.footer', 
                '.footer-panel', 
                '.panel-footer', 
                'none of the above'],
      answer: '.panel-footer'
    },
    {
      title: 'What is the most essential thing to do while using Bootstrap',
      choices: ["Add the bootstrap link inside the head section", 
                'Remove the local CSS file', 
                "Empty the HTML file", 
                'all of the above'],
      answer: 'Add the bootstrap link inside the head section'
    },
    {
      title: 'What function you can use to wrap a page content?',
      choices: ['.container', 
                '.main', 
                '.body', 
                '.div'],
      answer: '.container'
    },
    {
      title: 'Which of the following is NOT a grid classes in Bootstrap?',
      choices: ['lg', 
                'md', 
                'sl', 
                'xs'],
      answer: 'sl'
    }
  ]
  
  var numOfQuestion = 5; 
  var tempNumArray = [];
  var questions = [];
  
  // function 0 - generate a random number
  function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
  };
  
  // function 1 - random 5 non-repetitive number between 0 to the max number of question
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
  
  // function 2 - generate the questions from questions pool
  function generateQuestion(){
    questions = [];
    generateNonRepNum();
    for (var i=0; i<numOfQuestion;i++){
      questions[i] = questionsPool[tempNumArray[i]];
    }
    tempNumArray=[];
  }
  