

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


