/*
* Javascript file for Game class
*
*/

class Game {

	constructor() {
		this.score = 0;
	}

	/**
	* Reset game member variables
	*/
	newGameSetup() {
		alert("Starting a new game...");
		this.score = 0;
		document.getElementById("score").innerHTML = 0;
	}

	/**
	* Upon opening game, user is prompted if they want to load a previously saved
	* game or if they want to have a new board.
	*/
	newGame() {
			var currentBoard = new Board();
		 if(confirm("Do you wish to load a saved game? Press 'cancel' to start a new game.")) {
			 currentBoard.loadBoard();
		 } else {
			 this.newGameSetup();
			 currentBoard.fillBoard();
		 }
	}

	/**
	*	Game is done. Restart logic from newGame()
	*/
	gameCompleted() {
		alert("Game completed! Final score: " + this.score)
		newGame()
	}

}
