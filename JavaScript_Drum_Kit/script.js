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

function playDrum(){
    let audio = new Audio(drumSounds[0]);

    audio.play();
};

drums[0].addEventListener("click", playDrum);

// js is linked to html
