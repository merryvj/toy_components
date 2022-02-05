const totalEl = document.getElementById("total");
const historyEl = document.getElementById("history");

const entryEl = document.getElementById("entry");
const submitBtn = document.getElementById("submit");


let total = 0;

let entries = [
    {
        id: 1,
        amount: -100,
        desc: "a bottle of water"
    },
    {
        id: 2,
        amount: 100,
        desc: "a bottle of MILK"
    },
    {
        id: 3,
        amount: 12,
        desc: "a bottle of juice"
    },
]

function makeEntryEl(entry) {
    
    const sign = entry.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(entry.amount < 0 ? "minus" : "plus");
    item.innerHTML = `
        ${entry.desc} <span>${sign}${Math.abs(entry.amount)}</span>
    `;

    historyEl.append(item);
}

function updateValues(){
    let amounts = entries.map(entry => entry.amount);

    let total = amounts.reduce((acc, entry) => (acc += entry), 0);

    let income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0);

    let expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc =+ item), 0);
    
}



function init(){
    historyEl.innerHTML = '';
    entries.forEach(entry => makeEntryEl(entry));
    
    updateValues();
}

document.onload = init();