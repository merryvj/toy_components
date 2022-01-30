const posts = [
    {
        title:"a post",
        body: "very interesting content"
    },
    {
        title:"another post",
        body: "super fascinating thoughts"
    },

]

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error){
                resolve();
            } else {
                reject('Error!')
            }
        }, 2000);

    });
  
}

// createPost({title: "third post", body:"writing wizards"})
//     .then(getPosts)
//     .catch(err => console.log(err));

async function init() {
    //wait for this to complete first
    await createPost({title: "third post", body:"writing wizards"});
    getPosts();

}

init();