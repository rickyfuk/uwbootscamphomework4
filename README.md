# Project Name 
Homework 4 - Code Quiz

# Table of contents
- [Project Name](#project-name)
- [Table of contents](#table-of-contents)
- [General info](#general-info)
- [Screenshots](#screenshots)
- [Features](#features)
- [Code Style](#code-style)
  - [<span style="color: rgb(220, 105, 1);"> Description for the code</span>](#description-for-the-code)
- [Technology](#technology)
- [Code Example](#code-example)
- [Test](#test)
- [Status](#status)
- [Future Plan](#future-plan)
- [Create By](#create-by)

# General info
This project is to bulid a timed quiz on the web development tools fundamentals.  

This project consists of the following 4 parts:
1. index.html file for the landing page of the following 4 areas:
   1. Javascript
   2. CSS
   3. HTML
   4. Bootstrap
   An seperated html files has been assinged to each area.
2. two local CSS files for styling the entire application:
   1. reset.css - to reset all the styling setting
   2. style.css - to add the style to this generator 
3. 13 javascript file has been composed for this application:
    | File name  |               Description               |   Applied to the Quiz of  |
    | :----------: | :--------------------------------: |   :----------:    |
    |  main.js    |   The script for the landing page of each html file    |   Javascript/CSS/HTML/Bootstrap
    |  globalvar.js  |   store all the global variables   |   Javascript/CSS/HTML/Bootstrap |
    | questionJS.js  |  the function for the question body  | Javascript/CSS/HTML/Bootstrap |
    |  scoreResultJS.js  |   the function for the Result body  | Javascript/CSS/HTML/Bootstrap |
    |  viewHighscoreJS.js  |   the function for the View HighScore body  | Javascript/CSS/HTML/Bootstrap |
    |  bootstrapquestionPool.js   |   store and generate the questions for quiz  | Bootstrap  |
    |  bslocalStroage.js   |   the fuction to save and load the highscore list | Bootstrap  |
    |  cssstrapquestionPool.js   |   store and generate the questions for quiz  | CSS  |
    |  csslocalStroage.js   |   the fuction to save and load the highscore list | CSS  |
    |  htmlquestionPool.js   |   store and generate the questions for quiz  | HTML  |
    |  htmllocalStroage.js   |   the fuction to save and load the highscore list | HTML  |
    |  jsquestionPool.js   |   store and generate the questions for quiz  | Javascript  |
    |  javascriptlocalStroage.js   |   the fuction to save and load the highscore list | Javascript  |

Please visit [https://rickyfuk.github.io/uwbootscamphomework4/](https://rickyfuk.github.io/uwbootscamphomework4/) for the site.

For the feature of the site, please visit the [Features](#features) section for more details.

# Screenshots
![screenshot](https://github.com/rickyfuk/uwbootscamphomework4/blob/master/assets/image/screenshot.PNG?raw=true)

# Features
In this project, the following features have apply to the site:

1. Favicon have been added for the page
2. 4 Different Quizes for the player to choose:
   1. Javascript
   2. CSS
   3. HTML
   4. Bootstrap
   Player can choose the quiz by clikcing the button
3. The player can have the following 3 options after they enter the landing page of the quiz
   1. "Start Quiz" - go ahead to start the quiz
   2. "View Highscore" - go to highscore page for the highscore table
   3. "Main Menu" - return to the main menu for the Quiz options
   
    Note : The button will change the layout regarding to the following screensize

    |   Screen Size   |          Layout           |
    |   :----------:    |   :-----------------------:  |
    |   Below Large   |   The buttons stack vertically   |
    |   Equal or Above Large   |   The button stack horizontally  |

4. When the player choose the answer, the following features will 
   1. A sound effect will come with the correct or wrong answer after the player pick an answer

   2.  The following message will appear under the choice after the player pick an answer
       * "Correct" - when the answer is True
       * "Wrong! The correct answer is XXXXX " - when the answer is False (XXXXX indicate the right answer)

5. A "View Highscore" button located on the right bottom of the page - player can visit the Highscore table at anytime during the quiz and the quiz will stop
6. An "All Done" message will pop up after all question is answered
    <div>
    <img src="https://github.com/rickyfuk/uwbootscamphomework3/blob/master/assets/image/Captureofdescription.PNG?raw=true" alt="All Done Message sample">
    *example for the "All Done" message*
    </div>


# Code Style
Standard

## <span style="color: rgb(220, 105, 1);"> Description for the code</span>
A general description for the every section on the top of the code to breifly explain the puopose of that section and some note for the section details.

  <div>
  <img src="https://github.com/rickyfuk/uwbootscamphomework3/blob/master/assets/image/Captureofdescription.PNG?raw=true" alt="Description Example">
  *example for the section description*
  </div>

# Technology
The following technology have been used for this project:

  1. HTML
  2. CSS
  3. Bootstrap (Version 4.5)
  4. JavaScript

# Code Example
Below are some example for the code has been used and the corresponding outcome:

1. A if statement to exclude the undesired result: (below is the example for the question for the number character requirment according to the user requirment)
    ```Javascript
            if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
                alert("Please enter a number between 8 to 128 only"); 
                return;
            }
    ```
2. A function for generating a random number while generating a password:
   * An arguement "max" must be included while the function executed
    ```Javascript
        function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    ```
3.  Clear previous result function will be executed before the rest of the function to generate the password is being run.
    * "passwordArray" is an array to store every character that generated by a random fuction
    * "password" is the string for returning all the character from "passwordArray"
    * "fullChatArray" is the array to keep all the characters where the user selected from any of the following four character type: 
        1. Number
        2. Capital Letter
        3. Lowercase Letter
        4. Special Character
    ```Javascript
        function clearPreviousResult(){
        passwordArray = [];
        password = "";
        fullChatArray = []; 
       }
    ```
4. To get the response from html and return the result, "getElementbyId" and "addEventListener" have been used:
   (In the html code, the id has been allocated with the button)
   ```Javascript
   // To execute command for "Generate Password" button
    document.getElementById("btnforpassword").addEventListener("click",displayTheResult);
    // To execute command for "Copy to Clipboard" button 
    document.getElementById("btnforclipboard").addEventListener("click",copyToClipboard); 
    ```
    ```html
    <button class="btn btn-primary px-4 py-2" id="btnforpassword">Generate Password</button>

    <button class="btn btn-primary px-4 py-2" id="btnforclipboard">Copy to clipboard</button>
    ```

# Test
1. The site have been tested by open with small/medium/large device respectively.
2. The site have been tested by a HTML validation service - [W3C](https://validator.w3.org/)

# Status
Project status: finished

# Future Plan

Plan for the future development of this site:
1. Add the password setup section under the generation instead of prompting the question
2. Add the list of past 10 previous password genterated by this generator 

# Create By
Created by Chung Hei Fuk