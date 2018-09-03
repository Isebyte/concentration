/*
* Javascript file for Board class
*
*/

var imgArray = new Array();

imgArray[0] = new Image(100,100);
imgArray[0].src = '../img/amazon.jpg';
imgArray[1] = new Image(100,100);
imgArray[1].src = '../img/cisco.png';
imgArray[2] = new Image(100,100);
imgArray[2].src = '../img/facebook.png';
imgArray[3] = new Image(100,100);
imgArray[3].src = '../img/google.png';
imgArray[4] = new Image(100,100);
imgArray[4].src = '../img/ibm.jpg';
imgArray[5] = new Image(100,100);
imgArray[5].src = '../img/microsoft.png';
imgArray[6] = new Image(100,100);
imgArray[6].src = '../img/oracle.png';
imgArray[7] = new Image(100,100);
imgArray[7].src = '../img/samsung.png';

class Board {

  constructor() {
    this.numPieces = 8;
    this.numPiecesMatched = 0
  }

  /**
   * Fills a board with tiles from randomly shuffled tiles array
   */
  fillBoard(callback) {
    var i;
    var j;
    var isSecond = false;
    for (i = 0; i < this.numPieces; i++) {
      for (j = 0; j < 2; j++) { // fill with two of each
        var newTile = new Tile(imgArray[i].src, false, false);
        tiles.push(newTile);
      }
      j = 0;
    }
    tiles = this.shuffleTiles(tiles);
    callback();
  }

  /**
   * Fills a board with tiles from previously saved game.
   */
  loadBoard(callback) {
    console.log('loadBoard');
    $.getJSON("../data.json", function (data) {
      $.each(data, function (index, value) {
        console.log("pushing tile!");
         tiles.push(new Tile( JSON.parse(JSON.stringify(value.logo)), JSON.parse(JSON.stringify(value.answerVisible)), JSON.parse(JSON.stringify(value.isMatched))));
      });
      console.log("Finished loading board");
      callback();
    });

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
  renderTiles(callback) {
    console.log("appending tiles");
    console.log(tiles);
    var i =0;
    for (i = 0; i< 16; i++) {
      var addTile = document.createElement('div');
      addTile.id = i;
      addTile.className = "card";
      // Create the inner div before appending to the body
      var front = document.createElement('div');
      var back = document.createElement('div');
      front.className = 'front';
      back.className = 'back';
      addTile.appendChild(front);
      addTile.appendChild(back);

      // Then append the whole thing onto the body
      document.getElementsByClassName('wrapper')[0].appendChild(addTile);

      // append images to back of cards
      //console.log(tiles[i].logo);
      var logoImg = tiles[i].logo;
      tiles[i].tileId = "#"+i;
      //console.log(logoImg);
      var tileImg = document.createElement('img');
      tileImg.id = "tileImg";
      tileImg.height = 100;
      tileImg.width = 100;
      tileImg.src = logoImg;
      document.getElementById(addTile.id).getElementsByClassName("back")[0].appendChild(tileImg);
    }
    callback();
  }
}
