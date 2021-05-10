
// Globals to get the code running
var playerSequenceArray = [];



// Credit: JS Essentials project
// Get the button elements, and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {

  //alert("DOM loaded");
  console.log("DOM loaded");
  let buttons = document.getElementsByName("box");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {

        console.log("You clicked Submit");
        runGameSequence();

      } else if (this.getAttribute("data-type") === "box") {

        console.log("You clicked a box");

        boxClicked = this.getAttribute("id");
        console.log(boxClicked);

        getPlayerSequence(boxClicked);

        // TBD. Prevent recording of multiple player clicks of same box.
        if (this.style.backgroundColor === "orange") {
          this.style.backgroundColor = "green";
        } else {
          this.style.backgroundColor = "orange";
        }
        console.log("Box Clicked")


      } else {
        let gameType = this.getAttribute("data-type");

        console.log("Error");
      }
    });
  }

});

function runGameSequence() {

  playerSequenceArray.push("test"); // add any text to prevent reading undefined later.
  console.log(`Player Array Start: ${playerSequenceArray}`);

  console.log("Run Game");
  let gameSequence = [];

  gameSequence = genSqrSequence();

  console.log(`gameSequence: ${gameSequence}`);

  outputSqrSequence(gameSequence);

}



// Generate Square Sequence
function genSqrSequence() {

  // Credit CodeInstitute JS Essentials Project
  let level = parseInt(document.getElementById("level").innerText);
  let totalNoBoxes = parseInt(document.getElementById("totalBoxes").innerText);

  console.log(`genSqrSequence Level: ${level}`);

  // Randon Square Sequence
  let randomSqrSeq = [level];

  // The first number cannot be a duplicate.
  randomSqrSeq[0] = Math.floor(Math.random() * totalNoBoxes);

  console.log(`randomSqrSeq: ${randomSqrSeq[0]}`);


  let boxIndex = 1;
  while (boxIndex < level) {

    let uniqueBoxNumber = true;

    let number = Math.floor(Math.random() * totalNoBoxes);

    for (let i = 0; i < boxIndex; i++) {
      if (number === randomSqrSeq[i]) {
        uniqueBoxNumber = false;
      }
    }

    if (uniqueBoxNumber === true) {
      randomSqrSeq[boxIndex] = number;
      console.log(`randomSqrSeq: ${randomSqrSeq[boxIndex]}`);
      boxIndex++;
    } else {
      // Loop again
    }
  }

  return randomSqrSeq;
}

// Output Square Sequence
function outputSqrSequence(boxes) {

  let boxId = "";
  let timeIndex = 0;

  for (let box in boxes) {

    timeIndex = parseInt(box) + 1;
    boxId = "sqr" + boxes[box];

    sqrOutDelay(timeIndex, boxId);

  }
  timeIndex++;
  sqrOutDelay(timeIndex, "off");

  //addToGameArray(boxId);

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

  //var playerSequenceArray = [];

  let previousBoxClicked = playerSequenceArray[0];

  console.log(`Previous Box Clicked: ${previousBoxClicked}`);
  console.log(`Latest Box Clicked: ${latestboxClicked}`);

  updateArray = true;

  for (let box in playerSequenceArray) {

    // Prevent recording of multiple player clicks of same box.
    if (latestboxClicked === playerSequenceArray[box]) {
      updateArray = false;
      console.log("Don't update player array");
    }

  }


  if (updateArray === true) {
    playerSequenceArray.push(latestboxClicked);
    console.log("Update player array");
  }

  console.log(`Updated Player array: ${playerSequenceArray}`);

  //update player buffer or array
  //but don't update if the same button is hit again


  // Credit CodeInstitute JS Essentials Project
  //let level = parseInt(document.getElementById("level").innerText);

  //if player buffer > level ignore additional button presses

  // if player buffer = level call then{

  // Credit CodeInstitute JS Essentials Project
  //let level = parseInt(document.getElementById("level").innerText);
  //let score = parseInt(document.getElementById("score").innerText);

  //let correctSequence = false;
  // loop to check two buffers are equal

  // if correctSequence = true then update score

  // Credit CodeInstitute JS Essentials Project
  //  let oldScore = parseInt(document.getElementById("score").innerText);
  //  document.getElementById("score").innerText = ++oldScore;
  // if score > 5 then increase level by 1.


  // end of wait for player}


  //
}

// Add the game sequence to an array
//function addToGameArray(boxId){

//let gameSequence = parseInt(document.getElementById("game_sequence").innerText);

//gameSequenceArray.push(boxId);

//console.log(`Game Array: ${gameSequenceArray}`);
  //  let oldScore = parseInt(document.getElementById("score").innerText);
//document.getElementById("game_sequence").innerText = ++oldScore;

//}