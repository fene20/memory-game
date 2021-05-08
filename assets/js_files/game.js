// Add game functions

//var level = 4
var totalNoBoxes = 8; // Support future expansion.
var array = [4];
var debug = true;
var boxDelay = 1000;



//array = genSqrSequence(4);

console.log(array);


// Use onclick="runGame();"


let start = document.getElementById('button');

start.addEventListener('click', runGame);



function runGame(event){

    // Start on Level 1
    let level = 4;

    let gameSequence = genSqrSequence(level);

    outputSqrSequence(gameSequence);

}








//Generate Square Sequence
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


//Output Square Sequence
function outputSqrSequence(boxes){

    let boxId = "";

    for ( let box in boxes){
        boxId = "test" + boxes[box] ;
        document.getElementById(boxId).style.backgroundColor = "red";

       // Add delay
    }

    //document.getElementById("test2").style.backgroundColor = "red";   

}









