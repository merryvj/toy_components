


let posts = [];

async function getImages() {
    let url = "https://www.reddit.com/r/aww/top/.json?t=all";
    let response = await fetch(url);

    let res = await response.json();
    posts = res.data.children;
    console.log(posts);

    populateImages();
}

function populateImages() {

    let slidesHTML = '';
    
    for (var i = 0; i < posts.length; i++){
        let post = posts[i];
        slidesHTML += `
        <div class="slide">
            <div class="slide-img">
                <img src=${post.data.preview.images[0].source.url}
             <div>
            <div>
                ${post.data.title}
            </div>
        </div>
        `
    }

    const galleryContentEl = document.getElementsByClassName("gallery-content")[0];
    galleryContentEl.innerHTML = slidesHTML;

}

getImages();
