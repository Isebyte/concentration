/*
* Javascript file for Board class
*
*/

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = '../img/amazon.jpg';
imgArray[1] = new Image();
imgArray[1].src = '../img/cisco.jpg';
imgArray[2] = new Image();
imgArray[2].src = '../img/facebook.jpg';
imgArray[3] = new Image();
imgArray[3].src = '../img/google.jpg';
imgArray[4] = new Image();
imgArray[4].src = '../img/ibm.jpg';
imgArray[5] = new Image();
imgArray[5].src = '../img/microsoft.jpg';
imgArray[6] = new Image();
imgArray[6].src = '../img/oracle.jpg';
imgArray[7] = new Image();
imgArray[7].src = '../img/samsung.jpg';

class Board {

  constructor() {
    this.numPieces = numPieces;
    this.tiles = []; // holds array of tiles. Starts empty
  }

  /**
   * Fills a board with tiles from randomly shuffled tiles array
   */
  fillBoard() {
    var i;
    var j;
    for (i = 0; i < this.numPieces; i++) {
      for (j = 0; j < 2; j++) { // fill with two of each
        let newTile = new Tile(imgArray[i], false, false);
      }
      j = 0;
    }
    this.tiles = shuffleTiles(tiles);
  }

  /**
   * Fills a board with tiles from previously saved game.
   */
  loadBoard() {
    prev_game = textParse(); // get array from save.json file
    this.tiles = prev_game;
  }

  /**
   * Parses tile array from locally saved text file
   * @param {*} filename
   * @return tiles array
   */
  textParse() {
    // load in JSON data from text file then parse into an array of tile objects
    var parsedTiles = [];
    $.getJSON("../saves/save.json", function (data) {
      for(var i in data) {
        parsedTiles.push([i, JSON.parse(data[i]]));
      }
    });
    // handle any errors
    .error(function() { alert("Error. Please refresh the page"); })
    return parsedTiles;
  }

  /*
  * Shuffles the contents of an array
  * @param array e
  * referenced from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  */
  shuffleTiles(array) {
    for (let i = array.length - 1; i > 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return e;
  }

  /**
  * Physically renders tiles onto the screen
  */
  renderTiles() {
    
  }


}
