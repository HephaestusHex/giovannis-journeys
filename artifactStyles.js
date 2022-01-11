const tweetsDisplay = document.getElementById("tweets");
const tweets = ["tweet_1.png", "tweet_2.png", "tweet_3.png", "tweet_4.png", "tweet_5.png", "tweet_6.png", "tweet_7.png", "tweet_8.png"];

tweetsDisplay.addEventListener("click", function() {
    console.log("hello")
    tweetsDisplay.styles.background = `url(${tweets[1]})`;
});