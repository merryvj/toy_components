const textbox = document.querySelector("#in");
const label = document.querySelector("#label")

textbox.addEventListener("input", (event) => {
    const max = 500;
    let chars = event.target.value.length;
    let labelText = "";


    if (chars >= 500) {
        labelText = "0 characters left";
        event.preventDefault();
    } 

    else if (chars < 50) {
        labelText = "Give me a little more...";
    }
    
    else {
        labelText = `${max - chars} characters left`;
    }

    label.innerHTML = labelText;
}) 

const bg = document.querySelector("body");

textbox.addEventListener("focus", (event) => {
    bg.style.backgroundColor = "red";
});

textbox.addEventListener("blur", (event) => {
    bg.style.backgroundColor = "purple";
});