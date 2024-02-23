//Variable declaration and retreival from inputs
let root = document.documentElement;

let colorInput = document.querySelector("#color");

colorInput.addEventListener("change", updateColor);

function updateColor(){

    let colorValue = colorInput.value;

    alert(colorValue);

    root.style.setProperty("--color-value", colorValue); 

}

let blurInput = document.querySelector("#blur");

blurInput.addEventListener("change", updateBlur);

function updateBlur(){

    let blurValue = blurInput.value;

    root.style.setProperty("--blur-value", blurValue);

}

let spacingInput = document.querySelector("#spacing");

spacingInput.addEventListener("change", updateSpacing);

function updateSpacing(){

    let spacingValue = spacingInput.value;

    root.style.setProperty("--spacing-value", spacingValue); 

}


/*

Important note:

The value attribute represents the initial value of the input defined as default in html:
It's found using the getAttribute method

The value property represents the current value of the input.
Since this is a property you can simply use .value to retreive the current value.


/*


