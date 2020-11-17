/* what youll need */
/* 
    premade messages
        they only reply once you reply
        messages
            greeting
            introduction, ask for name 
            reply with name
            ask for information 
            reply with information 
    include accurate time
*/

/*
write a message in the input box
click send message 
input box deletes its content 
message appears on the screen
time stamp appears on the message

chatBot replies with a message that appears on the left hand side
includes time stamp

as you add more messages, your screen keeps growing, you can scroll up and down
*/



// write a message and create a node on the screen 
function newTextMessage () {
    let textValue = document.createTextNode(document.getElementById("input").value);
    newScreenMsg(textValue);
    console.log("newtextmessage");
    console.log(textValue)
}

//send a bot message a couple of seconds after you click button
function chatBotMessage() {
    newBotMsg(getBotMessage())
    console.log("chatbot message")
}

//create new user message on screen
function newScreenMsg(text){
    let newTextBox = document.createElement("div");
    let newTextContent = document.createElement("p"); 
    $(newTextBox).addClass("bubble user").append(newTextContent);
    $(newTextContent).append(text);

    let screenSpace = document.getElementById("screen"); 
    $(screenSpace).append(newTextBox);

    
    //add time
    let timeStamp = new Date().toLocaleTimeString();
    let timeSpace = document.createElement("p");
    $(timeSpace).addClass("time");
    $(newTextBox).append(timeSpace)
    $(timeSpace).append(timeStamp);
    console.log(timeStamp);
}
//create new bot message on screen
function newBotMsg(text){
    let newTextBox = document.createElement("div");
    let newTextContent = document.createElement("p"); 
    $(newTextBox).addClass("bubble bot").append(newTextContent);
    $(newTextContent).append(text);

    let screenSpace = document.getElementById("screen"); 
    $(screenSpace).append(newTextBox);

    addTime();

    function addTime() {

        //add time
        let timeStamp = new Date().toLocaleTimeString();
        let timeSpace = document.createElement("p");
        $(timeSpace).addClass("time");
        $(newTextBox).append(timeSpace)
        $(timeSpace).append(timeStamp);
        console.log(timeStamp);
    }
    //add time
    // let timeStamp = new Date().toLocaleTimeString();
    // let timeSpace = document.createElement("p");
    // $(timeSpace).addClass("time");
    // $(newTextBox).append(timeSpace)
    // $(timeSpace).append(timeStamp);
    // console.log(timeStamp);
}






// generate messages the chatbot will return 
var chatBotMessages = [
    'Do you have any pets? I have two cats!', 'Where are you from?', 
    'What is your favorite type of music?', 'What is your favorite food?',  
    'Would you rather live in a desert or in the North Pole?', 
]

var wouldYouRather =[
    'Would you rather live in a desert or in the North Pole?', 
    'Would you rather eat only sweet things or eat only salty things?',
    'Would you rather have to sing in front of strangers or in front of friends?',
    'Would you rather run a mile or hike for an hour?',
    'Would you rather have a dog or a cat?',
    'Would you rather go to sleep or have a party?'
]
//grab a random message from the array
function getBotMessage() {
    console.log(chatBotMessages[Math.floor(Math.random() * chatBotMessages.length)]);
  
    return(chatBotMessages[Math.floor(Math.random() * chatBotMessages.length)]);
}  

