/*
* Javascript file for Tile class
*
*/

class Tile {

  constructor(logo, isMatched, answerVisible) {
    this.answerVisible = answerVisible;
    this.isMatched = isMatched;
    this.logo = logo;
    this.tileId = "";
  }

  /**
  * Compares two tiles, returns true if they are matching
  */
  checkMatch(b) {
    if(this.logo == b.logo){
      this.isMatched = true
      b.isMatched = true

      this.answerVisible = true
      b.answerVisible = true

      return true;
    } else {
      return false; }
  }
}
