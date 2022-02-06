const postContainer = document.getElementById("post-container");
const loader = document.querySelector(".loader");


let page = 0;
let limit = 10;
async function getData(){
    let response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${page}&_limit=${limit}`);
    if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
    }

    let data = await response.json();
    return data;
}

async function showData(){
    let data = await getData();
    console.log(data);
    data.forEach(item => {
        const postEl = document.createElement("div");
        postEl.innerHTML = `
            <div class="photo-container">
                <img src=${item.url}>
            </div>
        `;
        postContainer.appendChild(postEl);

    })
}

showData();

function showLoader() {
    loader.classList.add("show");
}

window.addEventListener("scroll", () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5){

    }
})