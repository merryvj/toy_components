const totalEl = document.getElementById("total");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");


const historyEl = document.getElementById("history");
const descEl = document.getElementById("description");
const amountEl = document.getElementById("amount");

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

function addEntry(e){
    e.preventDefault();
    let desc = descEl.value.trim();
    let amt = amountEl.value.trim();

    if(desc && amt) {
        let entry = {
            id: generateID(),
            amount: parseFloat(amt),
            desc: desc,
        }
        entries.push(entry);
        makeEntryEl(entry);
        updateValues();

        descEl.value = '';
        amountEl.value = '';
    }
}

function generateID(){
    return Math.floor(Math.random() * 1000);
}

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

    totalEl.innerText = total;
    incomeEl.innerText = income;
    expenseEl.innerText = expense;
}



function init(){
    historyEl.innerHTML = '';
    entries.forEach(entry => makeEntryEl(entry));
    
    updateValues();
}

document.onload = init();

submitBtn.addEventListener("click", addEntry);