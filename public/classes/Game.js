/*
 * Javascript file for Game class
 *
 */

/**
 * Contains the board with tiles, and can load and save games.
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
    //document.getElementById("score").innerHTML = "Score:  " + this.score;
  }

  /**
   * Upon opening game, user is prompted if they want to load a previously saved
   * game or if they want to have a new board.
   */
  newGame() {
		var current = this;
    $(".wrapper").empty(); // clear everything
    this.currentBoard = new Board();
    tiles = []; // empty tile array
    numPiecesChosen = []; // reset
    numPiecesMatched = 0;
    if (confirm("Do you wish to load a saved game? Press 'cancel' to start a new game.")) {
      this.currentBoard.loadBoard(function() {
        current.currentBoard.renderTiles(function() {
          current.addFlip(current);
        });
      });
    } else {
      this.newGameSetup();
      this.currentBoard.fillBoard(function() {
        current.currentBoard.renderTiles(function() {
          current.addFlip(current);
        });
      });

    }
  }

  /**
   * Load game function to render saved files from data.json
   */
  loadGame() {
    alert("Loading saved game!");
    tiles = []; // empty tile array
    numPiecesChosen = []; // reset
    numPiecesMatched = 0;
    $(".wrapper").empty(); // clear everything
    this.currentBoard = new Board();
    this.currentBoard.loadBoard(function() {
      current.currentBoard.renderTiles(function() {
        current.addFlip(current);
      });
    });
  }

  addFlip(game) {
    // add flipping to each tile
    // See https://nnattawat.github.io/flip/
    $(".card").flip({
      trigger: 'click'
    });
    console.log("Appending flip");

    // flip cards that have answerVisible = true
    var i;
    for (i = 0; i < tiles.length; i++) {
      if (tiles[i].answerVisible == true) {
        $(tiles[i].tileId).flip(true);
      }
    }

    $(".card").on('flip:done', function() {
      setVisible(this.id, game); // in Game.js
    });


  }

  /**
   *	Game is done. Restart logic from newGame()
   */
  gameCompleted() {
    console.log("Game completed!");
    //this.newGame()
    alert("Game completed! Please refresh the screen to play again.");
  }
  /**
   *	User chooses to save mid-game. Downloads file of current game state.
   */
  saveAndQuit() {
    alert("Game was saved!");
    var content = JSON.stringify(tiles);
    console.log(socketio.connected);
    socketio.emit("writeJSON", content);
    console.log("sent JSON to server side");

  }

}

/**
 * If card is flipped, set tile answerVisible to true
 */
function setVisible(id, game) {
  // match card id to tile objects
  console.log(id + " flipped");
  var i = parseInt(id, 10); // convert string to int
  numPiecesChosen.push(tiles[i]);
  //console.log(numPiecesChosen );
  if (numPiecesChosen.length == 2) {
    //debugger;
    this.finishedOneMove(id, game);
  }
}

/**
 * Determines if one move has been made i.e. two pieces have been chosen
 */
function finishedOneMove(id, game) {
  //console.log('finishedOneMove');
  console.log(numPiecesChosen);
  // temporarily block all other clicks
  $("#blockDiv").show();
  if (numPiecesChosen[0].checkMatch(numPiecesChosen[1]) && numPiecesChosen[0].tileId != numPiecesChosen[1].tileId) {
    console.log("Match made");
    numPiecesMatched += 2;

    // strip # from id
    one = tiles.indexOf(numPiecesChosen[0]);
    two = tiles.indexOf(numPiecesChosen[1]);
    tiles[one].answerVisible = true;
    tiles[two].answerVisible = true;

    // disable reflipping
    $(numPiecesChosen[0].tileId).off(".flip");
    $(numPiecesChosen[1].tileId).off(".flip");
    numPiecesChosen = [];
    // console.log("Turned off flipping for "+ id);
    if (numPiecesMatched === 16) {
      game.gameCompleted();
    }
    $("#blockDiv").hide(); // allow clicks
  } else {
    // unflip tiles
    var timeout = setTimeout(
      function() {
        console.log("Not a match");
        $(numPiecesChosen[0].tileId).flip(false);
        $(numPiecesChosen[1].tileId).flip(false);
        console.log("unflipped");
        numPiecesChosen = []; // reset
        $("#blockDiv").hide(); // allow clicks
      }, 500);
  }
}
