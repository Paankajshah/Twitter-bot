const Twit = require('twit')
const config = require('./config')
const fs = require('fs')
const T = new Twit(config)


function uploadImage(){

    var b64content = fs.readFileSync('F:/pankaj/Javascript Prac/JavascriptGames/images/milkshake.png', { encoding: 'base64' })
  
    // first we must post the media to Twitter
    T.post('media/upload', { media_data: b64content }, function (err, data, response) {
      // now we can assign alt text to the media, for use by screen readers and
      // other text-based presentations and interpreters
      var mediaIdStr = data.media_id_string
      var altText = "Small flowers in a planter on a sunny balcony, blossoming."
      var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
    
      T.post('media/metadata/create', meta_params, function (err, data, response) {
        if (!err) {
          // now we can reference the media and post a tweet (media will attach to the tweet)
          var params = { status: 'loving life #nofilter', media_ids: [mediaIdStr] }
    
          T.post('statuses/update', params, function (err, data, response) {
            console.log(data)
          })
        }
      })
    })
    
  }

  exports.uploadImage=uploadImage;
  
  