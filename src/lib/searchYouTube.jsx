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
      if (!window.firstLoad) {
        context.setState({videoCollection: dataBlob.items});
      }
      if (window.firstLoad) {
        ReactDOM.render(<App videoData={dataBlob.items}/>, document.getElementById('app'));
        window.firstLoad = false;
      }
    },
    error: function (data) {
      console.error('backcats: Failed to send message', data);
    }
  });
};

window.searchYouTube = searchYouTube;
