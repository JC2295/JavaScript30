//Variable declaration and retreival from inputs
let root = document.documentElement;

function update() {

let colorInput = document.querySelector("#color");

let colorValue = colorInput.getAttribute("value");

root.style.setProperty("--color-value", colorValue); 


let blurInput = document.querySelector("#blur");

let blurValue = blurInput.getAttribute("value");

root.style.setProperty("--blur-value", blurValue); 



let spacingInput = document.querySelector("#spacing");

let spacingValue = spacingInput.getAttribute("value");

root.style.setProperty("--spacing-value", blurValue); 

}

setInterval(update, 200);