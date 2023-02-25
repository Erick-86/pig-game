const rollDiceBtn = document.querySelector(".roll-dice");
const holdBtn = document.querySelector(".hold-btn");
const newGameBtn = document.querySelector(".new-game-btn");
const playerScore = document.querySelectorAll(".player-score");

//Selcting player elements
const player1El = document.querySelector(".player-0");
const player2El = document.querySelector(".player-1");

//Selecting Player id
const player1 = document.getElementById("player--0--currents-score");
const player2 = document.getElementById("player--1--currents-score");
console.log(player1, player2);

// Selecting the dice element and setting display to none (hidden)
const dice = document.querySelector(".dice");
dice.style.display = "none";

// Selecting the player current scores
const player1CurrentScore = document.getElementById(
  "player--0--currents-score"
);
const player2CurrentScore = document.getElementById(
  "player--1--currents-score"
);

// Setting the player current score to 0
player1CurrentScore.textContent = 0;
player2CurrentScore.textContent = 0;

//Roll Dice Functionality
let currentScore = 0;

//Storing the scores
const scores = [0, 0];

//Selecting active player
let activePlayer = 0;

let playing = true;

//Switching Player Function
const switchPlayer = function () {
  document.getElementById(
    `player--${activePlayer}--currents-score`
  ).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle("active-player");
  player2El.classList.toggle("active-player");
};

const rowDice = () => {
  if (playing) {
    //Generating a dice number
    const randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    //Displaying Dice
    dice.style.display = "block";
    dice.src = `/img/dice-${randomNumber}.png`;

    //Check for rolled dice, if 1 switch to the next player
    if (randomNumber !== 1) {
      //Add dice to current score
      currentScore += randomNumber;
      document.getElementById(
        `player--${activePlayer}--currents-score`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
};
rollDiceBtn.addEventListener("click", rowDice);

//HOLDING THE CURRENT SCORE
holdBtn.addEventListener("click", () => {
  if (playing) {
    //Add the current score to the active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`player--${activePlayer}`).textContent =
      scores[activePlayer];

    //If the active player's score is at least 100, the player wins
    if (scores[activePlayer] >= 10) {
      playing = false;

      //Hiding the dice when a player wins
      dice.style.display = "none";

      //Switch player if it is at least 100
      document.querySelector(`.player-${activePlayer}`).classList.add("winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("active-player");
    } else {
      //Switch the player
      switchPlayer();
    }
  }
});
