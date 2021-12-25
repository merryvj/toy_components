class Database {
    constructor() {
        this.tweets = []
    }

    query({ lastTweetId, pageSize }) {

    }

    insert(tweet) {

    }

}

const database = new Database();

function getTweetsHandler(data) {
    const pageSize = data.pageSize;
    const sortOrder = data.sortOrder;
    const lastTweetId = data.lastTweetId;

    if (sortOrder !== 'recent') {
        throw new Error('I dont know how to handle that');
    }

    return database.query({ lastTweetId, pageSize });
}

function postTweetHandler(data) {
    database.insert(data.tweet);
}

const endpoints = {
    "/tweets": {
        "get": getTweetsHandler,
        "post": postTweetHandler
    }
}