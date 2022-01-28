
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
            <li class='book' data-self=${book.selfLink}>
                <img
                    class='book-cover'
                    src=${book.volumeInfo.imageLinks.thumbnail}
                    
                    />
                <h3> ${book.volumeInfo.title}</h3>
            </li>
        `;

    });

    results.innerHTML = `
        <ul class='books'>
            ${html}
        </ul>
    `;
}

results.addEventListener('click', e => {
    let clickedEl = e.target.parentNode; 
    console.log(clickedEl);

    if (clickedEl.classList.contains('book')) {
        let selfLink = clickedEl.getAttribute('data-self');
        let parentPos = clickedEl.getBoundingClientRect();

        getBookDetails(selfLink, parentPos);
    }
})

async function getBookDetails(selfUrl, position) {
    let res = await fetch(selfUrl);
    let data = await res.json();
    
    let detailModal = document.createElement('div');
    detailModal.classList.add('detail-modal');
    detailModal.innerHTML = `
        <p> ${data.volumeInfo.description} </p>
    `

    //TODO: account for position offset
    detailModal.style.top = position.top;
    detailModal.style.left = position.left;

    //hide modal on mouse out
    detailModal.addEventListener('mouseout', () => {
        detailModal.style.display = 'none';
    })

    results.append(detailModal);



}