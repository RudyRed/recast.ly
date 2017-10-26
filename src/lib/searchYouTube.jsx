window.firstLoad = true;
var searchYouTube = ({max, key, query}, context) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      maxResults: max,
      key: key,
      part: 'snippet',
      q: query,
      type: 'video'
    },
    success: function (data) {
      var dataBlob = data;
      window.APIdata = data;
      if (!window.firstLoad) {

      }

      if (window.firstLoad) {
        ReactDOM.render(<App videoData={dataBlob.items}/>, document.getElementById('app'));
        window.firstLoad = false;
      }
      console.log('datablob called: ', dataBlob);
    },
    error: function (data) {
      console.error('backcats: Failed to send message', data);
    }
  });
};

window.searchYouTube = searchYouTube;
// window.youtubeSearchData = window.searchYouTube({max: 5, query: 'hockey', key: window.YOUTUBE_API_KEY})

// ('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '5',
//                  'part': 'snippet',
//                  'q': 'hockey',

 