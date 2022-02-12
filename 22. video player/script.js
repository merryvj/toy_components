const video = document.querySelector("#video");
const playBtn = document.querySelector("#play");
const controls = document.querySelector("#controls");
const progress = document.querySelector("#progress");
const timestamp = document.querySelector("#timestamp");


video.addEventListener("timeupdate", updateProgress);
playBtn.addEventListener("click", toggleVideoPlay);
progress.addEventListener("change", setVideoProgress);

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
    setTimestamp();
}

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

function setTimestamp() {
    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;

    if (minutes < 10) {
        minuteValue = '0' + minutes;
    } else {
        minuteValue = minutes;
    }

    if (seconds < 10) {
        secondValue = '0' + seconds;
    } else {
        secondValue = seconds;
    }

    timestamp.textContent = `${minuteValue}:${secondValue}`;
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
}
function toggleVideoPlay() {
    if(video.paused) {
      playBtn.innerHTML = '<i class="lni lni-pause"></i>'
      video.play();
    } else {
      playBtn.innerHTML = '<i class="lni lni-play"></i>';
      video.pause();
    }
}



//remove default browser controls from video
video.removeAttribute("controls");
controls.style.visibility = "visible";