const { Twitter } = require("twitter");

const client = new Twitter({
    consumer_key: "",
    consumer_secret: "",
    access_token_key: "",
    access_token_secret: ""
});

const params = {
    // screen name of the user
    q: "",

    // number of tweets to return
    count: 10
};

// lookup tweets of the user twitter account
client.get("search/tweets", params, (error, tweets, response) => {
    console.log(tweets);
});

// post a tweet
client.post("statuses/update", { status: "" }, (error, tweet, response) => {
    console.log(tweet);
});
