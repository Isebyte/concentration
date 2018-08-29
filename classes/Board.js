/*
* Javascript file for Board class
*
*/

class Board {

  constructor() {
    this.numPieces = numPieces;
    this.tiles = tiles; // holds array of tiles
  }

  /**
   * Fills a board with tiles from randomly shuffled tiles array
   */
  fillBoard() {
    for (let j = 0; j < Math.pow(this.numPieces, 2); j++){
      for (let k = 0; k < Math.pow(this.numPieces, 2); k++){
       let piece = new Tile(answerVisible = false, isMatched= false, logo = '1' );
       this.tiles[j][k] = piece;
    }
  }
    this.tiles = shuffleTiles(tiles);
  }

  /**
   * Fills a board with tiles from previously saved game.
   */
  loadBoard() {
    prev_game = textParse();
      for (let i = 0; i < prev_game.numPieces; i++){
        for (let j = 0; j < Math.pow(prev_game.numPieces, 2); j++){
          for (let k = 0; k < Math.pow(prev_game.numPieces, 2); k++){
           let piece = new Tile(prev_game.tile[i]);
           this.tiles[j][k] = piece;
        }
      }
    }
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


}
