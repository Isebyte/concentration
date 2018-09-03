
// Global variables
var tiles = []; // holds array of tiles. Starts empty
var numPiecesChosen = []; // holds array of up to 2 tiles.
var numPiecesMatched = 0;
var current;
var socketio;


/**
   * Main method to be executed on page load
   */
window.onload = function(){
    socketio = io.connect("http://127.0.0.1:8080/");
    console.log("window.onload");
    current = new Game();
    current.newGame();
    document.getElementById('saveAndQuit').addEventListener("click",  current.saveAndQuit);
    document.getElementById('load').addEventListener("click",  current.loadGame);

}
