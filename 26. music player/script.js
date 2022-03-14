const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const progressEl = document.querySelector("#progress");
const armEl = document.querySelector("#arm");
const coverImg = document.querySelector("#cover");
const audio = document.querySelector("#audio");


playBtn.addEventListener("click", toggleMusic());

let isPlaying = false;

function toggleMusic() {
    if (isPlaying == false) {
        audio.play();
        isPlaying = true;
        armEl.classList.toggle("rotated");
        coverImg.style.animationPlayState = "running";
    } else if (isPlaying == true) {
        audio.pause();
        isPlaying = false;
        armEl.classList.toggle("rotated");
        coverImg.style.animationPlayState = "paused";
    }

}

let currIndex = 0;
let tracks = [
    "lane8", "lexie"
];

loadTrack(tracks[currIndex]);
function loadTrack(track) {
    audio.src=`music/${track}.mp3`;
    coverImg.src=`iamges/${track}.jpg`;
}

function nextTrack() {
    currIndex++;
    if (currIndex + 1 == tracks.length) {
        currIndex = 0;
    }

    loadTrack(tracks[currIndex]);
}

function prevTrack() {
    currIndex--;
    if (currIndex < 0) {
        currIndex = tracks.length - 1;
    }

    loadTrack(tracks[currIndex]);

}