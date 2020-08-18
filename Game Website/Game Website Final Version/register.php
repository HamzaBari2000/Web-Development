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
		<div id="nameform">
			<p>Create Username:</p>
				<input type="text" name="username" placeholder="Enter Username" id="Username-Textfield" class="Username-Textfield"><br><br>	
			<p id="returnsMessageUsername"></p>
			<p>Create Password:</p>
				<input type="password" name="password" placeholder="Enter Password" id="Password-Textfield" class="Password-Textfield"><br><br><br>		
			<p id="returnsMessagePassword"></p>
			<h2>User Information</h2><br>
			<p>Enter Firstname:</p>
				<input type="enterFistname" name="Enter Firstname" placeholder="Enter Firstname" id="Firstname-Textfield" class="Firstname-Textfield"><br><br>
			<p id="returnsMessageFirstname"></p>
			<p>Enter Lastname:</p>
				<input type="enterLastname" name="Enter Lastname" placeholder="Enter Lastname" id="Lastname-Textfield" class="Lastname-Textfield"><br><br>
			<p id="returnsMessageLastname"></p>
			<p>Enter Email Address:</p>
				<input type="enterEmail" name="Enter Email Address" placeholder="Enter Email Address" id="Email-Textfield" class="Email-Textfield"><br><br>
			<p id="returnsEmail"></p>
			<p>Enter Phonenumber:</p>
				<input type="tel" name="Enter Phonenumber" placeholder="Enter Phone Number" id="Phonenumber-Textfield" class="Phonenumber-Textfield"><br><br>		
			<p id="returnsPhonenumber"></p>
		</div>
	</div>
	<!--This is the column for the third section of the register form-->
	<div class="column">
		<h2>Address</h2>
		<p>Address Line 1:</p>
			<input type="text" name="AddressL1" placeholder="Enter Address Line 1" id="AddressL1-Textfield" class="AddressL1-Textfield"><br><br>
		<p id="returnsAddressL1"></p>
		<p>Address Line 2:</p>
			<input type="text" name="AddressL2" placeholder="Enter Address Line 2" id="AddressL2-Textfield" class="AddressL2-Textfield"><br><br>
		<p id="returnsAddressL2"></p>
		<p>Post Code:</p>
			<input type="text" name="PostCode" placeholder="Enter Post Code" id="Postcode-Textfield" class="Postcode-Textfield"><br><br>
		<p id="returnsPostCode"></p>
		<p>City:</p>
			<input type="text" name="City" placeholder="Enter City" id="City-Textfield" class="City-Textfield" value=""><br><br>
		<p id="returnsCity"></p>
		<p>Country:</p>
			<input type="text" name="Country" placeholder="Enter Country" id="Country-Textfield" class="Country-Textfield"><br><br><br>	
		<p id="returnsCountry"></p>
			<button onclick="storeUser(), validateRegisterForm(), valPassword(), valFirstname(), valLastname(), emailInput(), phonenumberInput(), addressL1Input(), addressL2Input(), postcodeInput(), cityInput(), countryInput()" input type="submit" form="nameform" value="Submit" id="btnRegister">Register</button>	
			<!-- All these functions are called on the button as when the button is pressed the functions will start running
			e.g. valPassword() will validate the text enteted and if it's correct as well as all the other inputs then, storeUser()
			will store the information in local storage in the JSON format. -->
		<p id="Outcome"></p>
	</div>
</div>


<!-- This is the external Javascript code which links to the Javascript code for the registration -->
<script src="js/storage.js"></script>


<?php
	//This is used for outtputting the footer bar at the bottom of the webpage.
	outputFooterBar();

	//This is used for outputting the bottom html content.
	outputFooter();
?>