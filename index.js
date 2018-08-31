/**
   * Main method to be executed on page load
   */
window.onload = function(){
    console.log("window.onload");
    let current = new Game();
    current.newGame();
    // add flipping to cards
    $(".card").flip({
      trigger: 'click'
     });
}
