// variables
let randomNumber = 0;
let roundScore = 0;
let activePlayer = 0;
let scores = [0, 0];

// l'élément dice
const dice = document.querySelector("#dice");
// Bouton  jeter dice
const roll = document.querySelector("#reload");
// le bouton Hold
const hold = document.querySelector("#download");
//bouton jeu
const newGame = document.querySelector("#new-game");
// joueurs
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");

// Lancer les dés et afficher le score 
const rollDice = function () {
  // Créer un nombre aléatoire
  randomNumber = Math.floor(Math.random() * 6) + 1;

  // Afficher les dés
  dice.innerHTML = `<img class="dice" src="./images/dice/dice-${randomNumber}.png" alt="dice ${randomNumber}">`;

  // Score
  if (randomNumber !== 1) {
    roundScore += randomNumber;
    // Afficher le score 
    document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
  } else {
    changePlayer();
  }
};

// Changer de joueur
const changePlayer = function () {
  roundScore = 0;
  document.querySelector(`#current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("active-player");
  player1.classList.toggle("active-player");
};

// le score
const holdScore = function () {
  // Ajouter le score actuel
  scores[activePlayer] += roundScore;
  // score affichagé
  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

  // Vérifier le score du joueur
  if (scores[activePlayer] >= 100) {
    document.querySelector(`.playerName-${activePlayer}`).classList.add("winner-player");
    document.querySelector(`.playerName-${activePlayer}`).innerHTML = `<p>winner !</p>`;

  } else {
    // Changer de joueur
    changePlayer();
  }
};

// New game
const replay = function () {
  document.location.reload();
};

// les événements de clickables
roll.addEventListener("click", rollDice, false);
hold.addEventListener("click", holdScore, false);
newGame.addEventListener("click", replay, false);