// Set random letters for computer to pick
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function resetGame() {
    guessesLeft = 7;
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    userGuessList = [];
    console.log(computerGuess);
}

var userGuessList = [];

var guessesLeft = 7;

var wins = 0;

var losses = 0;

var computerGuess = ''





// Logic for comparing computer letter to player input
resetGame();

document.onkeydown = function (event) {


    var userGuess = event.key;

    userGuessList.push(userGuess);
    
    document.getElementById("guesses").innerHTML = userGuessList;

    if (userGuess != computerGuess) {
        guessesLeft--;
    };

    if (userGuessList.length == 7 ) {
        resetGame();
        losses++;
    };

    if (userGuess === computerGuess) {
        resetGame();
        wins++;
    };



    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;

}
