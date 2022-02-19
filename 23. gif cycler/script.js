let gifs = [
    "https://media4.giphy.com/media/ftBbZr2UpqFOsANcuC/giphy.gif?cid=ecf05e477wk7lic72on1j8tw13pj54xszux7szer0gllk3x3&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/igu0h5oZIKQ3f5ZDq9/giphy.gif?cid=ecf05e470s53d4mctw8lunbaci47uawu0aek42ehu54e7kxg&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/LRCDfVO39QRqR9C2Lb/giphy.gif?cid=ecf05e47al13wglp6j9gqt5jssab6brg9w0alvbnthk2jyes&rid=giphy.gif&ct=g",

]


const gifEl = document.querySelector(".gif");
let currGifIndex = 0;

gifEl.addEventListener("click", () => {
    if (currGifIndex + 1 == gifs.length) {
        currGifIndex = 0;
    } else {
        currGifIndex++;
    }

    gifEl.src = gifs[currGifIndex];
})