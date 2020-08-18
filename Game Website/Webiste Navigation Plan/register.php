<?php
	//This is the php code which is linking to this file. 
	include('output.php'); 

	//This fucntion outputs the top html content.
	outputTop("Register");

	//This fucntion outputs the Banner & Navigation-Bar.
	outputBannerNavigation("Register");
?>

<!-- Resistration Form-->
<!--These are the two columns where the register form is seperated into two parts of columns-->
<div class="row">
	<!--This is the column for the first two sections of the register form-->
	<div class="column">
		<h1>Registration</h1><br>
		<h2>Create a Username & Password</h2>
		<form action="new" method="get" id="nameform">
			<p>Create Username:</p>
			<input type="text" name="username" placeholder="Enter Username" id="Textfield"><br><br>
			<p>Create Password:</p>
			<input type="text" name="password" placeholder="Enter Password" id="Textfield"><br><br><br>
			<h2>User Information</h2><br>
			<p>Enter Firstname:</p>
			<input type="text" name="Enter Firstname" placeholder="Enter Firstname" id="Textfield"><br><br>
			<p>Enter Lastname:</p>
			<input type="text" name="Enter Lastname" placeholder="Enter Lastname" id="Textfield"><br><br>
			<p>Enter Email Address:</p>
			<input type="text" name="Enter Email Address" placeholder="Enter Email Address" id="Textfield"><br><br>
			<p>Enter Phonenumber:</p>
			<input type="text" name="Enter Phonenumber" placeholder="Enter Phone Number" id="Textfield"><br><br>
		</form>
	</div>
	<!--This is the column for the third section of the register form-->
	<div class="column">
		<h2>Address</h2>
		<form action="new" method="get" id="nameform">
			<p>Address Line 1:</p>
			<input type="text" name="username" placeholder="Enter Address Line 1" id="Textfield"><br><br>
			<p>Address Line 2:</p>
			<input type="text" name="password" placeholder="Enter Address Line 2" id="Textfield"><br><br>
			<p>Post Code:</p>
			<input type="text" name="username" placeholder="Enter Post Code" id="Textfield"><br><br>
			<p>City:</p>
			<input type="text" name="password" placeholder="Enter City" id="Textfield"><br><br>
			<p>Country:</p>
			<input type="text" name="password" placeholder="Enter Country" id="Textfield"><br><br><br>	
			<button type="submit" form="#nameform" value="Submit" id="btnRegister">Register</button>
		</form>
	</div>
</div>

<?php
	//This is used for outtputting the footer bar at the bottom of the webpage.
	outputFooterBar();

	//This is used for outputting the bottom html content.
	outputFooter();
?>