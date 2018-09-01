/*
* Javascript file for Game class
*
*/

class Game {

	constructor() {
		this.currentBoard = new Board();
		this.score = 0;
	}

	/**
	* Reset game member variables
	*/
	newGameSetup() {
		console.log("Starting a new game...");
		this.score = 0;
		document.getElementById("score").innerHTML = 0;
	}

	/**
	* Upon opening game, user is prompted if they want to load a previously saved
	* game or if they want to have a new board.
	*/
	newGame() {
		this.currentBoard = new Board();
		 if(confirm("Do you wish to load a saved game? Press 'cancel' to start a new game.")) {
			 this.currentBoard.loadBoard();
		 } else {
			 this.newGameSetup();
			 this.currentBoard.fillBoard();
		 }
	}

	/**
	*	Game is done. Restart logic from newGame()
	*/
	gameCompleted() {
<<<<<<< HEAD
		alert("Game completed! Final score: " + this.score);
		this.newGame();
=======
		console.log("Game completed! Final score: " + this.score)
		this.newGame()
>>>>>>> c68c0291ab12e7da80ae799309fce88b55fea218
	}

}
