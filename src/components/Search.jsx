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
        <input placeholder='Search' onChange={this.handleChange} className="form-control" type="text" />
        <button className="btn hidden-sm-down" onClick={this.handleClick}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }


  handleClick() {
    console.log(this.state.inputValue);
  }

  handleChange(inputData) {
    console.log(inputData);
    // this.setState({ inputValue: inputData.target.value });
    // window.searchYouTube({max: 5, query: inputData, key: window.YOUTUBE_API_KEY}, this.props.appState);
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


///
