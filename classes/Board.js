/*
* Javascript file for Board class
*
*/

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = '../concentration/img/amazon.jpg';
imgArray[1] = new Image();
imgArray[1].src = '../concentration/img/cisco.png';
imgArray[2] = new Image();
imgArray[2].src = '../concentration/img/facebook.png';
imgArray[3] = new Image();
imgArray[3].src = '../concentration/img/google.png';
imgArray[4] = new Image();
imgArray[4].src = '../concentration/img/ibm.jpg';
imgArray[5] = new Image();
imgArray[5].src = '../concentration/img/microsoft.png';
imgArray[6] = new Image();
imgArray[6].src = '../concentration/img/oracle.png';
imgArray[7] = new Image();
imgArray[7].src = '../concentration/img/samsung.png';

class Board {

  constructor() {
    this.numPieces = 16;
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
        var newTile = new Tile(imgArray[i], false, false);
        this.tiles[i] = newTile;
      }
      j = 0;
    }
    console.log("filling board: " + this.tiles);
    this.tiles = this.shuffleTiles(this.tiles);
    this.renderTiles();
  }

  /**
   * Fills a board with tiles from previously saved game.
   */
  loadBoard() {
    var prev_game = this.textParse(); // get array from save.json file
    this.tiles = prev_game;
    this.renderTiles();
  }

  /**
   * Parses tile array from locally saved text file
   * @param {*} filename
   * @return tiles array
   */
  textParse() {
    // load in JSON data from text file then parse into an array of tile objects
    var parsedTiles = [];
    // $.getJSON("../saves/save.json", function (data) {
    //   for(var i in data) {
    //     parsedTiles.push([i, JSON.parse(data[i])]);
    //   });
    // handle any errors
    //.error(function() { alert("Error. Please refresh the page"); });
    return parsedTiles;
  }

  /*
  * Shuffles the contents of an array
  * @param array e
  * referenced from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  */
  shuffleTiles(array) {
    console.log("shuffling cards");
    for (let i = array.length - 1; i > 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  /**
  * Physically renders tiles onto the screen
  */
  renderTiles() {
    console.log("appending tiles");
    var i;
    for (i = 0; i< this.numPieces; i++) {
      var addTile = document.createElement('div');
      addTile.id = "card-" + i;
      addTile.class = "card";
      // Create the inner div before appending to the body
      var front = document.createElement('div');
      var back = document.createElement('div');
      front.className = 'front';
      back.className = 'back';
      addTile.appendChild(front);
      addTile.appendChild(back);

      // Then append the whole thing onto the body
      document.getElementById('wrapper')[0].appendChild(addTile);
      document.getElementById(addTile.id).addEventListener("click",flip());
      // append images to back of cards
      var logoImg = this.tiles[i].logo;
      console.log(logoImg);
      document.getElementById("back").appendChild(logoImg);
    }
  }


}
