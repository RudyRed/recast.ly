var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      q: options.query,
      type: 'video'
    },
    success: function (data) {
      var dataBlob = data;
      console.log('datablob called: ', dataBlob);
    },
    error: function (data) {
      console.error('backcats: Failed to send message', data);
    }
  });
};

window.searchYouTube = searchYouTube;


// ('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '5',
//                  'part': 'snippet',
//                  'q': 'hockey',

