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

Please visit [https://rickyfuk.github.io/uwbootscamphomework3/](https://rickyfuk.github.io/uwbootscamphomework3/) for the site.

For the feature of the site, please visit the [Features](#features) section for more details.

# Screenshots
![screenshot](https://github.com/rickyfuk/uwbootscamphomework3/blob/master/assets/image/passwordGeneratorScreenshot.PNG?raw=true)

# Features
In this project, the following features have apply to the site:

1. Favicon have been added for the page
2. A password will be generated and display on the password box once the "Password Generator" button is clicked and the folloing questions are answered
   1. How many characters do you need? (must between 8 to 128 characters) 
      * The generator will stop working if the answer is not a number or not between 8 to 128
   2. Does your password need any number? 
   3. Does your password need any capatial letter?
   4. Does your password need any lower case letter?
   5. Does your password need any special character?
      * For question 2-5, the questions will pop up in a "OK/Cancel" box. ("OK" means yes // "Cancel" means no) 
3. The password will be copied in clipboard once the "Copy to Clipboard" button is clicked
4. The title "Generate A Password" will be change according to screen size as the table below:
   
    |   Screen Size   |          Layout           |
    |   :----------:    |   :-----------------------:  |
    |   Below Med   |   Center of the Generator   |
    |   Equal or Above Med   |   Left side of the generator   |

5.  The button layout will be change according to screen size as the table below:
   
    | Screen Size  |               Layout               |
    | :----------: | :--------------------------------: |
    |  Below Med   |   Two buttons stack vertically   |
    |   Equal or Above Med   |   Two buttons lays horizontally   |

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
  4. Google font
        * Encode Sans Expanded
        * Questrial
        * Cousine
  5. JavaScript

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