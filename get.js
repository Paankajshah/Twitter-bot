const Twit = require('twit')
const config = require('./config')
const T = new Twit(config)


function getTweets(){
  
    T.get('search/tweets', { q: '#covid19', count: 5 }, function(err, data, response) {
    
      if(err){
        console.log(err.message);
    
      }
    
      else{
      const random = Math.floor(Math.random()*5);
      console.log(data.statuses[random].text); 
    //   T.post('statuses/retweet/:id', { id: data.statuses[random].id_str }, function (err, data, response) {
    //     console.log(data)
    //   })
     }

           
        });
    
       
    
    
    }

    exports.getTweets=getTweets;