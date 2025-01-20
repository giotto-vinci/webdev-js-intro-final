"use strict";

const submitGuessBtn = document.getElementById("Submit-Guess");
const guessMessageElement = document.getElementById("guess-message");
const guessInputElement = document.getElementById("guess-input");
const currentGuessElement = document.getElementById("current-guess");
const computerGuessElement = document.getElementById("computer-guess");
const guessHistoryElement = document.getElementById("guess-history");
const restartBtn = document.getElementById("Restart-Button");

function guessMessage() {
   if (guessMessage > computerGuess) {
    console.log("too high");
   } else if (guessMessage < computerGuess) {
    console.log("too low");
   } else if (guessMessage < computerGuess || guessMessage > computerGuess, guessMessage = 3) {
    console.log("the player lost");
   } else {
    console.log("the player won!");
   }
   }

   /*
function guessInput() {
    console.log(guessMessage);
}

function computerGuess(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

console.log(computerGuess);

function guessHistory() {
    document.addEventListener('DOMContentLoaded', function() {
        guessInputElement = document.querySelector('.input-element');
        initialValue = guessInputElement.value;
    
        guessInputElement.addEventListener('input', function() {
            currentValue = inputElement.value;
            previousValue = initialValue;
    
            console.log('Previous Value:', previousValue);
    
            // Update the stored value to the current value
            initialValue = currentValue;
        });
    });
}

console.log(guessHistory);
    */