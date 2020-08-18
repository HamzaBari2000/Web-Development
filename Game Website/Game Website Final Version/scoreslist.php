<?php
    
    //This is the php code which is linking to this file. 
    include('output.php');

    //This fucntion outputs the top html content.
    outputTop("Scores List");

    //This fucntion outputs the Banner & Navigation-Bar.
    outputBannerNavigation("Scores List");

?>

<!-- Rankings -->
<!-- This is the box where the rankings title & table is placed -->
<div class="rankings-box">
    <div class="Rankings-Table">
        <!--This is the Title of the Rankings Form -->
        <h1 class="ranking-title">Scores List</h1>
        <!--This is the Table of the Rankings Information -->
        <div id="highscores"></div>
    </div>
</div>


<!-- This is the external Javascript code which links to the Javascript code for the game -->
<script src="js/game.js"></script>


<script>

//This displays the scores list table on the webpage, as the webpage is loded up.
window.onload = loadRankings;

//This function is used for loading the scores onto the webpage.
function loadRankings(){

    //This gets the array of users where the email and score are stored.
    let usrArray = getUsers();

    //Prints the array of users to the console.
    console.log(usrArray);
    
    //This creates the html table string whith two colmns called Name and Title.
    let htmlString = "<table><tr><th>Name</th><th>Scores</th></tr>";
    
    /* This goes through a length of array where the all the user email and user score are stored. 
    e.g. if there are 5 users in an array then the loop will run until it has finshed going through all
    5 users in the array. */
    for(let i=0; i<usrArray.length; i++){

        /* This adds the user email and score in a row each time the loop runs accoring to the size of the array.
        e.g. if the loop runs 5 time as the size of the array is 5 then it will display 5 rows with two columns
        containing information about the user email and user score. */
        htmlString += "<tr><td>" + usrArray[i].enterEmail + "</td><td>" + usrArray[i].score + "</td></tr>";
    
    }

    //Adds the ending html table tag to the html string.
    htmlString += "</table>";
    
    //This prints the string of the table with the information inside the table. 
    console.log(document.getElementById("highscores").innerHTML = htmlString); 

    //This displays the table with the user email and their scores after the loop has finished running. 
    document.getElementById("highscores").innerHTML = htmlString;
   
}  

</script>


<?php

    //This is used for outtputting the footer bar at the bottom of the webpage.
    outputFooterBar();

    //This is used for outputting the bottom html content.
    outputFooter();

?>