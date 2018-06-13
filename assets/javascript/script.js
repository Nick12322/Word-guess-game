// Set random letters for computer to pick
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerGuess);

var userGuessList = [];

var guessesLeft = 7;

var wins = 0;

var losses = 0;





// Logic for comparing computer letter to player input

document.onkeydown = function (event) {

    var userGuess = event.key;

    userGuessList.push(userGuess);

    document.getElementById("guesses").innerHTML = userGuessList;

    if (userGuessList.length == 6 ) {
        losses++;
        computerGuess;
        userGuessList = [];
        guessesLeft == seven;
    };

    
    if (userGuess != computerGuess) {
        guessesLeft--;
    };

    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 7;
        userGuessList = [];
        computerGuess;
    };

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;

}

// Show player letter input on screen

// Increase wins or losses, guesses left.