var questionsPool = [
    {
      title: 'What is CSS stand for?',
      choices: ['Code Style Sector', 'Cost Saving Standard', 'Cascading Style Sheets', 'none of the above'],
      answer: 'Cascading Style Sheets'
    },
    {
      title: 'Which of the following is NOT CSS able to do',
      choices: ['change text color', 'change background color', 'change text font', 'add a paragraph'],
      answer: 'add a paragraph'
    },
    {
      title: 'Which of the following is/are CSS able to do',
      choices: ['change the width of the image', 
                'change the line height', 
                'change the font size', 
                'all of the above'],
      answer: 'all of the above'
    },
    {
      title: 'Where in an HTML document is the correct place to refer to an external style sheet?',
      choices: ['head section', 
                'body section', 
                'end of the body', 
                'none of the above'],
      answer: 'head section'
    },
    {
      title: 'Which HTML tag is used to define an internal style sheet?',
      choices: ['<css>', 
                '<style>', 
                '<ul>', 
                'none of the above'],
      answer: '<style>'
    },
    {
      title: 'How do you insert a comment in a CSS file?',
      choices: ['// comment', 
                '// comment //', 
                '/* comment */', 
                '( comment )'],
      answer: '/* comment */'
    },
    {
      title: 'Which property is used to change the background color?',
      choices: ["background-color", 
                'bg-color', 
                "color", 
                'none of the above'],
      answer: 'background-color'
    },
    {
      title: 'Which CSS property is used to change the text color of an element?',
      choices: ['color', 
                'font-color', 
                'text-color', 
                'none of the above'],
      answer: 'color'
    },
    {
      title: 'Which CSS property controls the text size?',
      choices: ['size', 
                'font-size', 
                'text-size', 
                'none of the above'],
      answer: 'font-size'
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
  