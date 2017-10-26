class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  
  render() {
    return (
      <div className="search-bar form-inline">
        <input placeholder='Search' onChange={this.handleChange.bind(this)} className="form-control" type="text" />
        <button className="btn hidden-sm-down" onClick={this.handleClick.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }


  handleClick() {
    searchYouTube({key: YOUTUBE_API_KEY, max: 5, query: this.state.inputValue}, this.props.appState);
  }

  handleChange(inputData) {
    var text = inputData.target.value;
    this.setState({ inputValue: text });
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

///
