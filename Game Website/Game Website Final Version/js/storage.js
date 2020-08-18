//USER STORAGE SECTION BEGINS HERE

/* This function stores all the users inside the Local Storage. When this function is called on the 
the Register button and the register button is pressed then, all the information get's stored into the Local Storage. */

function storeUser(){

	/* This if statement is used for checking if the validation is correct
	for all the 11 input textfields, it checks for each indivisual textfield. The way this works is
	if any of the input fields doesn't macth the validation function then it displays an error message underneath the submit button
	and it stops the register form from being subbmitted into the Local Storage. */ 

	//Checking if the username textfield matches the username textfield validation or not.
	if(validateRegisterForm() == false){

		//If validation doesn't match then this error message is displayed.
		document.getElementById("Outcome").innerHTML = "<b> Account Not Registred </b>";	

	//Checking if the password textfield matches the password textfield validation or not.		
	} else if(valPassword() == false){
			
		//If validation doesn't match then this error message is displayed.
		document.getElementById("Outcome").innerHTML = "<b> Account Not Registred </b>";

	//Checking if the firstname textfield matches the firstname textfield validation or not.	
	} else if(valFirstname() == false){

		//If validation doesn't match then this error message is displayed.
		document.getElementById("Outcome").innerHTML = "<b> Account Not Registred </b>";

	//Checking if the lastname textfield matches the lastname textfield validation or not.	
	} else if(valLastname() == false){

		//If validation doesn't match then this error message is displayed.
		document.getElementById("Outcome").innerHTML = "<b> Account Not Registred </b>";

	//Checking if the email textfield matches the email textfield validation or not.	
	} else if(emailInput() == false){

		//If validation doesn't match then this error message is displayed.
		document.getElementById("Outcome").innerHTML = "<b> Account Not Registred </b>";

	//Checking if the phonenumber textfield matches the phonenumber textfield validation or not.	
	} else if(phonenumberInput() == false){

		//If validation doesn't match then this error message is displayed.
		document.getElementById("Outcome").innerHTML = "<b> Account Not Registred </b>";

	//Checking if the address line 1 textfield matches the address line 1 textfield validation or not.	
	} else if(addressL1Input() == false){

		//If validation doesn't match then this error message is displayed.
		document.getElementById("Outcome").innerHTML = "<b> Account Not Registred </b>";

	//Checking if the address line 2 textfield matches the address line 2 textfield validation or not.	
	} else if(addressL2Input() == false){

		//If validation doesn't match then this error message is displayed.
		document.getElementById("Outcome").innerHTML = "<b> Account Not Registred </b>";

	//Checking if the post code textfield matches the post code textfield validation or not.	
	} else if(postcodeInput() == false){

		//If validation doesn't match then this error message is displayed.
		document.getElementById("Outcome").innerHTML = "<b> Account Not Registred </b>";

	//Checking if the city textfield matches the city textfield validation or not.	
	} else if(cityInput() == false){

		//If validation doesn't match then this error message is displayed.
		document.getElementById("Outcome").innerHTML = "<b> Account Not Registred </b>";

	//Checking if the country textfield matches the country textfield validation or not.	
	} else if(countryInput() == false){

		//If validation doesn't match then this error message is displayed.
		document.getElementById("Outcome").innerHTML = "<b> Account Not Registred </b>";

	//If all the 11 input textfields validation matches then it comes to this else to execute all the following code below.
	} else { 
	
		//Building the object where the all the information is going to be stored inside. 
		let userObject = {};

		//Create username & Password which is getting added into the user object.
		userObject.username = document.getElementById("Username-Textfield").value;
		userObject.password = document.getElementById("Password-Textfield").value;

		//User Information which is getting added into the user object.
		userObject.enterFistname = document.getElementById("Firstname-Textfield").value;
		userObject.enterLastname = document.getElementById("Lastname-Textfield").value;
		userObject.enterEmail = document.getElementById("Email-Textfield").value;
		userObject.enterPhonenumber = document.getElementById("Phonenumber-Textfield").value;

		//Address which is getting added into the user object.
		userObject.AddressL1 = document.getElementById("AddressL1-Textfield").value;
		userObject.AddressL2 = document.getElementById("AddressL2-Textfield").value;
		userObject.PostCode = document.getElementById("Postcode-Textfield").value;
		userObject.City = document.getElementById("City-Textfield").value;
		userObject.Country = document.getElementById("Country-Textfield").value;

		//Score which is getting added into the user object.
		userObject.score = 0;

		//Storing the user object with all the information into JSON format. The username is identifed as a key.
		localStorage[userObject.username] = JSON.stringify(userObject);

		//Informing the user if all information entered was valid and their information is stored into the Local Storage.
		document.getElementById("Outcome").innerHTML = "<strong> Account Registred </strong>";

		//Displays the user object on the console with all the information in JSON format. 
		console.log(userObject);
		
	}    
}

//USER STORAGE SECTION ENDS HERE


//USER VALIDATION SECTION BEGINS


//Regular Expression to Validate the create username textfield. E.g. hamza1
let message = document.getElementById("returnsMessageUsername");

//Assigning the regular expression to the varible
const createUserNameRegExp = new RegExp("^[a-z0-9_-]{3,16}$"); 

//Validate Username Textfield Checking it with the Regular Expression Provided for the username. 
function validateRegisterForm(){

	//Creates a varible assigned to the username textfield.
	let createUserName = document.getElementById("Username-Textfield").value;

	//This is checking if the assigned username textfield input is false meaning it's not matching to the regular expression.
	if(createUserNameRegExp.test(createUserName) == false){

		//When the username textfield validation fails as the user input does not macth the regexp then, an error message is displayed.
		message.innerHTML = "<b> Please enter a valid username </b>";

		//It returns back false.
        return false;
	}

	//If the regular expression matches the username textfield then it just returns true.
	return true;

}


//Regular Expression to Validate the create password textfield. E.g. kkj2J%pp
let message2 = document.getElementById("returnsMessagePassword");

//Assigning the regular expression to the varible
const createPasswordRegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[#$^+=!*\d()@%&]).{8,10}$"); 

//Validate Password Textfield Checking it with the Regular Expression Provided for the password. 
function valPassword(){

	//Creates a varible assigned to the password textfield.
	let createPassword = document.getElementById("Password-Textfield").value;

	//This is checking if the assigned password textfield input is false meaning it's not matching to the regular expression.
	if(createPasswordRegExp.test(createPassword) == false){

		//When the password textfield validation fails as the user input does not macth the regexp then, an error message is displayed.
		message2.innerHTML = "<b> Please enter a valid password </b>";

		//It returns back false.
        return false;
	}
	
	//If the regular expression matches the password textfield then it just returns true.
	return true;

}


//Regular Expression to Validate the enter firstname textfield. E.g. hamza
let message3 = document.getElementById("returnsMessageFirstname");

//Assigning the regular expression to the varible
const createFirstnameRegExp = new RegExp("^[a-z0-9_-]{3,16}$"); 

//Validate Firstname Textfield Checking it with the Regular Expression Provided for the First name. 
function valFirstname(){

	//Creates a varible assigned to the enter firstname textfield.
	let createFirstname = document.getElementById("Firstname-Textfield").value;

	//This is checking if the assigned firstname textfield input is false meaning it's not matching to the regular expression.
	if(createFirstnameRegExp.test(createFirstname) == false){

		//When the first name textfield validation fails as the user input does not macth the regexp then, an error message is displayed.
		message3.innerHTML = "<b> Only Characters between 3-16 </b>";

		//It returns back false.
        return false;
	}

	//If the regular expression matches the first name textfield then it just returns true.
	return true;

}


//Regular Expression to Validate the enter lastname textfield. E.g. bari
let message4 = document.getElementById("returnsMessageLastname");

//Assigning the regular expression to the varible
const createLastnameRegExp = new RegExp("^[a-z0-9_-]{3,16}$"); 

//Validate Lastname Textfield Checking it with the Regular Expression Provided for the Last name. 
function valLastname(){

	//Creates a varible assigned to the enter lastname textfield.
	let createLastname = document.getElementById("Lastname-Textfield").value;

	//This is checking if the assigned lastname textfield input is false meaning it's not matching to the regular expression.
	if(createLastnameRegExp.test(createLastname) == false){

		//When the last name textfield validation fails as the user input does not macth the regexp then, an error message is displayed.
		message4.innerHTML = "<b> Only Characters between 3-16 </b>";

		//It returns back false.
        return false;
	}
	
	//If the regular expression matches the last name textfield then it just returns true.
	return true;

}


//Regular Expression to Validate the email input textfield. E.g. hamzabari_2000@hotmail.com
let message5 = document.getElementById("returnsEmail");

//Assigning the regular expression to the varible
const emailRegExp = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");

//Validate Email Textfield Checking it with the Regular Expression Provided for the email. 
function emailInput(){

	//Creates a varible assigned to the email textfield.
	let emailInput = document.getElementById("Email-Textfield").value;

	//This is checking if the assigned email textfield input is false meaning it's not matching to the regular expression.
	if(emailRegExp.test(emailInput) == false){

		//When the email textfield validation fails as the user input does not macth the regexp then, an error message is displayed.
		message5.innerHTML = "<b> Please enter a valid email address </b>";

		//It returns back false.
        return false;
	}
	
	//If the regular expression matches the email textfield then it just returns true.
	return true;

}


//Regular Expression to Validate the phonenumber input textfield. E.g. +44722255888
let message6 = document.getElementById("returnsPhonenumber");

//Assigning the regular expression to the varible
const phonenumberRegExp = new RegExp("^[+]?[0-9]{9,12}$");

//Validate Phonenumber Textfield Checking it with the Regular Expression Provided for the phonenumber. 
function phonenumberInput(){

	//Creates a varible assigned to the phonenumber textfield.
	let phonenumberEnter = document.getElementById("Phonenumber-Textfield").value;

	//This is checking if the assigned phonenumber textfield input is false meaning it's not matching to the regular expression.
	if(phonenumberRegExp.test(phonenumberEnter) == false){

		//When the phone number textfield validation fails as the user input does not macth the regexp then, an error message is displayed.
		message6.innerHTML = "<b> Please enter a valid phone number </b>";

		//It returns back false.
        return false;
	}
	
	//If the regular expression matches the phone number textfield then it just returns true.
	return true;

}


//Regular Expression to Validate the Address Line 1 textfield. E.g. 27highrd (No Spaces everything togather)
let message7 = document.getElementById("returnsAddressL1");

//Assigning the regular expression to the varible
const addressL1RegExp = new RegExp("^[a-z0-9_-]{3,16}$");

//Validate Address Line 1 Textfield Checking it with the Regular Expression Provided for the address line 1. 
function addressL1Input(){

	//Creates a varible assigned to the address line 1 textfield.
	let addressL1 = document.getElementById("AddressL1-Textfield").value;

	//This is checking if the assigned address line 1 textfield input is false meaning it's not matching to the regular expression.
	if(addressL1RegExp.test(addressL1) == false){

		//When the address line 1 textfield validation fails as the user input does not macth the regexp then, an error message is displayed.
		message7.innerHTML = "<b> Please enter a valid address e.g. 27highrd </b>";

		//It returns back false.
        return false;
	}
	
	//If the regular expression matches the address line 1 textfield then it just returns true.
	return true;

}


//Regular Expression to Validate the Address Line 2 textfield. E.g. Essex
let message8 = document.getElementById("returnsAddressL2");

//Assigning the regular expression to the varible
const addressL2RegExp = new RegExp("[a-zA-Z0-9]+");

//Validate Address Line 2 Textfield Checking it with the Regular Expression Provided for the address line 2. 
function addressL2Input(){

	//Creates a varible assigned to the address line 2 textfield.
	let addressL2 = document.getElementById("AddressL2-Textfield").value;

	//This is checking if the assigned address line 2 textfield input is false meaning it's not matching to the regular expression.
	if(addressL2RegExp.test(addressL2) == false){

		//When the address line 2 textfield validation fails as the user input does not macth the regexp then, an error message is displayed.
		message8.innerHTML = "<b> Please enter a valid address e.g. county name town name </b>";

		//It returns back false.
        return false;
	}
	
	//If the regular expression matches the address line 2 textfield then it just returns true.
	return true;

}


//Regular Expression to Validate the Post Code textfield. E.g. CR0 1DE (Can use lower cases if wished)
let message9 = document.getElementById("returnsPostCode");

//Assigning the regular expression to the varible
const returnsPostCodeRegExp = new RegExp("[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}");

//Validate Post Code Textfield Checking it with the Regular Expression Provided for the Post Code. 
function postcodeInput(){

	//Creates a varible assigned to the post-code textfield.
	let postcode = document.getElementById("Postcode-Textfield").value;

	//This is checking if the assigned post code textfield input is false meaning it's not matching to the regular expression.
	if(returnsPostCodeRegExp.test(postcode) == false){

		//When the post code textfield validation fails as the user input does not macth the regexp then, an error message is displayed.
		message9.innerHTML = "<b> Please enter a valid post code e.g. CR0 1DE </b>";

		//It returns back false.
        return false;
	}
	
	//If the regular expression matches the post code textfield then it just returns true.
	return true;

}

//Regular Expression to Validate the City textfield. E.g. London
let message10 = document.getElementById("returnsCity");

//Assigning the regular expression to the varible
const cityRegExp = new RegExp("[a-zA-Z0-9]+");

//Validate City Textfield Checking it with the Regular Expression Provided for the City. 
function cityInput(){

	//Creates a varible assigned to the city textfield.
	let city = document.getElementById("City-Textfield").value;

	//This is checking if the assigned city textfield input is false meaning it's not matching to the regular expression.
	if(cityRegExp.test(city) == false){

		//When the city textfield validation fails as the user input does not macth the regexp then, an error message is displayed.
		message10.innerHTML = "<b> Please enter the city name </b>";

		//It returns back false.
        return false;
	}
	
	//If the regular expression matches the city textfield then it just returns true.
	return true;

}


//Regular Expression to Validate the Country textfield. E.g. England
let message11 = document.getElementById("returnsCountry");

//Assigning the regular expression to the varible
const countryRegExp = new RegExp("[a-zA-Z0-9]+");

//Validate Country Textfield Checking it with the Regular Expression Provided for the Country.
function countryInput(){

	//Creates a varible assigned to the country textfield.
	let country = document.getElementById("Country-Textfield").value;

	//This is checking if the assigned country textfield input is false meaning it's not matching to the regular expression.
	if(countryRegExp.test(country) == false){

		//When the country textfield validation fails as the user input does not macth the regexp then, an error message is displayed.
		message11.innerHTML = "<b> Please enter the country name </b>";

		//It returns back false.
        return false;
	}
	
	//If the regular expression matches the country textfield then it just returns true.
	return true;

}


//USER VALIDATION SECTION ENDS