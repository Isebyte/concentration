/*
* Javascript file for Game class
*
*/

class Game {



	constructor() {
		this.score = 0;
		this.board = new Board()
	}

	/**
	* upon opening game user is prompted if they want to load a previously saved
	* game or if they want to have a new board.
	*/
	 newGame() {
		 if(confirm("Do you wish to load a saved game?")) {
			 // check to see if a saved game exists
			 this.board.loadBoard() //TODO: PASS INFO
			
		 } else {
			 alert("Starting a new game");
			 this.score = 0;
			 document.getElementbyId("score").innerHTML = 0;
			 this.board.fillBoard()
		 }
		 
	}

	 gameCompleted() {

	}

}

