// Credit: JS Essentials project
// Get the button elements, and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
    
    alert("DOM loaded"); 
    let buttons = document.getElementsByName("box");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit");
            } else if (this.getAttribute("data-type") === "box"){
                alert("You clicked box");
            } else {
                let gameType = this.getAttribute("data-type");
                alert("Error");
            }
        });
    }
    
});















