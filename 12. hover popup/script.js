
async function getImages() {
    let url = "https://www.reddit.com/r/aww/top/.json?t=all";
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderImages() {
    let imageData = await getImages();

    let html = '';

    imageData.data.children.forEach(image => {
        let htmlSegment = `<div class="image">
                            <img src=${image.data.preview.images[0].source.url}>
                            <div class="details">
                                <h3 class="title"> ${image.data.title} </h3>
                                <button class="actions"> hey </button>
                            </div>
                           </div>
                            `;
        html += htmlSegment;
        
    });

    let gallery = document.querySelector(".gallery");
    gallery.innerHTML = html;

    let imageElems = document.querySelectorAll(".image");
    imageElems.forEach(image => {
        image.addEventListener("mouseenter", function() {
            
            setTimeout(() => {
                image.classList.add("expanded");
            }, 2000);
        });

        image.addEventListener("mouseout", function() {
            image.classList.remove("expanded");
            
            
        })
    })

}

renderImages();

