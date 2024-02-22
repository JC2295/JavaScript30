const timeElapsed = Date.now();

const seconds = new Date(timeElapsed).getSeconds();

const secDeg = ((360/60) * seconds) - 90;

const minutes = new Date(timeElapsed).getMinutes();

const minDeg = ((360/60) * minutes) - 90;

const hours = new Date(timeElapsed).getHours();

const hourDeg = ((360/12) * hours) - 90;


test.innerText = today;