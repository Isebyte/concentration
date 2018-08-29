/*
* Javascript file for Board class
*
*/

class Board {

  constructor(tiles) {
    this.tiles = tiles; // holds array of tiles
  }

  /**
   * Fills a board with tiles from randomly shuffled tiles array
   */
  fillBoard() {
    
  }

  /**
   * Fills a board with tiles from previously saved game. 
   */
  loadBoard() {

  }

  /**
   * Parses tile array from locally saved text file 
   * @param {*} filename 
   */
  textParse(filename) {

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
