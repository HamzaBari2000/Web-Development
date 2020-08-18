//This code below selects a random number between 1 - 1000 to generate and ID for a user.
let generateid = Math.floor(Math.random() * 1000);

//This function is used for adding the user to the website.
function addUser() {
    name = document.getElementById("fname").value;  //This gets the value of the name.
    sessionStorage.setItem("name", name);   //This sets the name inside the session storage.  
    location.reload();  //Once the user has entered their name then, the webpage reloads. 
}

let id = generateid; //The genereated number is assigned as an ID.

let nameEntry = ""; //Creating a varible to get the name.
nameEntry = sessionStorage.getItem("name"); //Assigning the varible and getting the name previously inputted from the Session Storage.

// This object creates a person and inside this object there is a function that returns the person firstname.
let person = {
    fullName: function() {
      return this.firstName; //This function is returning the person firstname.
    }
}

//This object contains the firstname. 
let personName = {
    firstName: nameEntry //Firstname is assigned to the nameEntry from the sessionStorage.
}

//This is where the person name is being called which gets the name. Also, the name is assigned to the varible userName.
let userName = person.fullName.call(personName); 

// On the response back on the webpage, it assigns a sentence with the username to a varible.
let response = '<b> Welcome to the chat: ' + '</b>' +  '<b>' + userName + '</b>';
document.getElementById("res").innerHTML = response; //The varible is then called on the html id "res" where the sentence with the username is displayed.

//Check to see if user is already been added or not
window.onload = checkUserAdded;

//This function checks if the user has been added or not and if they have not been added then it will display blank on the webpage.
function checkUserAdded(){
    if(sessionStorage.name == null){    //If the session storage is the div content is displayed as null.
        document.getElementById("res").innerHTML =  "";
    }
}

//Once the button send has been pressed from the feedback content then, it will perfrom these action below.
function sendFeedback() {
    let feedbackText = document.getElementById("feedback").value; //The feedback text value inpuuted by the user is assigned to the varible.
    document.getElementById("feedbackResponse").innerHTML = "<b> Sent </b>"; // Once the user has sent the message then the response is displayed on the webpage.
    localStorage.clear(); //The value in the local storage gets cleared.
    localStorage.setItem("Feedback", feedbackText); //The new feedback text gets added to the local storage.
}

//This function is used for loading the HTML content when the feedback button has been pressed. 
function displayFeedbackContent(){
    //This is the HTML String which is used for loading the html content.
    let html = '<div id="class">';
    html += "<h1> Give Feedback </h1>";
    html += '<p> This is where you can upload your text file to give us feedback or comments. </p>';
    html += '<br>';
    html += '<textarea id="feedback" placeholder="Enter your feedback here:" rows="15" cols="80"></textarea>';
    html += '<br><br>';
    html += '<button id="btnSend2" onclick="sendFeedback()">Send</button>'; //On the Onlick of the button it sends the feedback message.
    html += '<br><br>';
    html += '<b id="feedbackResponse"></b>';
    html += '</div>';
    document.getElementById("send-feedback").innerHTML = html; //This is where all the html content will be displayed on the webpage.
    
    document.getElementById("feedbackResponse").innerHTML = ""; //This is set from before as, the user wouldn't have pressed the send button.
}

//This function is used to hide the header section when the hide button on the webpage has been clicked. 
function hideHeaderSection() {
    document.getElementById("header").id = 'hide'; 
}

//I'm using this class to get the current date and time and i've assigned this to a varible.
let currentDateTime = new Date();

//This gets the current data with the year, month and the current date.
let dataTime = currentDateTime.getFullYear() +
    "-" + (currentDateTime.getMonth() + 1) +
    "-" + currentDateTime.getDate() +
    " " +   //This gets the current time which is the hours, minutes and the seconds.
    currentDateTime.getHours() +
    ":" + currentDateTime.getMinutes() +
    ":" + currentDateTime.getSeconds();

let userFeedback = localStorage.getItem("Feedback"); //This gets the feedback from the local storage and assigns it to a varible.

/* Creating a socket connection for the communication between the client/server. 
Note: This port number is for the client/server communciation NOT loading the webpage on Localhost/Express. */
//This port number was created for the connection.
let socketConnection = new WebSocket("ws://localhost:3307");

// The socket connection is being opned to send data to the server in JSON format.
socketConnection.onopen = function() {
    socketConnection.send(JSON.stringify( {type: "name", data: userName, DateTime: "dateTime", date: dataTime, userID: id, usrFB: userFeedback} ));  
}

//Recieves Data in JSON Format from the server using the websockets.
socketConnection.onmessage = function(MessageEvent) {
    let messageBox = document.getElementById('chatBox'); //This is where the message will be dipslayed on the webpage.
    let jsonData = JSON.parse(MessageEvent.data); // The JSON format data is recieved from the server. 
    console.log(jsonData); // This is where you can view the JSON Format data coming from the server on the console.

    //After parsing the JSON date i've used certain data which i've rapped as html content thereofre, it's displayed on the webpage/
    //The message box will show the name - Username, data - the message, and the Date and Time of the message.
    messageBox.innerHTML += '<p>' + "From " + jsonData.name + ": " + jsonData.data + " -------- " + jsonData.DateTime +'</p>';

    //jsonData.getMsg - This is an array where all the messages with the data and time get stored. This message Array was exchnaged from the client.
    let usrArray = jsonData.getMsg; //The Array is assigned to the varible. 

    //This is the html content which will be displayed as messages are being displayed. 
    let htmlString = '<h1> Chat History </h1>';
    htmlString += '<p> Look below to see all the history of the messages.</p>';

    //For displaying all the previous messages i've used a table which is used for displayed the messages and the date and time.
    htmlString += "<table><tr><th>User ID</th><th>Messages</th><th>Date & Time</th></tr>";

    // As, there are lots of messsage thereofre, I've used a for loop to display all the messages. 
    for (let i=0; i<usrArray.length; i++){
        //The userID, messages and the date and time are all displayed in different columns.
        htmlString += "<tr><td>" + usrArray[i].userID + "</td><td>" + usrArray[i].messages + "</td><td>" + usrArray[i].datetime + "</td></tr>";
    }
    htmlString += "</table>"; //This closes the table tag.

    //This is the div content where all the html content such as the table is being displayed. 
    document.getElementById("Section-4").innerHTML = htmlString;

}

//Sending The Message. When the button is clicked it the user sends the message to the other user or users. 
function sendMessage() {
    let messageBox = document.getElementById('chatBox'); //This is where the message will be dipslayed on the webpage.
    let textMessage = document.getElementById('text').value; //This is the value of the message e.g. the message text.

    //In JSON format it sends the message from one user to another via the websockets. 
    socketConnection.send(JSON.stringify( {type: "message", data: textMessage, DateTime: "dateTime", date: dataTime, userID : id, usrFB: userFeedback} ));

    //The message recieved is displayed in the message box of the user. 
    messageBox.innerHTML += '<strong>' + "Me: " + '</strong>' + '<strong>' + textMessage + '</strong>' + '<strong>' + " -------- " + dataTime + '</strong>';
} 