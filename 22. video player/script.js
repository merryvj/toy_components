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
}

function setVideoProgress() {
    return true;
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
}
function toggleVideoPlay() {
    if(video.paused) {
      //playBtn.setAttribute('data-icon','u');
      video.play();
    } else {
      //playBtn.setAttribute('data-icon','P');
      video.pause();
    }
}



//remove default browser controls from video
video.removeAttribute("controls");
controls.style.visibility = "visible";