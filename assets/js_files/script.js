/* jshint esversion: 6 */
/* globals $:false */

// Globals to get the code running
var playerSequence = [];
var gameSequence = [];


// This script has 2 significant function calls
// runGameSequence() which is called when the Start button is pressed/clicked.
// getPlayerSequence() which is called every time a box is pressed/clicked.
// When the getPlayerSequence() function is called ${level} times the scores get updated and the level is updated.


// Credit: JS Essentials project
// Get the elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {

  console.log("Event: DOM loaded");
  let buttons = document.getElementsByName("box");
  let boxClicked; // declare boxClicked


  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "start") {

        console.log("");
        console.log("Event: clicked start");
        runGameSequence();

      } else if (this.getAttribute("data-type") === "box") {

        boxClicked = this.getAttribute("id");

        console.log("");
        console.log(`Event: You clicked box: ${boxClicked}`);

        getPlayerSequence(boxClicked);


        if (this.style.backgroundColor === "orange") {
          this.style.backgroundColor = "green";
        } else {
          this.style.backgroundColor = "orange";
        }

      } else {

        console.log("Error");
      }
    });
  }

});



function runGameSequence() {

  playerSequence.push("test"); // add any text to prevent reading undefined later.
  console.log(`Player Array at Start: ${playerSequence}`);

  gameSequence = genSqrSequence();

  console.log(`gameSequence: ${gameSequence}`);

  outputSqrSequence(gameSequence);

}



// Generate Square Sequence
function genSqrSequence() {

  // Credit CodeInstitute JS Essentials Project
  let level = parseInt(document.getElementById("level").innerText);
  let totalNoBoxes = parseInt(document.getElementById("totalBoxes").innerText);

  console.log(`Generating random numbers for Level: ${level}`);

  // Randon Square Sequence
  let randomSeq = [level];
  let randomSqrSeq = [level];

  // The first number cannot be a duplicate.
  randomSeq[0] = Math.floor(Math.random() * totalNoBoxes);
  randomSqrSeq[0] = "sqr" + randomSeq[0];

  console.log(`Random Number: ${randomSeq[0]}`);
  console.log(`randomSqrSeq: ${randomSqrSeq[0]}`);


  let boxIndex = 1;

  while (boxIndex < level) {

    console.log(`Box Index: ${boxIndex}`);

    let uniqueBoxNumber = true;

    let number = Math.floor(Math.random() * totalNoBoxes);
    console.log(`Random Number: ${number}`);

    for (let i = 0; i < boxIndex; i++) {

      console.log(`Is Random Number ${number} = array number ${randomSeq[i]} with index ${i}`);
      if (number === randomSeq[i]) {
        uniqueBoxNumber = false;
        console.log("Not Unique!!!!");
      } else {
        console.log("Unique!!!!");
      }
    }

    if (uniqueBoxNumber === true) {

      randomSeq[boxIndex] = number;
      randomSqrSeq[boxIndex] = "sqr" + number;
      console.log(`randomSqrSeq: ${randomSqrSeq[boxIndex]}`);

      // Index to the next box number when the random number is unique
      boxIndex++;
    } else {
      // Loop again for the same array element
    }
  }

  return randomSqrSeq;
}

// Output Square Sequence
function outputSqrSequence(boxes) {

  let timeMultiplier = 1;

  for (let box in boxes) {

    console.log(`Turn on box: ${boxes[box]}`);

    sqrOutDelay(timeMultiplier, boxes[box]);
    timeMultiplier++;
  }

  sqrOutDelay(timeMultiplier, "off");

}


// Output squares and then turn them "all" off
function sqrOutDelay(timeIndex, boxId) {

  // Credit CodeInstitute JS Essentials Project
  let totalNoBoxes = parseInt(document.getElementById("totalBoxes").innerText);

  setTimeout(function () {

    let idOff = "";
    if (boxId === "off") {
      // Easy solution, just turn all boxes green.
      for (let i = 0; i < totalNoBoxes; i++) {
        idOff = "sqr" + i;
        console.log(`clear box: ${idOff}`);
        document.getElementById(idOff).style.backgroundColor = "green";
      }
    } else {
      document.getElementById(boxId).style.backgroundColor = "red";
    }
  }, 2000 * timeIndex);
}




function getPlayerSequence(latestboxClicked) {

  //var playerSequence = [];
  console.log("");
  // while clicked square count is less than expected for the level.

  let countBeforeUpdate = playerSequence.length;
  console.log(`player array size before update: ${countBeforeUpdate}`);


  // Credit CodeInstitute JS Essentials Project
  let level = parseInt(document.getElementById("level").innerText);

  let testBox = playerSequence[0]; // for debug only

  console.log(`test Box: ${testBox}`);
  console.log(`Latest Box Clicked: ${latestboxClicked}`);

  console.log(`Click count: ${countBeforeUpdate}`);
  console.log(`Level: ${level}`);


  // Update array while count is < level
  // note +1 for extra "test" array element
  if (countBeforeUpdate < (level + 1)) {
    console.log("Count less than level");


    let updateArray = true;

    for (let box in playerSequence) {

      // Prevent recording of multiple player clicks of same box.
      if (latestboxClicked === playerSequence[box]) {
        updateArray = false;
        console.log("Don't update player array");
      }

    }


    if (updateArray === true) {
      playerSequence.push(latestboxClicked);
      console.log("Update player array");
    }


    console.log(`Latest Box Clicked: ${playerSequence.length}`);


  } else {
    console.log("Count greater than level");
  }

  let countAfterUpdate = playerSequence.length;
  console.log(`player array size after update:: ${countAfterUpdate}`);


  if (countAfterUpdate === (level + 1)) {
    console.log("Correct Array Size");
    sqrOutDelay(1, "off");
    isPlayerSequenceCorrect();
  } else {
    console.log("Not correct Array Size yet");
  }

}




function isPlayerSequenceCorrect() {

  let level = parseInt(document.getElementById("level").innerText);

  console.log("");
  console.log(`Level: ${level}`);
  console.log(`Game Sequence Array: ${gameSequence}`);
  console.log(`Player Sequence Array: ${playerSequence}`);

  let isScoreCorrect = true;

  for (let index = 0; index < level; index++) {

    console.log(`Game Sequence Number: ${gameSequence[index]}`);
    console.log(`Player Sequence Number: ${playerSequence[index + 1]}`);

    if (gameSequence[index] === playerSequence[index + 1]) {
      // Sequence match
    } else {
      // Sequence mismatch
      isScoreCorrect = false;
    }

  }

  // Clear two arrays for next run.
  playerSequence = [];
  gameSequence = [];


  // Update scores
  let correctScore = parseInt(document.getElementById("correct").innerText);
  let incorrectScore = parseInt(document.getElementById("incorrect").innerText);

  if (isScoreCorrect === true) {
    document.getElementById("correct").innerText = ++correctScore;
    updateLevel(correctScore);
  } else {
    document.getElementById("incorrect").innerText = ++incorrectScore;
  }

}




function updateLevel(correctScore) {

  let totalNoBoxes = parseInt(document.getElementById("totalBoxes").innerText);
  let level = parseInt(document.getElementById("level").innerText);
  let scoreAtLevel = 3; // 3 for debug
  let nextLevel = 1;

  nextLevel = correctScore / scoreAtLevel;
  console.log(`Next Level is: ${nextLevel} for ${correctScore} score at level ${level}`);

  if (nextLevel >= level) {
    document.getElementById("level").innerText = ++level;
  }

  if (level > totalNoBoxes) {
    alert("Game Over");
  }

} 