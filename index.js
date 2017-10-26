/* var userInput = document.getElementsByTagName ('button');


	for(var i=0; i < userInput.length; i++) { 
	 
	  userInput[i].onclick = function () { 

	  	var randomNumber = Math.floor(Math.random() * 3);
	  	var options = ["rock", "paper", "scissors"];
	    var buttonClick = this.getAttribute('id'); 
	    var computerInput = options[randomNumber];


	    console.log('userInput',buttonClick);
	    console.log('computerInput',computerInput);

	    if (buttonClick === "rock") {

	    	if (computerInput === "paper") {
	    		console.log('cpu wins');
	    	} else if (computerInput === 'scissors') {
	    		console.log('user wins');
	    	} else if (computerInput === 'rock') {
	    		console.log('its a tie');
	    	}
	    	
	    } 
	} 
} */
//Math.floor(Math.random() * maxNumber)

/* FRESH START */
 

$(document).ready(function() {
	var computerInput = Math.floor(Math.random() * 3);
	var options = ["rock", "paper", "scissors"];

	//var something = $("").val();
	console.log(computerInput);
	}
);