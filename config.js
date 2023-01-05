module.exports = {
    authentication: {
        consumer_key: "",
        consumer_secret: "",
        access_token_key: "",
        access_token_secret: ""
    },

    GET_Tweets: false,
    POST_Tweet: false,

    params: {
        screen_name: "",
        tweets_count: 1 // modify the count of the tweets to return
    },

    tweet: {
        create: {
            status: ""
        }
    }
}