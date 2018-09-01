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
		$( ".wrapper" ).empty(); // clear everything
		this.currentBoard = new Board();
		tiles = []; // empty tile array
		numPiecesChosen = []; // reset
		numPiecesMatched = 0;
		 if(confirm("Do you wish to load a saved game? Press 'cancel' to start a new game.")) {
			 this.currentBoard.loadBoard();
		 } else {
			 this.newGameSetup();
			 this.currentBoard.fillBoard();
		 }

		 var current = this;
		 // add flipping to each tile
		 // See https://nnattawat.github.io/flip/
		 $(".card").flip({ trigger: 'click' });

		 $(".card").on('flip:done',function(){
			 //console.log(current);
				 setVisible(this.id, current); // in Game.js

		 });

	}

	/**
	*	Game is done. Restart logic from newGame()
	*/
	gameCompleted() {
		console.log("Game completed! Final score: " + this.score);
		this.newGame()
	}


}

/**
* If card is flipped, set tile answerVisible to true
*/
function setVisible(id,game) {
	// match card id to tile objects
	//console.log(id + " flipped");
	var i = parseInt(id, 10); // convert string to int
	tiles[i].answerVisible = true;

	numPiecesChosen.push(tiles[i]);
	//console.log(numPiecesChosen );
	if(numPiecesChosen.length == 2){
		//debugger;
		this.finishedOneMove(id, game);
	} else {
		$(numPiecesChosen[0].tileId).off('click'); // cannot unflip first chosen tile
	}
}

/**
 * Determines if one move has been made i.e. two pieces have been chosen
 */
function finishedOneMove(id,game){
		//console.log('finishedOneMove');
		// temporarily block all other clicks
		$("#blockDiv").show();
		if(numPiecesChosen[0].checkMatch(numPiecesChosen[1])){
			numPiecesMatched += 2;
			game.score += 100;
			document.getElementById("score").innerHTML = game.score;

			// disable reflipping
			$(numPiecesChosen[0].tileId).off('click');
			$(numPiecesChosen[1].tileId).off('click');
			numPiecesChosen = [];
			// console.log("Turned off flipping for "+ id);
			if(numPiecesMatched === 16){
				game.gameCompleted();
			}
			 $("#blockDiv").hide(); // allow clicks
		} else {
			// unflip tiles
			var timeout = setTimeout(
			 function()
			 {
				 //console.log("Not a match");
				 //debugger;
				 $(numPiecesChosen[0].tileId).on('click', function() {$(".card").flip({ trigger: 'click' });});
				 $(numPiecesChosen[0].tileId).off('flip:done'); // prevent double callback
				 $(numPiecesChosen[1].tileId).off('flip:done');
				 $(numPiecesChosen[0].tileId).flip(false);
				 $(numPiecesChosen[1].tileId).flip(false);


				 // reinit callback
				 $(numPiecesChosen[0].tileId).on('flip:done',function(){
					 //console.log("reinit flip callback");
						 setVisible(this.id, game); // in Game.js

				 });
				 $(numPiecesChosen[1].tileId).on('flip:done',function(){
					 //console.log("reinit flip callback");
						 setVisible(this.id, game); // in Game.js

				 });
				 numPiecesChosen = []; // reset
				 $("#blockDiv").hide();  // allow clicks
			 }, 500);


	}


 }
