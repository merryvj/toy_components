let form = document.getElementById("item-form");
let itemList = document.getElementById("item-list");

form.addEventListener("submit", addItem);

let placeholders = [
    "even if it's one thing",
    "a little bit a day",
    "what did you do?",
    "bye bye panic monster",
    "to doo doo doo do"
]

function addItem(e) {
    e.preventDefault();
    
    var newItem = document.getElementById("item-input");
    var value = newItem.value.trim();
    if (value.length != 0){
        var li = document.createElement("li");
        li.className = "item";
        li.appendChild(document.createTextNode(value));
        itemList.appendChild(li);
        newItem.value = "";
    } else {
        newItem.placeholder = "just one thing please";
        setTimeout(() => {
            newItem.placeholder = getRandomPlaceholder();
        }, 3000);
    }
    
}

function getRandomPlaceholder() {
    let max = placeholders.length - 1;
    let x = Math.floor(Math.random() * (max - 0 + 1) + 0);
    return placeholders[x];
}

// function changePlaceholdler(text) {
//     let i = 0;
//     //typewriter effect
//     if (i < text.length) {
//         document.getElementById("item-input").placeholder += text.charAt(i);
//         i++;
//         setTimeout(changePlaceholdler, 10);
//     }
// }

setInterval(() => {
    document.getElementById("item-input").placeholder = getRandomPlaceholder();
}, 3000);