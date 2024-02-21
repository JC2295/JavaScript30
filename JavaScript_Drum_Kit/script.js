// Creates object to store drum beats.

let drumSounds = [
        "Audio/80s-Bdrum1.wav",
        "Audio/80s-COWBELL1.wav",
        "Audio/80s-CRASH2.wav",
        "Audio/80s-HHCLOSE1.wav",
        "Audio/80s-HICONGA.wav",
        "Audio/80s-SNARE1.wav",
        "Audio/80s-TAMB1.wav",
        "Audio/80s-TOM1.wav"
    ];

let drums = document.querySelectorAll(".drum");

for(let i = 0; i < drums.length; i++){
    drums[i].addEventListener("mousedown", () => playDrum(i));
    drums[i].addEventListener("mousedown", () => highlight(i));
    drums[i].addEventListener("mouseup", () => unhighlight(i));
    // Will come back to this as I'm not sure exactly how it works.
}

function playDrum(i){
    let audio = new Audio(drumSounds[i]);
    audio.play();
};

function highlight(i){
    drums[i].classList.add("highlight"); // add a class
}

function unhighlight(i){
    drums[i].classList.remove("highlight"); // remove a class
}


// js is linked to html
