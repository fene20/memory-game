// jshint esversion: 6 
// globals $:false 


// Globals
var playerSequence_global = [];
var gameSequence_global = [];
var totalNoBoxes_global = 9;

// A player can click buttons as they flash on screen, i.e. cheat, so need to lock this out.
var playerLockOut_global = true; // true - player cannot change color before the game starts.
var debug_global = false;

// This script has 2 significant function calls
// runGameSequence() which is called when the Start button is pressed/clicked.
// getPlayerSequence() which is called every time a box is pressed/clicked.
// When the getPlayerSequence() function is called ${level} times the scores get updated and the level is updated.


var runButtonClick = function () {

    var startButton = document.getElementById("button");
    startButton.addEventListener("click", function () {

        playerLockOut_global = true;
        runGameSequence();
        this.style.borderColor = "red"; // run button
    });
};


var boxesClick = function () {

    var boxesContainer = document.getElementById("boxes_section");
    boxesContainer.addEventListener("click", function (event) {


        if (event.target.getAttribute("data-type") === "box") {

            if (playerLockOut_global === false) {

                if (debug_global === true) {
                    console.log("");
                    console.log("Box Click Registered");
                }

                getPlayerSequence(event.target.getAttribute("id"));

                event.target.style.backgroundColor = "orange";

            } else {
                if (debug_global === true)
                    console.log("Locked out");
            }

        }

    });
};




// Credit: JS Essentials project
// Get the elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {

    runButtonClick();
    boxesClick();
});




function runGameSequence() {

    // Clear arrays at the start of each game
    gameSequence_global = [];
    playerSequence_global = [];


    playerSequence_global.push("test"); // add any text to prevent reading undefined later.

    if (debug_global === true) {
        console.log("***************************");
        console.log(`Player Array at Start: ${playerSequence_global}`);
        console.log("***************************");
    }

    gameSequence_global = genSqrSequence();

    outputSqrSequence(gameSequence_global);
}



// Generate Square Sequence
function genSqrSequence() {

    // The runGameSequence is like a master while the getPlayerSequence is like a slave.
    // The boxes cannot be clicked while the runGameSequence is running.
    // However the player can hit multiple game starts. This could be prevented with another
    // lockOut but the code may no longer be robust. Easy solution is to let the user run multiple atarts and
    // get an incorrect answer. The code below will change the squares back to red however.
    // Repeating the last button sequence to flash will give a correct score.

    let idOff = [""];

    // Turn all boxes green.
    for (let i = 0; i < totalNoBoxes_global; i++) {
        idOff = "sqr" + i;
        document.getElementById(idOff).style.backgroundColor = "green"; // Clear colours back to green

        if (debug_global === true)
            console.log(`clear box ${idOff} at start`);
    }



    // Credit CodeInstitute JS Essentials Project
    let level = parseInt(document.getElementById("level").innerText);

    // Randon Square Sequence
    let randomSeq = [level]; // The integer
    let randomSqrSeq = [level]; // The string sqr + string 1, 2, 3 etc.

    // The first number cannot be a duplicate.
    randomSeq[0] = Math.floor(Math.random() * totalNoBoxes_global);
    randomSqrSeq[0] = "sqr" + randomSeq[0];

    if (debug_global === true) {
        console.log("");
        console.log(`Generating random numbers for Level: ${level}`);
        console.log(`First Random Number: ${randomSeq[0]}`);
        console.log(`First random string: ${randomSqrSeq[0]}`);
    }

    let boxIndex = 1;

    while (boxIndex < level) {

        let uniqueBoxNumber = true;
        let number = Math.floor(Math.random() * totalNoBoxes_global);

        if (debug_global === true) {
            console.log(`Box Index: ${boxIndex}`);
            console.log(`Next Random Number: ${number}`);
        }

        for (let i = 0; i < boxIndex; i++) {

            if (debug_global === true)
                console.log(`Is Random Number ${number} = previous array number ${randomSeq[i]} index(${i}) ?`);

            if (number === randomSeq[i]) {
                uniqueBoxNumber = false;

                if (debug_global === true)
                    console.log("Yes, but not Unique, try again");
            } else {

                if (debug_global === true)
                    console.log("No, it's Unique!!!!");
            }
        }

        if (uniqueBoxNumber === true) {

            randomSeq[boxIndex] = number;
            randomSqrSeq[boxIndex] = "sqr" + number;

            if (debug_global === true)
                console.log(`Add ${randomSqrSeq[boxIndex]} to Game array`);

            // Index to the next box number when the random number is unique
            boxIndex++;
        } else {
            // Loop again for the same array element
        }
    }

    if (debug_global === true)
        console.log(`Game sequence is: ${randomSqrSeq}`);

    return randomSqrSeq;
}

// Output Square Sequence
function outputSqrSequence(boxes) {

    if (debug_global === true)
        console.log("");

    let timeMultiplier = 0;
    for (const box of boxes) {

        if (debug_global === true)
            console.log(`Turn on box: ${box}`);

        sqrOutDelay(timeMultiplier, box);
        timeMultiplier++;
    }

    sqrOutDelay(timeMultiplier, "sqrOffWithButtonOrange");
}


// Output squares and then turn them "all" off
function sqrOutDelay(timeIndex, boxId) {

    // Credit CodeInstitute JS Essentials Project

    setTimeout(function () {

        let idOff = "";

        if ((boxId === "sqrOffWithButtonOrange") || (boxId === "sqrOffWithButtonGreen")) {

            if (debug_global === true) {
                console.log("");
                console.log("Turn Squares Off");
            }


            // Easy solution, just turn all boxes green.
            for (let i = 0; i < totalNoBoxes_global; i++) {
                idOff = "sqr" + i;
                document.getElementById(idOff).style.backgroundColor = "green"; // Clear colours back to green

                if (debug_global === true)
                    console.log(`clear box: ${idOff}`);
            }

            if (boxId === "sqrOffWithButtonOrange") {
                document.getElementById("button").style.borderColor = "orange";
                // Allow box entry
                playerLockOut_global = false;
            } else {
                document.getElementById("button").style.borderColor = "grey";
            }

        } else {

            if (debug_global === true)
                console.log("Turn Squares On");

            document.getElementById(boxId).style.backgroundColor = "red"; // Turn on game sequence red.
        }
    }, 1000 * timeIndex);
}



function getPlayerSequence(latestboxClicked) {

    // Credit CodeInstitute JS Essentials Project
    let level = parseInt(document.getElementById("level").innerText);
    let countBeforeUpdate = playerSequence_global.length;
    let testBox = playerSequence_global[0]; // for debug only

    if (debug_global === true) {
        console.log("");
        console.log(`Game Level: ${level}`);
        console.log(`Player array size before click was: ${countBeforeUpdate}`);
        console.log(`First array element: ${testBox}`);
        console.log(`Latest Box Clicked: ${latestboxClicked}`);
    }

    let doubleClick = false; // double clicks one after the other only.
    let extraClicks = false; // Extra after the array is ful

    // Prevent the recording of two clicks of the same box one after the other
    if (latestboxClicked === playerSequence_global[countBeforeUpdate - 1]) {

        if (debug_global === true)
            console.log(`Box ${latestboxClicked} is being clicked again`);

        doubleClick = true;
    }


    // Will allow the player to make the mistake of pressing the same box as they may have pressed earlier.


    // Prevent the recording of clicks when the array size is greater than the game level (+ 1 for the "test" string )
    if (countBeforeUpdate < (level + 1)) {
        // Update array but not if it is a double click
        if (doubleClick === false) {

            if (debug_global === true)
                console.log(`Pushing ${latestboxClicked} to array`);

            playerSequence_global.push(latestboxClicked);
        }

    } else if (countBeforeUpdate === (level + 1)) {

        if (debug_global === true)
            console.log("Array size exceeded");

        extraClicks = true; // array size exceeded
    } else {
        if (debug_global === true)
            console.log("Error");
    }

    // Now check to see if the updated array is the correct size
    let countAfterUpdate = playerSequence_global.length;

    if (countAfterUpdate === level + 1) {
        if (extraClicks === false) {
            // Prevent player from changing the colour of additional squares
            playerLockOut_global = true;

            if (debug_global === true)
                console.log("Button lockout");

            // Turn off squares
            sqrOutDelay(1, "sqrOffWithButtonGreen");
            // check player sequence
            isPlayerSequenceCorrect();
        }
    }
}


function isPlayerSequenceCorrect() {

    let level = parseInt(document.getElementById("level").innerText);
    let isPlayerCorrect = true;

    if (debug_global === true) {
        console.log("");
        console.log(`Level: ${level}`);
        console.log("Is the player sequence correct?");
        console.log(`Game Sequence Array: ${gameSequence_global}`);
        console.log(`Player Sequence Array: ${playerSequence_global}`);
        console.log("Run matching check loop");
    }

    for (let index = 0; index < level; index++) {

        if (debug_global === true) {
            console.log(`   Game   Sequence Number: ${gameSequence_global[index]}`);
            console.log(`   Player Sequence Number: ${playerSequence_global[index + 1]}`);
        }

        if (gameSequence_global[index] === playerSequence_global[index + 1]) {
            // Sequence match
        } else {
            // Sequence mismatch
            isPlayerCorrect = false;
        }

    }

    if (debug_global === true) {
        if (isPlayerCorrect === true) {
            console.log("Correct player sequence !!!!");
        } else {
            console.log("Incorrect player sequence XXXX");
        }
    }

    // Update scores
    let correctScore = parseInt(document.getElementById("correct").innerText);
    let incorrectScore = parseInt(document.getElementById("incorrect").innerText);

    if (debug_global === true) {
        console.log("");
        console.log("Update Scores");
        console.log(`Previous Correct Score: ${correctScore}`);
        console.log(`Previous Incorrect Score: ${incorrectScore}`);
    }

    if (isPlayerCorrect === true) {
        document.getElementById("correct").innerText = ++correctScore;
    } else {
        document.getElementById("incorrect").innerText = ++incorrectScore;
    }

    if (debug_global === true) {
        correctScore = parseInt(document.getElementById("correct").innerText);
        incorrectScore = parseInt(document.getElementById("incorrect").innerText);

        if (debug_global === true) {
            console.log(`Latest Correct Score: ${correctScore}`);
            console.log(`Latest Incorrect Score: ${incorrectScore}`);
        }
    }

    // Call either way, i.e. outside (isPlayerCorrect === true)
    updateLevel(correctScore);
}




function updateLevel(correctScore) {

    let level = parseInt(document.getElementById("level").innerText);
    let scoreAtLevel = 2; // 3 for debug
    let nextLevel = 1;

    nextLevel = correctScore / scoreAtLevel;

    if (debug_global === true) {
        console.log("");
        console.log("Update Level function");
        console.log(`Next Level is integer of: ${nextLevel} for ${correctScore} score at level ${level}`);
    }

    if (nextLevel >= level) {
        document.getElementById("level").innerText = ++level;
    }

    if (level > totalNoBoxes_global) {

        Swal.fire(
            'Game Over',
            'Congratulations on finishing the game!'
        );
    }

}