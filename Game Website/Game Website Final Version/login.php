<?php
    //This is the php code which is linking to this file. 
    include('output.php');

    //This fucntion outputs the top html content.
    outputTop("Login");

    //This fucntion outputs the Banner & Navigation-Bar.
    outputBannerNavigation("Login");
?>

<!--Login Form -->
<div class="login-row">
    <div class ="Login-Form">
        <!--This is the Heading of the Login Form-->
        <div class="login-title">
            <h1>Login</h1>
        </div>
        <!--This is the Sub-Heading of the Login Form-->
        <div class="login-subtitle">
            <h2>Enter your Username & Password</h2>
        </div>
        <!--This is the Login Form of my webpage inclduing form names, textfields, and the login button-->
            <p id="loginText"></p>
            <p>Enter Username:</p>
            <input type="userName" placeholder="Enter Username" id="Username" class="Textfield-for-login-form"><br><br>
            <p>Enter Password:</p>
            <input type="password" name="password" placeholder="Enter Password" id="Textfield-for-Password" class="Textfield-for-login-form"><br><br><br>
            <button onclick="userLogin()" class="btnLogin">Login</button>
            <!-- When the button is pressed it makes the user login into the website if the information is correct else it displays error messages -->
            <p id="userFailsToLogin"></p>
        </form>
    </div>
</div>


<!-- This is the external Javascript code which links to the Javascript code for login -->
<script src="js/login.js"></script>



<?php
    //This is used for outtputting the footer bar at the bottom of the webpage.
    outputFooterBar();

    //This is used for outputting the bottom html content.
    outputFooter();
?>