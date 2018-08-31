/*
* Javascript file for Tile class
*
*/

class Tile {

  constructor(logo, isMatched, answerVisible) {
    this.answerVisible = answerVisible
    this.isMatched = isMatched
    this.logo = logo
  }

  /**
  * Compares two tiles, returns true if they are matching
  */
  checkMatch(a, b) {
    if(a.logo == b.logo){
      a.isMatched = true
      b.isMatched = true

      a.answerVisible = true
      b.answerVisible = true

      return true;
    } else {
      return false; }
  }
}
