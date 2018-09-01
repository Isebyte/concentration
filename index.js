
// Global variables
var tiles = []; // holds array of tiles. Starts empty
var numPiecesChosen = []; // holds array of up to 2 tiles.
var numPiecesMatched = 0;
var current;

/**
   * Main method to be executed on page load
   */
window.onload = function(){
    console.log("window.onload");
    current = new Game();
    current.newGame();
}
