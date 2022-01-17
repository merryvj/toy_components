window.onload = function() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onmouseenter = showImg;
        images[i].onmouseout = blurImg;

    }
}

function showImg(e) {
    e.target.classList.add("shown");
}

function blurImg(e) {
    e.target.classList.remove("shown");
}