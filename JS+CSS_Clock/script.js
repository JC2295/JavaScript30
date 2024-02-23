function updateClock() {

const timeElapsed = Date.now();

const seconds = new Date(timeElapsed).getSeconds();

const secDeg = ((360/60) * seconds) - 90;

const minutes = new Date(timeElapsed).getMinutes();

const minDeg = ((360/3600) * seconds) - 90 + ((360/60) * minutes); // keeps resettinng back after min past.

const hours = new Date(timeElapsed).getHours(); // same issue with hours as a result.

const hourDeg = ((360/43200) * seconds) - 90 + ((360/12) * hours);

let test = document.querySelector("#test");

test.innerText = Date(timeElapsed);

// Get the root element

let root = document.documentElement;

root.style.setProperty('--secDeg', secDeg + "deg");
root.style.setProperty('--minDeg', minDeg + "deg");
root.style.setProperty('--hourDeg', hourDeg + "deg");

}


setInterval(updateClock, 1000);
