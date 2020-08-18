/* This function is called on the submit button when the user presses the button submit. When the function gets called the follwing
thinges will happen: it will check which answers the users got correct and incorrect, it will display the score, it will also add or update
the score to the local storage, and it will add the user email and score into an array. */

function markQuiz(){

    //Declare Varibles and assigning them to the answerboxes where the user enters his answers accoring to the questions.
    let Q1 = document.getElementById("answerbox1").value;
    let Q2 = document.getElementById("answerbox2").value;
    let Q3 = document.getElementById("answerbox3").value;
    let Q4 = document.getElementById("answerbox4").value;
    let Q5 = document.getElementById("answerbox5").value;
    let Q6 = document.getElementById("answerbox6").value;
    let Q7 = document.getElementById("answerbox7").value;
    let Q8 = document.getElementById("answerbox8").value;
    let Q9 = document.getElementById("answerbox9").value;
    let Q10 = document.getElementById("answerbox10").value;

    //Declaring varible for score initilized at 0 as that is the starting point of the score. 
    let userScore = 0;


    //Declaring varible Question 1 answer.
    let Q1answer = "December";

    //Assigns the answer to question 1
	if (Q1 == Q1answer) {

        //If the answer is correct and it matches the assigned value in the answerbox input then the score is incresed by 1
        userScore++;
        
        //If answer is correct displays the message to make the user aware that they got this question correct.
        document.getElementById("correctionQ1").innerHTML = "<strong> Correct Answer </strong>";   

    } else {

        //If the answer is wrong and it doesn't match the assigned answer in the answerbox then the user is aware that he got this question wrong and it will display the correct answer.
        document.getElementById("correctionQ1").innerHTML = "<b> Wrong Answer  </b>" + "the correct answer was " + Q1answer;

    }


    //Declaring varible Question 2 answer.
    let Q2answer = "165";

    //Assigns the answer to question 2
    if (Q2 == Q2answer) {

        //If the answer is correct and it matches the assigned value in the answerbox input then the score is incresed by 1
        userScore++;
        
        //If answer is correct displays the message to make the user aware that they got this question correct.
        document.getElementById("correctionQ2").innerHTML = "<strong> Correct Answer </strong>";  

    } else {

        //If the answer is wrong and it doesn't match the assigned answer in the answerbox then the user is aware that he got this question wrong and it will display the correct answer.
        document.getElementById("correctionQ2").innerHTML = "<b> Wrong Answer </b>" + "the correct answer was " + Q2answer;

    }


    //Declaring varible Question 3 answer.
    let Q3answer = "Washington DC";

    //Assigns the answer to question 3
    if (Q3 == Q3answer) {

        //If the answer is correct and it matches the assigned value in the answerbox input then the score is incresed by 1
        userScore++;
        
        //If answer is correct displays the message to make the user aware that they got this question correct.
        document.getElementById("correctionQ3").innerHTML = "<strong> Correct Answer </strong>"; 

    } else {

        //If the answer is wrong and it doesn't match the assigned answer in the answerbox then the user is aware that he got this question wrong and it will display the correct answer.
        document.getElementById("correctionQ3").innerHTML = "<b> Wrong Answer </b>" + "the correct answer was " + Q3answer;

    }


    //Declaring varible Question 4 answer.
    let Q4answer = "29";

    //Assigns the answer to question 4
    if (Q4 == Q4answer) {

        //If the answer is correct and it matches the assigned value in the answerbox input then the score is incresed by 1
        userScore++;
        
        //If answer is correct displays the message to make the user aware that they got this question correct.
        document.getElementById("correctionQ4").innerHTML = "<strong> Correct Answer </strong>";

    } else {

        //If the answer is wrong and it doesn't match the assigned answer in the answerbox then the user is aware that he got this question wrong and it will display the correct answer.
        document.getElementById("correctionQ4").innerHTML = "<b> Wrong Answer </b>" + "the correct answer was " + Q4answer;

    }


    //Declaring varible Question 5 answer.
    let Q5answer = "25";

    //Assigns the answer to question 5
    if (Q5 == Q5answer) {

        //If the answer is correct and it matches the assigned value in the answerbox input then the score is incresed by 1
        userScore++;
        
        //If answer is correct displays the message to make the user aware that they got this question correct.
        document.getElementById("correctionQ5").innerHTML = "<strong> Correct Answer </strong>";    

    } else {

        //If the answer is wrong and it doesn't match the assigned answer in the answerbox then the user is aware that he got this question wrong and it will display the correct answer.
        document.getElementById("correctionQ5").innerHTML = "<b> Wrong Answer </b>" + "the correct answer was " + Q5answer;

    }


    //Declaring varible Question 6 answer.
    let Q6answer = "16";
    
    //Assigns the answer to question 6
    if (Q6 == Q6answer) {

        //If the answer is correct and it matches the assigned value in the answerbox input then the score is incresed by 1
        userScore++;
        
        //If answer is correct displays the message to make the user aware that they got this question correct.
        document.getElementById("correctionQ6").innerHTML = "<strong> Correct Answer </strong>";  

    } else {

        //If the answer is wrong and it doesn't match the assigned answer in the answerbox then the user is aware that he got this question wrong and it will display the correct answer.
        document.getElementById("correctionQ6").innerHTML = "<b> Wrong Answer </b>" + "the correct answer was " + Q6answer;

    }


    //Declaring varible Question 7 answer.
    let Q7answer = "365";

    //Assigns the answer to question 7
    if (Q7 == Q7answer) {

        //If the answer is correct and it matches the assigned value in the answerbox input then the score is incresed by 1
        userScore++;
        
        //If answer is correct displays the message to make the user aware that they got this question correct.
        document.getElementById("correctionQ7").innerHTML = "<strong> Correct Answer </strong>";    

    } else {

        //If the answer is wrong and it doesn't match the assigned answer in the answerbox then the user is aware that he got this question wrong and it will display the correct answer.
        document.getElementById("correctionQ7").innerHTML = "<b> Wrong Answer </b>" + "the correct answer was " + Q7answer;

    }


    //Declaring varible Question 8 answer.
    let Q8answer = "15";

    //Assigns the answer to question 8
    if (Q8 == Q8answer) {

        //If the answer is correct and it matches the assigned value in the answerbox input then the score is incresed by 1
        userScore++;
        
        //If answer is correct displays the message to make the user aware that they got this question correct.
        document.getElementById("correctionQ8").innerHTML = "<strong> Correct Answer </strong>";    

    } else {

        //If the answer is wrong and it doesn't match the assigned answer in the answerbox then the user is aware that he got this question wrong and it will display the correct answer.
        document.getElementById("correctionQ8").innerHTML = "<b> Wrong Answer </b>" + "the correct answer was " + Q8answer;

    }


    //Declaring varible for Question 9 answer.
    let Q9answer = "triangle";

    //Assigns the answer to question 9
    if (Q9 == Q9answer) {

        //If the answer is correct and it matches the assigned value in the answerbox input then the score is incresed by 1
        userScore++;
        
        //If answer is correct displays the message to make the user aware that they got this question correct.
        document.getElementById("correctionQ9").innerHTML = "<strong> Correct Answer </strong>";

    } else {

        //If the answer is wrong and it doesn't match the assigned answer in the answerbox then the user is aware that he got this question wrong and it will display the correct answer.
        document.getElementById("correctionQ9").innerHTML = "<b> Wrong Answer </b>" + "the correct answer was " + Q9answer;

    }


    //Declaring varible for Question 10 answer.
    let Q10answer = "45";

    //Assigning the question varible to the answer varible.
    if (Q10 == Q10answer) {

        //If the answer is correct and it matches the assigned value in the answerbox input then the score is incresed by 1
        userScore++;
        
        //If answer is correct displays the message to make the user aware that they got this question correct.
        document.getElementById("correctionQ10").innerHTML = "<strong> Correct Answer </strong>";    

    } else {

        //If the answer is wrong and it doesn't match the assigned answer in the answerbox then the user is aware that he got this question wrong and it will display the correct answer.
        document.getElementById("correctionQ10").innerHTML = "<b> Wrong Answer </b>" + "the correct answer was " + Q10answer;

    }


    //Displays a message with a total number of question the user got correct out of the total questions
    document.getElementById("correctScores").innerHTML = "You got " + userScore + " questions correct out of 10.";


    //THE GAME SECTION ENDS HERE


    //THIS SECTION IS ONLY FOR STRORING THE USER SCORE INTO THE LOCAL STORAGE USING JSON FORMAT.
    //THE SECTION BEGINS HERE


    //Gets the whole object which has all the information about the user who is logged in.
    let uObj = JSON.parse(localStorage[sessionStorage.loggedInUsername]);

    //varible is assigned to the logged in users username.
    let playerName = uObj.username;

    //Assigning the logged in user score to the current userScore which the user has received after playing the game. 
    //This basiclly updates the users score after playing the game each time.
    uObj.score = userScore;

    //The current updated user score is stored in the JSON format into the local storage, user object score of the user who is logged in.
    userScore = JSON.stringify(localStorage[uObj.score]);

    //The local storage set item rewrites the whole user object with the updated score and stores it into the JSON format.
    //The user information is still the same but the score will now be seen as updated.
    localStorage.setItem(uObj.username, JSON.stringify(uObj));

    //Prints the whole user object to the console where you can see the user object with with the rewritten version.
    console.log(uObj);

    //Prints the current player name to the console.
    console.log(playerName);

    //Prints the updated score from the user object onto the console. 
    console.log(uObj.score);

    
    //THE SECTION ENDS HERE


    //THIS SECTION IS ONLY FOR DISPLAYING THE SCORES WITH THE PLAYER NAMES ON THE WEBPAGE


    //This is going to be extracting the user details of the user who is logged in.
    let updateObject = JSON.parse(localStorage[sessionStorage.loggedInUsername]);

    //This is going to print all the user details to the console.
    console.log(updateObject);
    
    //This varible is created and its assigned to get the user email.
    let pName = updateObject.enterEmail;

    //This prints the user email to the console. 
    console.log(pName);
    
    //This varible is created and its assigned to get the user score.
    let uScore = updateObject.score;

    //This prints the user score to the console. 
    console.log(updateObject.score);
    
    //A new object is created which has the values user email and the user score only. 
    let scoreObject = {

        //The user email is the player name.
        enterEmail: pName,

        //The score is the user score.
        score: uScore,
    };
            
    //The score object with user email and user score is now converted into a JSON Format. The enterEmail is the key in the local storage.
    localStorage[scoreObject.enterEmail] = JSON.stringify(scoreObject);

    //The score object will now be printed as in JSON Format on the console.
    console.log(scoreObject);
   
    //All the users are retrived from the getUsers() and assigned to an array.
    let userArry = getUsers();

    //The array pushes the score object which has the user email and the user score into the array.
    userArry.push(localStorage[scoreObject.enterEmail] = scoreObject);

    //The array is converted to JSON Format.
    localStorage.users = JSON.stringify(userArry); 
  
    //THE SECTION ENDS HERE

}

//This function has all the user email and score.
function getUsers(){

    //This is checking if the array is empty or not.
    if(localStorage.users === undefined){

        //It will return an empty array if there are no users in the local storage.
        return [];
        
    }
    else 
    {

        //This will return all the user email and score out of the JSON format. 
        return JSON.parse(localStorage.users);

    }

}