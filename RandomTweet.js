
  const Twit = require('twit')
  const config = require('./config')
  const T = new Twit(config)
  
  
  function tweetit(){
    let random = Math.floor(Math.random()*100);

    const tweet ={
      status: 'random number ' + random + '  #coding'
    }

    console.log(tweet)
  
    T.post('statuses/update', tweet, function(err, data, response) {
      if(err){
        
      console.log(err.message)
      }

      else{
        
      console.log(`tweet tweeted is => ${data.text}`)
      }
    })
  }

  exports.tweetIt=tweetit;

