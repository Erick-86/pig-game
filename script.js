const rollDiceBtn = document.querySelector(".roll-dice");
const holdBtn = document.querySelector(".hold-btn");
const newGameBtn = document.querySelector(".new-game-btn");

const playe1rScore = document.getElementById("player--0");
const playe2rScore = document.getElementById("player--1");

//Selcting player elements
const player1El = document.querySelector(".player-0");
const player2El = document.querySelector(".player-1");

//Selecting Player id
const player1 = document.getElementById("player--0--currents-score");
const player2 = document.getElementById("player--1--currents-score");

// Selecting the dice element and setting display to none (hidden)
const dice = document.querySelector(".dice");

// Selecting the player current scores
const player1CurrentScore = document.getElementById(
  "player--0--currents-score"
);
const player2CurrentScore = document.getElementById(
  "player--1--currents-score"
);

const gameInit = () => {
  // Setting the player current score to 0
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;

  playe1rScore.textContent = 0;
  playe2rScore.textContent = 0;
  player1El.classList.remove("winner");
  player2El.classList.remove("winner");
  player1El.classList.add("active-player");
  player2El.classList.remove("active-player");

  //hidind the dice
  dice.style.display = "none";

  //Roll Dice Functionality
  currentScore = 0;

  //Storing the scores
  scores = [0, 0];

  //Selecting active player
  activePlayer = 0;

  playing = true;
};
//Calling gameInit function when the page is reloaded
gameInit();

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
    if (scores[activePlayer] >= 100) {
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

//NEW GAME FUNCTIONALITY
//When new game btn is clicked, all values will be set to the initial values
newGameBtn.addEventListener("click", () => {
  //Calling gameInit function when the new game btn is clicked
  gameInit();
});
