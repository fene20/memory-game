// Add game functions

//var level = 4
var totalNoBoxes = 8; // Support future expansion.
var array = [4];
var debug = true;
var boxDelay = 1000;

var timeout;

var time;

//array = genSqrSequence(4);

console.log(array);


// Use onclick="runGame();"


let start = document.getElementById('button');

start.addEventListener('click', runGame);


let boxes = document.getElementsByClassName("box");

for(i = 0, l = boxes.length; i < l; i++) {
    boxes[i].addEventListener('click', boxClicked);
}  


function boxClicked(event){
    if (this.style.backgroundColor ===  "orange"){
        this.style.backgroundColor = "green";
    }else{
        this.style.backgroundColor = "orange";
    }
    console.log("Box Clicked")
}


// Run Game
function runGame(event){

    // Start on Level 1
    let level = 2;

    let gameSequence = genSqrSequence(level);

    outputSqrSequence(gameSequence);

    playerSequence(level);

}



// Generate Square Sequence
function genSqrSequence(level){

    // Randon Square Sequence
    let randomSqrSeq = [level];

    // The first number cannot be a duplicate.
    randomSqrSeq[0] = Math.floor(Math.random() * totalNoBoxes) + 1;

    let boxIndex = 1;
    while (boxIndex < level) {
        
        let uniqueBoxNumber = true;

        let number = Math.floor(Math.random() * totalNoBoxes) + 1;

        for (let i = 0; i < boxIndex; i++) {
            if(number === randomSqrSeq[i]){
                uniqueBoxNumber = false;
            }
        }

        if(uniqueBoxNumber === true){
          randomSqrSeq[boxIndex] = number;
          boxIndex++; 
        }else{
          // Loop again
        }
    }

  if(debug === true){
     console.log(randomSqrSeq);   
  } 
  return randomSqrSeq;
}


// Output Square Sequence
function outputSqrSequence(boxes){

    let boxId = "";
    let timeIndex = 0;

    for ( let box in boxes){

        timeIndex = parseInt(box) + 1;
        boxId = "test" + boxes[box] ;

        sqrOutDelay(timeIndex, boxId);
        
    }
    timeIndex++;
    sqrOutDelay(timeIndex, "off");

}



// Output squares and then turn them "all" off
function sqrOutDelay(timeIndex, boxId) {
    setTimeout(function () {

        let idOff = "";
        if (boxId === "off") {
            // Easy solution, just turn all boxes green.
            for (let i = 1; i < totalNoBoxes+1; i++) {
                idOff = "test" + i ;
                document.getElementById(idOff).style.backgroundColor = "green";
            }
        }else {
            document.getElementById(boxId).style.backgroundColor = "red";
        }
    }, 1000 * timeIndex);
}


// Capture player sequence
function playerSequence(level){




}