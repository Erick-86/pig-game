const rollDiceBtn = document.querySelector(".roll-dice");
const holdBtn = document.querySelector('.hold-btn')
const newGameBtn = document.querySelector('.new-game-btn')
const playerScore = document.querySelectorAll('.player-score')
const currentScore = document.querySelectorAll('.current-score')

// Selecting the dice element and setting display to none (hidden)
const dice = document.querySelector('.dice')
dice.style.display = 'none'

// Selecting the player current scores
const player1CurrentScore = document.getElementById("player--0--currents-score");
const player2CurrentScore = document.getElementById("player--1--currents-score");

// Setting the player current score to 0
player1CurrentScore.textContent = 0
player2CurrentScore.textContent = 0


