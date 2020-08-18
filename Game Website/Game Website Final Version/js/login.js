//This will be there as it will be checking to see if the user is still/already logged in.
window.onload = checkingUserLoggedIn;


//This function is checking if the user is already logged in.
function checkingUserLoggedIn(){

    //This is checking to see if the user in the session storage is not not undefined.
    if(sessionStorage.loggedInUsername !== undefined)
    {

        //This is going to be extracting the user details of the user who is logged in.
        let userObject = JSON.parse(localStorage[sessionStorage.loggedInUsername]);

        //This alerts the user that they are still logged in the webiste.
        document.getElementById("loginText").innerHTML = userObject.username + "<b> logged in. </b>";

    }
}


//This function is used when the user is logging into the website.
function userLogin(){

//This is getting the username.
let userName = document.getElementById("Username").value;

//This prints the username to the console.
console.log(userName);

    //This is when the user does not have an account registered to the website. 
    if(localStorage[userName] === undefined){

        //This error message is used to inform the user that they do have an account registered. 
        document.getElementById("userFailsToLogin").innerHTML = "<b> Username not recognized, please go and register your account. </b>";
        
        //Stops it from going furthur.
        return;
    } 

    //This will happen when the user has an account registered.
    else
    {

        //This is converting to an object.
        let userObject = JSON.parse(localStorage[userName]);

        //This prints out the object to the console.
        console.log(userObject);

        //This gets the password entered by the user and assigns it to a varible.
        let password = document.getElementById("Textfield-for-Password").value;


        //This assigined varible is used for checking with the users actual password from the converted object.
        if(password === userObject.password)
        {//This is when the user successfully login into the website.

            //This message is used to show the user that they are logged in.
            document.getElementById("loginText").innerHTML = userObject.username + "<b> logged in. </b>";

            //If users made mistakes before e.g. enters an incorrect password and error messages occured then, this clears those error messages once the user is logged in.
            document.getElementById("userFailsToLogin").innerHTML = "";

            //When the user is logged in then, it shows that username inside the session storage.
            sessionStorage.loggedInUsername = userObject.username;

        }

        else
        {

            //If the user gets their password incorrect then, this error message appears up to inform the user.
            document.getElementById("userFailsToLogin").innerHTML = "<b> Password not correct. Please try again. </b>";

        }
    }
}