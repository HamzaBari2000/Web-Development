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
        <form action="new" method="get" id="loginform">
            <p>Enter Username:</p>
            <input type="text" name="username" placeholder="Enter Username" id="Textfield-for-login-form"><br><br>
            <p>Enter Password:</p>
            <input type="text" name="password" placeholder="Enter Password" id="Textfield-for-login-form"><br><br><br>
            <button type="submit" form="#loginform" value="Submit" id="btnLogin">Login</button>
        </form>
    </div>
</div>

<?php
    //This is used for outtputting the footer bar at the bottom of the webpage.
    outputFooterBar();

    //This is used for outputting the bottom html content.
    outputFooter();
?>