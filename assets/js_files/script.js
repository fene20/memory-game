// jshint esversion: 6 
// globals $:false 

// Globals to get the code running
var playerSequence_global = [];
var gameSequence_global = [];
var totalNoBoxes_global = 9;
// A player can click buttons as they flash on screen, i.e. cheat, need to lock this out.
var playerLockOut = false;

// This script has 2 significant function calls
// runGameSequence() which is called when the Start button is pressed/clicked.
// getPlayerSequence() which is called every time a box is pressed/clicked.
// When the getPlayerSequence() function is called ${level} times the scores get updated and the level is updated.



var setupStartButtonClick = function () {

    var startButton = document.getElementById("button");
    startButton.addEventListener("click", function () {

        playerLockOut = true;
        runGameSequence();
        this.style.backgroundColor = "red";

    });
};



var boxesClick = function () {

    var boxesContainer = document.getElementById("boxes_section");
    boxesContainer.addEventListener("click", function (event) {


        if (event.target.getAttribute("data-type") === "box") {
            if (playerLockOut === false) {
                getPlayerSequence(event.target);

                if (event.target.style.backgroundColor === "orange") {
                    event.target.style.backgroundColor = "green";
                } else {
                    event.target.style.backgroundColor = "orange";
                }

            }

        }


    });
};









// Credit: JS Essentials project
// Get the elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {

    setupStartButtonClick();

    boxesClick();
});






function runGameSequence() {

    // Clear arrays at the start of each game
    gameSequence_global = [];
    playerSequence_global = [];


    playerSequence_global.push("test"); // add any text to prevent reading undefined later.
    console.log("");
    console.log(`Player Array at Start: ${playerSequence_global}`);

    gameSequence_global = genSqrSequence();

    console.log("");
    console.log(`Game sequence is: ${gameSequence_global}`);

    outputSqrSequence(gameSequence_global);

}



// Generate Square Sequence
function genSqrSequence() {

    // Credit CodeInstitute JS Essentials Project
    let level = parseInt(document.getElementById("level").innerText);
    //let totalNoBoxes = parseInt(document.getElementById("totalBoxes").innerText);

    console.log(`Generating random numbers for Level: ${level}`);

    // Randon Square Sequence
    let randomSeq = [level];
    let randomSqrSeq = [level];

    // The first number cannot be a duplicate.
    randomSeq[0] = Math.floor(Math.random() * totalNoBoxes_global);
    randomSqrSeq[0] = "sqr" + randomSeq[0];

    console.log(`Random Number: ${randomSeq[0]}`);
    console.log(`randomSqrSeq: ${randomSqrSeq[0]}`);


    let boxIndex = 1;

    while (boxIndex < level) {

        console.log(`Box Index: ${boxIndex}`);

        let uniqueBoxNumber = true;

        let number = Math.floor(Math.random() * totalNoBoxes_global);
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
    for (const box of boxes) {


        console.log(`Turn on box: ${boxes[box]}`);

        sqrOutDelay(timeMultiplier, boxes[box]);
        timeMultiplier++;
    }

    sqrOutDelay(timeMultiplier, "offOrange");

}


// Output squares and then turn them "all" off
function sqrOutDelay(timeIndex, boxId) {

    // Credit CodeInstitute JS Essentials Project
    //let totalNoBoxes = parseInt(document.getElementById("totalBoxes").innerText);

    setTimeout(function () {

        let idOff = "";
        if ((boxId === "offOrange") || (boxId === "offRed")) {
            // Easy solution, just turn all boxes green.
            playerLockOut = false;
            for (let i = 0; i < totalNoBoxes_global; i++) {
                idOff = "sqr" + i;
                console.log(`clear box: ${idOff}`);
                document.getElementById(idOff).style.backgroundColor = "green"; // Off
            }

            if (boxId === "offOrange") {
                document.getElementById("button").style.backgroundColor = "orange";
            } else {
                document.getElementById("button").style.backgroundColor = "red";
            }

        } else {
            document.getElementById(boxId).style.backgroundColor = "red"; // On
        }
    }, 2000 * timeIndex);
}




function getPlayerSequence(latestboxClicked) {

    //var playerSequence = [];
    console.log("");
    // while clicked square count is less than expected for the level.

    let countBeforeUpdate = playerSequence_global.length;
    console.log(`player array size before click: ${countBeforeUpdate}`);


    // Credit CodeInstitute JS Essentials Project
    let level = parseInt(document.getElementById("level").innerText);

    let testBox = playerSequence_global[0]; // for debug only

    console.log(`First array element: ${testBox}`);
    console.log(`Latest Box Clicked: ${latestboxClicked}`);

    console.log(`Game Level: ${level}`);


    // Update array while count is < level
    // note +1 for extra "test" array element
    if (countBeforeUpdate < (level + 1)) {


        let updateArray = true;

        for (let box in playerSequence_global) {

            // Prevent recording of multiple player clicks of same box.
            if (latestboxClicked === playerSequence_global[box]) {
                updateArray = false;
                console.log("Don't update player array");
            }

        }


        if (updateArray === true) {
            playerSequence_global.push(latestboxClicked);
            console.log("Update player array");
        }


    } else {
        console.log("Count greater than level");
    }

    let countAfterUpdate = playerSequence_global.length;
    console.log(`player array size after update: ${countAfterUpdate}`);


    if (countAfterUpdate === (level + 1)) {
        console.log("Correct Array Size");
        sqrOutDelay(1, "offGreen");
        isPlayerSequenceCorrect();
    } else {
        console.log("Not correct Array Size yet");
    }

}




function isPlayerSequenceCorrect() {

    let level = parseInt(document.getElementById("level").innerText);


    console.log("");
    console.log("Is the player sequence correct");
    console.log(`Level: ${level}`);
    console.log(`Game Sequence Array: ${gameSequence_global}`);
    console.log(`Player Sequence Array: ${playerSequence_global}`);

    let isPlayerCorrect = true;

    console.log("Run matching check loop");
    for (let index = 0; index < level; index++) {

        console.log(`   Game   Sequence Number: ${gameSequence_global[index]}`);
        console.log(`   Player Sequence Number: ${playerSequence_global[index + 1]}`);

        if (gameSequence_global[index] === playerSequence_global[index + 1]) {
            // Sequence match
        } else {
            // Sequence mismatch
            isPlayerCorrect = false;
        }

    }

    if (isPlayerCorrect === true) {
        console.log("Correct player sequence");
    } else {
        console.log("Incorrect player sequence");
    }


    // Update scores
    let correctScore = parseInt(document.getElementById("correct").innerText);
    let incorrectScore = parseInt(document.getElementById("incorrect").innerText);

    if (isPlayerCorrect === true) {
        document.getElementById("correct").innerText = ++correctScore;
        updateLevel(correctScore);
    } else {
        document.getElementById("incorrect").innerText = ++incorrectScore;
    }

}




function updateLevel(correctScore) {

    //let totalNoBoxes = parseInt(document.getElementById("totalBoxes").innerText);
    let level = parseInt(document.getElementById("level").innerText);
    let scoreAtLevel = 3; // 3 for debug
    let nextLevel = 1;

    nextLevel = correctScore / scoreAtLevel;
    console.log("");
    console.log(`Next Level is: ${nextLevel} for ${correctScore} score at level ${level}`);

    if (nextLevel >= level) {
        document.getElementById("level").innerText = ++level;
    }

    if (level > totalNoBoxes_global) {
        alert("Game Over");
    }

}