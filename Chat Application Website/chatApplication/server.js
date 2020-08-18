let server = require('ws').Server;  //Creates the server for the websocket.
let connection = new server({port : 3307}); //Creates a connection for the server with the port number 3307;
let express = require('express'); //Express liabary used for listening for loading the static webpage on the localhost.
let mysql = require('mysql');   //mysql used for storing and retreving data from the database.

//Creates a connection pool with the details of the user.
const connectionPool = mysql.createPool({
    connectionLimit: 1,
    host: "localhost",
    user: "hamza",
    password: "123",
    database: "chatapplication",
    debug: false
}); 

//Create express app.
let app = express();

//Start the app listen on the port 8080
app.listen(8080, listen);

//This function is used when the server has conneted and successfully loaded up.
function listen() {
    console.log("connected..");
}

//Set up express to serve static files from the folder which is called 'public'
app.use(express.static('public'));

//This is a Event handler which is used for giving a websocket connetion. This executes the give connection function.
//By usiing connection you can connect a list of clients 
connection.on("connection", giveConnection);

//This is the function which is connected to the websocket. The web socket will be on. 
function giveConnection(ws) {

    //This event handler is used for sending and recieving messages. Websocket is a connection of one partiular client from the connection list. 
    ws.on("message", sendRecieveMessage);

    //This event handler is used for closing the connection when the particular client leaves the chat application. 
    ws.on("close", closeConnection);

    //This function is used from the event handler sendReceieveMessage. 
    function sendRecieveMessage(message) {

        //The data is exchnaged from the client in JSON Format. 
        message = JSON.parse(message);

        //This allows you to access the same name with the client when sending the message. 
        if (message.type == "name") {
            ws.userName = message.data; //This web socket for the name is assigned with the username. 
            return;
        }

        //All the clients connetion is assigned to a varible.
        let displayAllMessages = connection.clients;

        /* This sends a message to every client who are connected to the server. E.g. There are 7 people connected
        1 person sends a message and all the other 6 people recieve it. */
        //This used the varible that has been assigned above, the foreach loop makes all the messages been sent to the otehr clients.
        displayAllMessages.forEach(allMessages);

        //This is sending the data to the client in a JSON Format.
        function allMessages(client) {

            //Build a query to get all the messages from the message table. 
            let getMessages = "SELECT * FROM messages";
        
            //Execute query and output results
            connectionPool.query(getMessages, (err, result) => {
                if (err) { //Check for errors
                    console.error("Error executing query: " + JSON.stringify(err));
                }
                else { //Sends results in JSON format to the Client. 
                    if(client != ws) { //This if statement is used so the message if only sent to the client. This stops the message from being repeated in the server.
                        
                        //This sends the data from server to client in JSON Format.

                        //The ws.userName is used for sending the data with the same name. Reffering back to the if statament above.
                        client.send(JSON.stringify( {name: ws.userName, data: message.data, DateTime: message.date, getMsg: result} )); 
                    }
                }
            });
        }
   
        //Building a query to insert data into the users table. 
        let addUsers = "INSERT INTO users (id, username) " +
        "       VALUES ('" + message.userID + "', '" + ws.userName + "')";

        //Executes the query and output results
        connectionPool.query(addUsers, (err, result) => {
            if (err){   //Checking for errors
                console.error("Error executing query: " + JSON.stringify(err)); 
            }
            else { //Displaying Results.
                console.log(JSON.stringify(result));
            }
        }); 

        //Building a query that inserts the data into the messages table.
        let addMessagesSent = "INSERT INTO messages (userID, messages, datetime) " +
        "       VALUES ('" + message.userID + "', '" + message.data + "', '" + message.date + "')";

        //Execute query.
        connectionPool.query(addMessagesSent, (err, result) => {
            if (err){ //Check for errors
                console.error("Error executing query: " + JSON.stringify(err));
            }
            else { //Outputting the results and displaying it to the console in JSON Format.
                console.log(JSON.stringify(result));
            }
        }); 

        //Building a query to add the feedback text into the feedback table. 
        let addUserFeedbackResponse = "INSERT INTO feedback (userResponse) " +
        "       VALUES ('" + message.usrFB + "')";

        //Execute query.
        connectionPool.query(addUserFeedbackResponse, (err, result) => {
            if (err){ //Check for errors
                console.error("Error executing query: " + JSON.stringify(err));
            }
            else { //Outputting the results and displaying it to the console in JSON Format.
                console.log(JSON.stringify(result));
            }
        }); 

    }

    //Tis function displays when the user has left or quit the chat application.
    function closeConnection() {
        console.log("The user has left the chat."); //This is the message which is printed on the console.
    }

}