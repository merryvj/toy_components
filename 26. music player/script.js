const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const progressEl = document.querySelector("#progress");
const armEl = document.querySelector("#arm");
const coverImg = document.querySelector("#cover");
const audio = document.querySelector("#audio");


playBtn.addEventListener("click", () => {
    armEl.classList.toggle("rotated");
    coverImg.style.animationPlayState = "running";

})