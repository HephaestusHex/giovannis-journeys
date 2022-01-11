const tweetsDisplay = document.getElementById("tweets");
var tweets = ["tweet_1.png", "tweet_2.png", "tweet_3.png", "tweet_4.png", "tweet_5.png", "tweet_6.png", "tweet_7.png", "tweet_8.png"];
var num = 0

tweetsDisplay.addEventListener("click", function() {
    if (num === 7) {
        num = 0;
    } else {
        num++;
    }
    tweetsDisplay.src = `${tweets[num]}`;
});