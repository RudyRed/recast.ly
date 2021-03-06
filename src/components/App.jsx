class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: 0,
      videoCollection: this.props.videoData
    };
  }
  
  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search appState={this}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7" id="VideoPlayer">
            <VideoPlayer video={this.state.videoCollection[this.state.currentVideo]} appState={this}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoCollection} appState={this}/>
          </div>
        </div>
      </div>
    );
  }
}

window.StartingData = window.searchYouTube({max: 5, query: 'Sidney Crosby Golden Goal', key: window.YOUTUBE_API_KEY});

//lifecycle hooks
//decouple collections 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
