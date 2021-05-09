// Credit: JS Essentials project
// Get the button elements, and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {

  //alert("DOM loaded");
  console.log("DOM loaded");
  let buttons = document.getElementsByName("box");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        //alert("You clicked Submit");
        console.log("You clicked Submit");
        runGame();
      } else if (this.getAttribute("data-type") === "box") {
        //alert("You clicked a box");
        console.log("You clicked a box");

        temp = this.getAttribute("id");
        console.log(temp);


        //update player buffer or array
        //but don't update if the same button is hit again
        waitForPlayer();

        if (this.style.backgroundColor === "orange") {
          this.style.backgroundColor = "green";
        } else {
          this.style.backgroundColor = "orange";
        }
        console.log("Box Clicked")


      } else {
        let gameType = this.getAttribute("data-type");
        //alert("Error");
        console.log("Error");
      }
    });
  }

});

function runGame() {

  //alert("Run Game");
  console.log("Run Game");
  let gameSequence = [];

  gameSequence = genSqrSequence();

  //alert(`Square sequence: ${gameSequence}`);
  console.log(`Square sequence: ${gameSequence}`);

  outputSqrSequence(gameSequence);

}



// Generate Square Sequence
function genSqrSequence() {

  // Credit CodeInstitute JS Essentials Project
  let level = parseInt(document.getElementById("level").innerText);
  let totalNoBoxes = parseInt(document.getElementById("totalBoxes").innerText);

  //alert(`Level: ${level}`);
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
    boxId = "test" + boxes[box];

    sqrOutDelay(timeIndex, boxId);

  }
  timeIndex++;
  sqrOutDelay(timeIndex, "off");

  // update game buffer or array .push

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
        idOff = "test" + i;
        console.log(`randomSqrSeq: ${idOff}`);
        document.getElementById(idOff).style.backgroundColor = "green";
      }
    } else {
      document.getElementById(boxId).style.backgroundColor = "red";
    }
  }, 2000 * timeIndex);
}

function waitForPlayer() {

  // Credit CodeInstitute JS Essentials Project
  let level = parseInt(document.getElementById("level").innerText);

  //if player buffer > level ignore additional button presses

  // if player buffer = level call then{

  // Credit CodeInstitute JS Essentials Project
  let level = parseInt(document.getElementById("level").innerText);
  let score = parseInt(document.getElementById("score").innerText);

  let correctSequence = false;
  // loop to check two buffers are equal

  // if correctSequence = true then update score

  // if score > 5 then increase level by 1.


  // end of wait for player}


  //
}