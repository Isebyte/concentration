/*
* Javascript file for Tile class
*
*/

class Tile {

  constructor(x_coordinate, y_coordinate, logo) {
    this.answerVisible = false
    this.isMatched = false
    this.x_coordinate = x_coordinate
    this.y_coordinate = y_coordinate
    this.logo = logo
    this.addEventListener("click", flip);
  }

  flip(){
        //TODO: animation in JQuery
  }
}

checkMatch(a, b){
  if(a.logo == b.logo){
    a.isMatched = true
    b.isMatched = true

    a.answerVisible = true
    b.answerVisible = true
  }
}