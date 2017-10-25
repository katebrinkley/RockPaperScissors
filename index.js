var userInput = document.getElementsByTagName ('button');
var rockButton = document.getElementById ('rock');
var paperButton = document.getElementById ('paper');
var scissorButton = document.getElementById ('scissors');


for(var i=0; i < userInput.length; i++) {

	userInput[i].onclick = function () {
		var buttonClick = this.getAttribute('id');
		}
	}
}


//Math.floor(Math.random() * maxNumber)