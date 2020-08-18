<?php
    //This is the php code which is linking to this file. 
    include('output.php');

    //This fucntion outputs the top html content.
    outputTop("Home");

    //This fucntion outputs the Banner & Navigation-Bar.
    outputBannerNavigation("Home");
?>

<!-- This is the banner of the index webpage  -->
<div class="index-header">
    <h1>The Game Out now...</h1> 
</div>

<!-- Heading of game information section -->
<div class="home-title-box" id="section-1">
    <h2>Game Information</h2>
    <!-- All content of the game information sections are placed next to each other -->
    <div class="home-row">
        <!-- Section about register -->
        <!-- This home-column-1 has two sections opposite each other e.g. Register & Game are opposite each other -->
        <div class="home-column-1">
            <h2>Register</h2>
            <img src="img/register.png" alt="register image" width="50" height="50">
            <p>
            The user would have to use the registration form to register his user details to the website.
            Therefore, the user must create a username & password,
            and fill in the user details e.g. phone number and the address.
            </p>
        </div>
        <!-- Section about login -->
        <!-- This home-column-2 has the other two sections opposite each other e.g. Login & Rankings are opposite each other -->
        <div class="home-column-2">
            <h2>Login</h2>
            <img src="img/login.png" alt="login image" width="50" height="50">
            <p>
            The User must enter his username and password that has been created using the registration form.
            Once, the user has entered and their correct username & password then,
            they will be logged into the website. 
            </p>
        </div>
        <!-- Section about game -->
        <div class="home-column-1">
            <h2>Game</h2>
            <img src="img/game.png" alt="game image" width="50" height="50">
            <p>
            Once the user is logged into the website the user must navigate to the game webpage
            where the user can look at the game controls,
            such as how to play the game and then actully play the game inside the game window.
            </p>
        </div>
        <!-- Section about rankings -->
        <div class="home-column-2">
            <h2>Rankings</h2>
            <img src="img/rankings.png" alt="rankings image" width="50" height="50">
            <p>
            The user will receive a final score after the game.
            The user can go to the rankings webpage to see the rankings table.
            This way the user can see if they are in the top 10 or not, and if they are then at what ranking position. 
            </p>
        </div>
    </div>
</div>

<!-- This section is about the game video -->
<div class="info-video">
    <!-- Video section title -->
    <p class="video-title">Game Information Video</p>
    <!-- Video window -->
    <video id="game-info-video" width="700" height="500" controls></video>
</div>

<!-- This section is about the review & feedback -->
<div class="review-section">
    <div class="review-box">
        <!-- Review & Feedback Title -->
        <center>
            <h4>Review & Feedback</h4>
        </center>
        <!-- Review & Feedback Form -->
        <form action="review" method="get" id="review-form">
            <p>Plese fill this in to give us feeback so we can look to improve our service later on:</p>
            <p>First name:</p>
            <input type="text" name="firstname" placeholder="Enter First name" id="review-form-txtfield"><br>
            <p>Last name:</p>
            <input type="text" name="lastname" placeholder="Enter Last name" id="review-form-txtfield"><br>
            <p>Feedback:</p>
            <textarea id="usrReview" rows="10" cols="42" placeholder="Enter feedback here:"></textarea><br><br>
            <button type="submit" form="#review-form" value="Submit" id="btnSend">Send</button>
        </form> 
    </div>
</div>


<?php
    //This is used for outtputting the footer bar at the bottom of the webpage.
    outputFooterBar();

    //This is used for outputting the bottom html content.
    outputFooter();
?>