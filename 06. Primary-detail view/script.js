
let tabs = document.getElementsByClassName("tab");
let detailPages = document.getElementsByClassName("page");
let detailArea = document.querySelector(".pageDetail");

function showDetail(selected, pageID){
    for (let tab of tabs){
        tab.classList.remove("active-tab");
    }

    selected.classList.add("active-tab");

    let detail = document.getElementById(pageID);
    detailArea.innerHTML = detail.innerHTML;
    detailArea.style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
    detailArea.style.color = window.getComputedStyle(selected).color;

}

document.onload(showDetail(tabs[0], "1"));