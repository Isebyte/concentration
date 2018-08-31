/*
* Javascript file for Board class
*
*/

var imgArray = new Array();

imgArray[0] = new Image(200,200);
imgArray[0].src = '../concentration/img/amazon.jpg';
imgArray[1] = new Image(200,200);
imgArray[1].src = '../concentration/img/cisco.png';
imgArray[2] = new Image(200,200);
imgArray[2].src = '../concentration/img/facebook.png';
imgArray[3] = new Image(200,200);
imgArray[3].src = '../concentration/img/google.png';
imgArray[4] = new Image(200,200);
imgArray[4].src = '../concentration/img/ibm.jpg';
imgArray[5] = new Image(200,200);
imgArray[5].src = '../concentration/img/microsoft.png';
imgArray[6] = new Image(200,200);
imgArray[6].src = '../concentration/img/oracle.png';
imgArray[7] = new Image(200,200);
imgArray[7].src = '../concentration/img/samsung.png';

class Board {

  constructor() {
    this.numPieces = 16;
    this.tiles = []; // holds array of tiles. Starts empty
    this.numPiecesMatched = 0
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
  textParse(filename) {
    console.log('textParse()')
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
      document.getElementsByClassName('wrapper')[0].appendChild(addTile);
      // link flip animation to tile
      $(addTile.id).flip({
        axis: 'x',
        trigger: 'click'
      });
      // append images to back of cards
      var logoImg = this.tiles[i].logo;
      console.log(logoImg);
      document.getElementsByClassName("back")[0].appendChild(logoImg);
    }
  }

 /**
  * Determines if one move has been made i.e. two pieces have been chosen
  */
  finishedOneMove(){
    console.log('finishedOneMove')
    let numPiecesChosen = 0
    for (let i = 0; i < this.numPieces; i++){
      if(this.tiles[i].answerVisible){
        numPiecesChosen += 1
      }
    }

    if(numPiecesChosen == 2){
      if(checkMatch()){
        this.numPiecesMatched += 2
        if(this.numPiecesMatched == this.numPieces){
          gameCompleted()
        }
      }
    }  

  }


}
