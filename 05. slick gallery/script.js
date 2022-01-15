


let posts = [];
getPosts();

let activeIndex = 0; //current post


async function getPosts() {
    let url = "https://www.reddit.com/r/aww/top/.json?t=all";
    let response = await fetch(url);

    let res = await response.json();
    posts = res.data.children;

    createPosts();
}


function createPosts() {

    let slidesHTML = '';
    
    for (var i = 0; i < posts.length; i++){
        let post = posts[i];

        if (post.data.is_video == true) {
            continue;
        }

        slidesHTML += `
        <div class="slide">
            <div class="slide-img">
                <img src=${post.data.preview.images[0].source.url}>
             </div>
            <div class="slide-caption">
                ${post.data.title}
            </div>
        </div>
        `

    }

    const galleryContentEl = document.getElementsByClassName("gallery-content")[0];
    galleryContentEl.innerHTML = slidesHTML;

    showPost(activeIndex);
}

function changeSlide(n){
    showPost(activeIndex += n);
}

function showPost(n){
    if (n >= posts.length) {
        activeIndex = 0;
    }

    if (n < 0) {
        activeIndex = posts.length - 1;
    }

    

    let slides = document.getElementsByClassName("slide");

    console.log(slides);

    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[activeIndex].style.display = "block";
}


