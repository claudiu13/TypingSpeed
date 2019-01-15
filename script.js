const text = document.querySelector(".text");
const testA = document.querySelector("#quote");
const citat = document.querySelector("#citat p").innerHTML;
const resetButton = document.querySelector("#reset");
const timer1 = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    timer1.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function spellCheck() {
    let textEntered = testA.value;
    let originTextMatch = citat.substring(0,textEntered.length);

    if (textEntered == citat) {
        clearInterval(interval);
        text.style.borderColor = "green";
    } else {
        if (textEntered == originTextMatch) {
            text.style.borderColor = "red";
        } else {
            text.style.borderColor = "#E95D0F";
        }
    }

}

function start() {
    let textEnterdLength = testA.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnterdLength);
}

function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testA.value = "";
    timer1.innerHTML = "00:00:00";
    text.style.borderColor = "grey";
}

testA.addEventListener("keypress", start, false);
testA.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
