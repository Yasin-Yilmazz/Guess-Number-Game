const between = document.getElementById("between");
const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submitBtn");
const oldGuesses = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".remainingGuess");
const startOver = document.querySelector(".resultParas");
const lowOrHi = document.querySelector(".lowOrHi");
let randInt = Math.floor(Math.random() * 100) + 1;
const form = document.querySelector("form");
const restart = document.createElement("p");

let numGuess = 5;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const guess = parseInt(guessInput.value);
  validateGuess(guess);
});

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Please enter a valid guess!");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1!");
  } else if (guess > 100) {
    alert("Please enter a number less than 100!");
  } else {
    if (numGuess === 1) {
      displayGuesses(guess);
      lowOrHi.innerHTML = `Game over! Number was ${randInt}`;
      endGame();
    } else {
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (g) => {
  if (g === randInt) {
    lowOrHi.innerHTML = `Congrats You Win!!`;
    endGame();
  } else if (g < randInt) {
    lowOrHi.innerHTML = `Go higher!`;
  } else if (g > randInt) {
    lowOrHi.innerHTML = `Go lower`;
  }
};

const displayGuesses = (gues) => {
  guessInput.value = "";
  oldGuesses.innerHTML += `${gues} `;
  numGuess--;
  remainingGuess.innerHTML = `${numGuess}`;
};

const endGame = () => {
  guessInput.value = "";
  guessInput.setAttribute("disabled", "");

  restart.innerHTML = `<button type="submit" class="btn btn-outline-success mt-3 mb-2" id = "newGame" >Start New Game</button>`;
  startOver.appendChild(restart);
  newGame();
};

const newGame = () => {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function () {
    randInt = parseInt(Math.random() * 100 + 1);
    numGuess = 5;
    remainingGuess.innerHTML = numGuess;
    oldGuesses.innerHTML = "";
    lowOrHi.innerHTML = "";
    guessInput.removeAttribute("disabled");
    startOver.removeChild(restart);
  });
};
