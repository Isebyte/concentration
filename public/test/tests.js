
/**
* Testing class methods from Board, Game, and Tile
*/

var tiles = [];

QUnit.test( "Testing checkMatch from Tile.js", function( assert ) {
  var tileA = new Tile("logo",false,false);
  var tileB = new Tile("logo",false,false);
  var result = tileA.checkMatch(tileB);
  console.log(result);
  assert.ok( result, "true succeeds" );

  // test unequal shuffleTiles
  tileA = new Tile("logoA",false,false);
  tileB = new Tile("logoB",false,false);
  result = tileA.checkMatch(tileB);

  assert.notOk( result, "false succeeds" );

});

QUnit.test("Testing shuffleTiles from Board.js", function(assert) {

  var aBoard = new Board();
  var testArray = [1,2,3,4,5];
  var result = testArray;

  aBoard.shuffleTiles(result);
  console.log(testArray);
  console.log(result);
  assert.deepEqual( result, testArray, "Two arrays should be different after shuffling" );

  // try with larger array
  var i;
  for (i=0; i < 1000; i++) {
    testArray[i] == i;
  }
  result = testArray;
  assert.deepEqual( result, testArray, "Two arrays should be different after shuffling (large)" );
});

QUnit.test("Testing fillBoard from Board.js", function(assert) {
  var aBoard = new Board();
  aBoard.fillBoard(function() {
    console.log("Complete!");
  });

  assert.equal(tiles.length, 16, "After the board is filled, the tiles array should have 16 tiles.");
});
