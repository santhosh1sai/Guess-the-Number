"use strict";

/* console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = 23; */

/* Here’s a list of the most useful DOM events, just to take a look at:

Mouse events:

click – when the mouse clicks on an element (touchscreen devices generate it on a tap).
contextmenu – when the mouse right-clicks on an element.
mouseover / mouseout – when the mouse cursor comes over / leaves an element.
mousedown / mouseup – when the mouse button is pressed / released over an element.
mousemove – when the mouse is moved.
Keyboard events:

keydown and keyup – when a keyboard key is pressed and released.
Form element events:

submit – when the visitor submits a <form>.
focus – when the visitor focuses on an element, e.g. on an <input>.
Document events:

DOMContentLoaded – when the HTML is loaded and processed, DOM is fully built.
CSS events:

transitionend – when a CSS-animation finishes. */

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 50;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number!";
    displayMessage("No Number!");
    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number!";
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#EC4B4B";
    }
  }
  /* 
    //when guess is too high
    else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#EC4B4B";
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#EC4B4B";
    }
}
     */
});

document.querySelector(".again").addEventListener("click", function () {
  score = 50;
  secretNumber = Math.trunc(Math.random() * 50) + 1;

  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = score;

  document.querySelector(".guess").value = "";

  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
