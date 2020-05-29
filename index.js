const Twit = require('twit')
const { getTweets } = require('./get')
const { tweetIt } = require('./RandomTweet')
const { uploadImage } = require('./Upload.js')
const config = require('./config')
const fs = require('fs')
const T = new Twit(config)


setInterval(tweetIt, 5000);
// tweetIt();
// uploadImage();

//  var sanFrancisco = [
//   80.9033203125,
//   26.49024045886963
// ]

// var stream = T.stream('statuses/filter', { locations: sanFrancisco })

// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })
// var stream = T.stream('statuses/filter', { track: 'mango' })

// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })

// var stream = T.stream('statuses/filter', { track: '@devascode1' });

// stream.on('follow', function(msg){
//   console.log(msg);
// })

// var stream = T.stream('statuses/filter', {follow : ['1233212540731174913'] });
// stream.on('tweet', function (tweet) {

//  console.log(tweet.text)
//  T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
//     console.log(data)
//   })

// })



