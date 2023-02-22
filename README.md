# pig-game

# A roll dice game where a player wins when he reaches 100 score

// i)       The game starts with 0 score with player 1 starting
// ii)      A random generated number between 1 and 6 is added to the current score which is 0
// iii)     Each number generated is added to the previous generated number when the dice is rolled until a player rolls 0
// iv)      When 0 0r 1 is rolled, the the player's current score is set to 0 and the game switches to the next player
// v)       When the game is hold, the player's current score is added to the main score and the game is switched to another player
// vi)      The player that getsto 100 score wins the game
// vii)     New Game buttons resets the game


# GAME DEVELOPMENT
ROLLING DICE FUNCTION
When the roll dice btn is clicked, the randon generated number is added to the current score (initial value: 0).
Each numbeer generated is added to the previous number until the 0 is rolled and the layer is switched


HOLD BTN FUNCTIONS
The hold btn adds the total current score to the active player's score and the game is switched
When a player reaches 100 and hold is clicked, the active player wins displaying a winning message

NEW GAME
The new game btn resets the games to it initial values