class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" onClick={this.onVideoClick.bind(this)} src={this.props.videoData.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" onClick={this.onVideoClick.bind(this)}>{this.props.videoData.snippet.title}</div>
          <div className="video-list-entry-detail">{this.props.videoData.snippet.description}</div>
        </div>
      </div>
    );
  }
  onVideoClick () {
    console.log('hey');
    console.log(this.props.appState.currentVideo, 'currentvideo');
    console.log(this.props.index, 'index');

    this.props.appState.currentVideo = this.props.index;
  }
}


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
