/*
* Javascript file for Game class
*
*/

class Game {

	constructor() {
		this.score = 0;
	}

	/**
	* upon opening game user is prompted if they want to load a previously saved
	* game or if they want to have a new board.
	*/
	newGame() {
		 if(confirm("Do you wish to load a saved game?")) {
			 // check to see if a saved game exists
			 $.ajax({
  		 		type: 'HEAD', // make a HTTP HEAD request with Ajax
  				url: '../saves/save.txt',
  				complete: function (xhr){
    			if (xhr.status == 404){
      			newGameSetup();
    			}
  			}
			});

		 } else {
				newGameSetup();

		 }
	}

	newGameSetup() {
		alert("No saved game exists so starting a new game");
		this.score = 0;
		document.getElementbyId("score").innerHTML = 0;
		
	}

	gameCompleted() {

	}

}
