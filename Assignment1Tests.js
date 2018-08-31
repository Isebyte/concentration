const matchTest = require('tape');  //test if matching works

matchTest('checkMatch should return true if the tiles match', function(t){
		t.ok(checkMatch(a, b));
                t.end();
	});

const setupTest = require('tape'); //test setup of game

setupTest('all values from setup should be 0', function(t){
        t.is(newGameSetup());
        t.end();
});

const loadTest = require('tape'); //test loading of a game

loadTest('game should load properly', function(t){
        t.is(newGame());
        t.end();
});

const fillTest = require('tape'); //test of filling the board

fillTest('board should be filled properly', function(t){
        t.is(fillBoard());
        t.end();
});