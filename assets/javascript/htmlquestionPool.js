var questionsPool = [
    {
      title: 'How many HTML heading levels are there?',
      choices: ['1', '4', '6', '12'],
      answer: '6'
    },
    {
      title: 'What is the name of the metadata that allows you to set a value of initial-scale=2, causing a page to zoom to twice its natural size?',
      choices: ['viewport', 'stylesheet', 'script', 'link'],
      answer: 'viewport'
    },
    {
      title: 'Which is latest version of HTML?"',
      choices: ['HTML2', 
                'HTML3', 
                'HTML4', 
                'HTML5'],
      answer: 'HTML5'
    },
    {
      title: 'Basic Construction of an HTML Page does NOT include',
      choices: ['<span>', 
                '<!DOCTYPE html>', 
                '<head> ', 
                '<body> '],
      answer: '<span>'
    },
    {
      title: 'What is the tag for adding tables in HTML ?',
      choices: ['<p>', 
                '<div>', 
                '<ul>', 
                '<table>'],
      answer: '<table>'
    },
    {
      title: 'What is the tag for adding a list in HTML ?',
      choices: ['<p>', 
                '<li>', 
                '<list>', 
                '<table>'],
      answer: '<li>'
    },
    {
      title: 'What is the correct HTML for adding a background color?',
      choices: ["Cannot change the color in HTML", 
                '<background="yellow";>', 
                '<body style="background-color:yellow;">', 
                'all of the above'],
      answer: '<body style="background-color:yellow;">'
    },
    {
      title: 'Which character is used to indicate an end tag?',
      choices: ['/', 
                '<', 
                '*', 
                '&'],
      answer: '/'
    },
    {
      title: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
      choices: ['title', 
                'src', 
                'href', 
                'alt'],
      answer: 'alt'
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
  