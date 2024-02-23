//Variable declaration and retreival from inputs
let root = document.documentElement;

let colorInput = document.querySelector("#color");

colorInput.addEventListener("change", updateColor);

function updateColor(){

    let colorValue = colorInput.getAttribute("value");

    root.style.setProperty("--color-value", colorValue); 

}

let blurInput = document.querySelector("#blur");

blurInput.addEventListener("change", updateBlur);

function updateBlur(){

    let blurValue = blurInput.getAttribute("value");

    root.style.setProperty("--blur-value", blurValue);

}

let spacingInput = document.querySelector("#spacing");

spacingInput.addEventListener("change", updateSpacing);

function updateSpacing(){

    let spacingValue = spacingInput.getAttribute("value");

    root.style.setProperty("--spacing-value", spacingValue); 

}



