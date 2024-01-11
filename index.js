

// addEventListener(type, listener)
// type:- type of event
// listener:- function to be carried out when event happens (no parentheses as it would make the javascript to redirect to call the function despite event not happened)

// this only selects first button
// document.querySelector("button").addEventListener("click", buttonClick);
// function buttonClick() {
    //     alert("I got clicked!");
// }

// to select all the buttons we loop throught all buttons
// all buttons have .drum class

// 137:- Adding event listener to buttons
// 140:- How to add sound to the website


// Button Event Listener
// 'this' is the identity of the button that triggered the event 
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        addButtonAnimation(buttonInnerHTML);
    }
    );
}


// Keyboard Event listener
// event:- lets us tap into the event that triggered the event listener
// try this
// console.log(event);
document.addEventListener("keypress", function(event)
{
    var keyPressed =  event.key;
    playSound(keyPressed);
    addButtonAnimation(keyPressed);

});


function playSound(switchKey)
{
    switch (switchKey) {
        case "w":
            var wAudio = new Audio("./sounds/tom-1.mp3");
            wAudio.play();
            break;
    
        case "a":
            var aAudio = new Audio("./sounds/tom-2.mp3");
            aAudio.play();
            break;
        
        case "s":
            var sAudio = new Audio("./sounds/tom-3.mp3");
            sAudio.play();
            break;
        
        case "d":
            var dAudio = new Audio("./sounds/tom-4.mp3");
            dAudio.play();
            break;    

        case "j":
            var jAudio = new Audio("./sounds/kick-bass.mp3");
            jAudio.play();
            break;
        
        case "k":
            var kAudio = new Audio("./sounds/snare.mp3");
            kAudio.play();
            break;
        
        case "l":
            var lAudio = new Audio("./sounds/crash.mp3");
            lAudio.play();
            break;
        
        default:
            break;
    }
}

function addButtonAnimation(currentKey)
{
    // all buttons have class "l", "w", we have to add "." to access the class to use querySelctor function
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout( function() {
        activeButton.classList.remove("pressed")
    }, 100);
}