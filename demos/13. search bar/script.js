
url = 'https://www.googleapis.com/books/v1/volumes?q=';

const form = document.getElementById('form');
const search = document.getElementById('search');
const results = document.getElementById('results');


form.addEventListener('submit', e => {
    e.preventDefault(); //doesn't submit to a file

    let searchTerm = search.value.trim();
    searchBooks(searchTerm);

    //TODO: check for empty search term
})

function searchBooks(term) {
    fetch(`${url}${term}`).then(response => response.json())
    .then(data => showData(data));

}

function showData(data) {
    let html = '';
    data.items.forEach(book => {
        html += `
            <li class='book' data-self=${book.selfLink} style='background-image: url(${book.volumeInfo.imageLinks.thumbnail})' >
            <h3 class='book-title'> ${book.volumeInfo.title}</h3>
            <h3 class='book-author'> ${book.volumeInfo.authors[0].split(' ').slice(-1)[0] } </h3>
            </li>
        `;

    });

    results.innerHTML = `
        ${html}
    `;
}

results.addEventListener('click', e => {
    let clickedEl = e.target.parentNode; 
    console.log(clickedEl);

    if (clickedEl.classList.contains('book')) {
        let selfLink = clickedEl.getAttribute('data-self');
        let parentPos = clickedEl.getBoundingClientRect();

        getBookDetails(selfLink, clickedEl);
    }
})

async function getBookDetails(selfUrl, activeBook) {
    let res = await fetch(selfUrl);
    let data = await res.json();
    
    let details = document.createElement("li");
    details.classList.add("book-details");
    details.innerHTML = `
        <p>${data.volumeInfo.description}</p>
    `;

    activeBook.insertAdjacentElement('afterend', details);
    activeBook.classList.add("active");

    


}