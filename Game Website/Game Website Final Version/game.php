<?php
    //This is the php code which is linking to this file. 
    include('output.php'); 

    //This fucntion outputs the top html content.
    outputTop("Game");

    //This fucntion outputs the Banner & Navigation-Bar.
    outputBannerNavigation("Game");
?>


<!-- Game -->
<div class="game-row">
    <!-- This row contains game information -->
    <div class="game-column-1">
        <h2>How to play the game?</h2>
        <h3>Follow these instructions below to see how to play the game. Use game tips given below:</h3>
        <p>1.) Click on a textbox to enter your answers.</p>
        <p>2.) Look at the given images provided for some questions.</p>
        <p>3.) Try spending 1 minute per question.</p>
        <p>4.) To restart refresh your page.</p>
        <p>You will recive a final score once the game ends.</p>
        <div class="submissionOfQuiz">
            </br>
            <h2>Scores:</h2>
            <p id ="correctScores"></p>
        </div>
    </div>
    <!-- This row contains the game window -->
    <div class="game-column-2">
        <center>
            <h1>Game - Top Quiz</h1>
        </center>
        <div class="gamearea">
            <form id = "top-quiz" name="top-quiz">
                <p>Q1: What is the month after November?</p>
                    <input id="answerbox1" type="text" name="Q1"></br></br>
                <p id="correctionQ1"></p>
                <p>Q2: What is 11 x 15 equal to?</p>
                    <input id="answerbox2" type="text" name="Q2"></br></br>
                <p id="correctionQ2"></p>
                <p>Q3: What is the capital city of USA?</p>
                    <input id="answerbox3" type="text" name="Q3"></br></br>
                <p id="correctionQ3"></p>
                <p>Q4: How many days does Febuary have in a leap year?</p>
                    <input id="answerbox4" type="text" name="Q4"></br></br>
                <p id="correctionQ4"></p>
                <p>Q5: What is half of 50?</p>
                    <input id="answerbox5" type="text" name="Q5"></br></br>
                <p id="correctionQ5"></p>
                <p>Q6: What is the double of the number 8?</p>
                    <input id="answerbox6" type="text" name="Q6"></br></br>
                <p id="correctionQ6"></p>
                <p>Q7: What is the number of total days in a year?</p>
                    <input id="answerbox7" type="text" name="Q7"></br></br>
                <p id="correctionQ7"></p>
                <p>Q8: Looking at this picture below, how many letters does in contain?</p>
                    <input id="answerbox8" type="text" name="Q8"></br></br>
                <p id="correctionQ8"></p>
                <canvas id="myCanvasQ8" width="300" height="200" style="border:1px solid grey; background-color:pink;"></canvas>
                <p>Q9: Looking at this picture below, What is it?</p>
                    <input id="answerbox9" type="text" name="Q9"></br></br>
                <p id="correctionQ9"></p>
                <canvas id="myCanvasQ9" width="300" height="200" style="border:1px solid grey; background-color:maroon;"></canvas>
                <p>Q10: How many dots does this picture contain below?</p>
                    <input id="answerbox10" type="text" name="Q10"></br></br>
                <p id="correctionQ10"></p>
                <div id="guidenceQ10">
                    <img src="img/img1.jpg" alt="Image-1" width="300" height="200">
                </div></br></br></br>
                <input id ="btnSubmit" class="submit-button" type ="button" value ="Submit" onclick="markQuiz();">
                <!-- Once the submit button is pressed then by the function markQuiz(), the game checks the answers,
                displays the score and adds the score to the user array and using that array the score is displayed
                on the scores list table. -->
            </form>
        </div>
    </div>
</div>


<!-- This is the external Javascript code which links to the Javascript code for the game -->
<script src="js\game.js"></script>


<script>


// Start of Image Guidence for Question 8

//This gets the canvas id fromt the html and assigns it to a varible.
let CanvasQ8 = document.getElementById("myCanvasQ8");

//This gets the canvas context and assigns it to the varible.
let text = CanvasQ8.getContext("2d");

//the font and size of the text insdie the canvas.
text.font = "30px Arial";

//The colour of the text
text.fillStyle = "orange";

//The text inside the canvas with the size
text.fillText("What is your name?",20,110,);   

// End of Image Guidence for Question 8


//Start of Image Guidence for Question 9

//This gets the canvas id fromt the html and assigns it to a varible.
let CanvasQ9 = document.getElementById("myCanvasQ9");

//This gets the canvas context and assigns it to the varible.
let shapeTriangle = CanvasQ9.getContext("2d");

//This sets the backgorund colour of the triangle inside the canvas.
shapeTriangle.fillStyle = "turquoise";

//This is used at the start for drawing the triangle.
shapeTriangle.beginPath();

//These are used for locating the while triangle shape inside the canvas.
shapeTriangle.moveTo(120,176);

//These two lines of code control both lines of the shape such as the height and width of both lines. 
shapeTriangle.lineTo(180,90);
shapeTriangle.lineTo(86,25);

//This adds the triangle onto the canvas.
shapeTriangle.fill();

//End of Image Guidence for Question 9


</script>

<?php

    //This function is being called for adding the breaks.
    includeBreaks();
    includeBreaks();

?>


<?php

    //This is used for outtputting the footer bar at the bottom of the webpage.
    outputFooterBar();

    //This is used for outputting the bottom html content.
    outputFooter();

?>