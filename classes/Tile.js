/*
* Javascript file for Tile class
*
*/

class Tile {

  constructor(logo) {
    this.answerVisible = false
    this.isMatched = false
    this.logo = logo
    this.addEventListener("click", flip);
  }

  flip(){
        //TODO: animation in JQuery
  }
}

function checkMatch(a, b){
  if(a.logo == b.logo){
    a.isMatched = true
    b.isMatched = true

    a.answerVisible = true
    b.answerVisible = true
  }
}