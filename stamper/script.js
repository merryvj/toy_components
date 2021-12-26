var images = ['clown.png', 'cow.png', 'eyes.png', 'party.png', 'poo.png'];

var i = 0;

function createItem(event) {

    //get click position in window
    var x = event.clientX;
    var y = event.clientY;


    //create image
    const item = document.createElement("div");
    item.classList.add("item");
    document.getElementsByTagName("main")[0].appendChild(item);
    const image = document.createElement("img");
    image.src = "images/" + images[i];
    item.appendChild(image);

    //change cursor


    //position image
    const itemWidth = item.offsetWidth;
    const itemHeight = item.offsetHeight;
    item.style.top = `${y - itemHeight/2}px`
    item.style.left = `${x - itemWidth/2}px`

    //add random rotation
    item.style.transform = "rotate(" + Math.floor(Math.random() * (20 - -20) + -20) + "deg)";

    //increment counter for images
    i = (i === images.length - 1) ? 0 : i + 1;
    document.body.style.cursor = 'url("images/' + images[i] + '"), default';
    console.log(images[i]);



}


document.addEventListener("click", createItem);