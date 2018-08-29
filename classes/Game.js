/*
* Javascript file for Game class
*
*/

class Game {

	constructor(tiles) {
		this.tiles = tiles;
		this.score = 0;
	}

  	/*
 	* Shuffles the contents of an array
 	* @param array e
 	* referenced from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 	*/
 	function shuffle(array) {
 		for (let i = array.length - 1; i > 0; --i) {
 			const j = Math.floor(Math.random() * (i + 1));
 			[array[i], array[j]] = [array[j], array[i]];
 		}
 		return e;
 	}

}
