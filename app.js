const between = document.getElementById("between");
const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submitBtn");
const guesses = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".remainingGuess");
const lowOrHi = document.querySelector(".lowOrHi");
let randInt = Math.floor(Math.random() * 100) + 1;
const form = document.querySelector("form");
// let previousGuesses = [];
let numGuess = 4;

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
    // previousGuesses.push(guess);

    if (numGuess < 1) {
      lowOrHi.innerHTML = `Game over! Number was ${randInt}`;
    } else {
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (g) => {
  if (g === randInt) {
    lowOrHi.innerHTML = `Congrats You Win!!`;
  } else if (g < randInt) {
    lowOrHi.innerHTML = `Go higher!`;
  } else if (g > randInt) {
    lowOrHi.innerHTML = `Go lower`;
  }
};

const displayGuesses = (gues) => {
  guessInput.value = "";
  guesses.innerHTML += `${gues} `;
  remainingGuess.innerHTML = `${numGuess}`;
  numGuess--;
};

const endGame = () => {
  guessInput.setAttribute("disabled", "");
  const p = document.createElement("p");
  p.setAttribute("class", "button");
  p.innerHTML = ``;
};
