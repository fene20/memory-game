// Add game functions

//var level = 4
var totalNoBoxes = 8; // Support future expansion.
var array = [4];
var debug = true;

array = genSqrSequence(4);

console.log(array);


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