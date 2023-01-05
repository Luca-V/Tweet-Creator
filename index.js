const Twitter = require("twitter");
const config = require("./config");

const client = new Twitter({
    consumer_key: config.authentication.consumer_key,
    consumer_secret: config.authentication.consumer_secret,
    access_token_key: config.authentication.access_token_key,
    access_token_secret: config.authentication.access_token_secret
})

if (config.GET_Tweets === true) {
    const params = {
        q: config.params.screen_name,
        count: config.params.tweets_count
    };

    client.get("search/tweets", params, (error, tweets, response) => {
        console.log(tweets);
    });
} else if (config.POST_Tweet === true) {
    client.post("statuses/update", { status: config.tweet.create.status }, (error, tweet, response) => {
        console.log(tweet);
    });
} else {
    console.log("Please Configure the Fields Correctly");
}