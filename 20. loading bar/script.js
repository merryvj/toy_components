
const progressEl = document.querySelector("#progress");
const bar = document.querySelector("#bar");
const content = document.querySelector("main");

let progress = 0;
function animateProgress() {
  if (progress == 0) {
    let animation = setInterval(update, 10);
    function update() {
      if (progress > 100) {
        clearInterval(animation);
        progress = 0;
        progressEl.style.opacity = 0;
        setTimeout(() => {
            progressEl.style.display = none;
        }, 2000);
      } else {
        progress++;
        bar.style.width = progress + "%";
      }
    }
  }
}

window.onload = function() {
  console.log("update");
  animateProgress();
};
