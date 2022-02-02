const timeDisplay = document.getElementById("time");

let seconds = 0;
let interval = null;

function startTimer() {
    if (interval){
        return;
    }

    interval = setInterval(updateTimer, 1000);

}

function stopTimer() {
    clearInterval(interval);
    interval = null;

}

function resetTimer() {
    stopTimer();
    seconds = 0;
    timeDisplay.innerHTML = "00:00:00";
}

function updateTimer(){
    seconds++;

    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hours * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10){
        secs = "0" + secs;
    }
    if (mins < 10){
        mins = "0" + hours;
    }

    if (hours < 10){
        hours = "0" + hours;
    }

    
    timeDisplay.innerHTML = `${hours}:${mins}:${secs}`;
}
