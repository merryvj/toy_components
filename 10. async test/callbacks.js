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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

getPosts();
createPost({title: "third post", body:"writing wizards"}, getPosts);