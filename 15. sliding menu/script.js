const nav = document.querySelector("nav");

const toggle = document.getElementById("toggle");

//open menu
toggle.addEventListener('click', () => {
    toggleMenu();
});

//hide menu when clicking elsewhere
window.addEventListener('click', function(e){
    if (document.getElementById("main").contains(e.target)) {
        toggleMenu();
    }
})

function toggleMenu() {
    nav.classList.toggle('open');
}