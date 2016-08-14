class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      currentVideoList: exampleVideoData,
      currentQuery: 'Jason Bourne'
    };
    this.videoClick = this.videoClick.bind(this);
    this.setVideoList = this.setVideoList.bind(this);
    this.options = {query: this.state.currentQuery, key: YOUTUBE_API_KEY, max: '10' };
  }


  componentWillMount() {
    this.props.searchYouTube(this.options, this.setVideoList);
  }

  inputTyping(text) {
    console.log(text);
    this.setState({
      currentQuery: text
    });
    this.props.searchYouTube({query: this.state.currentQuery, key: YOUTUBE_API_KEY, max: '10'}, this.setVideoList);
  }


  setVideoList(videoList) {
    this.setState({
      currentVideoList: videoList
    });
  }

  videoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav handleInputTyping = {this.inputTyping.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList handleVideoClick={this.videoClick} videos={this.state.currentVideoList}/>
        </div>
      </div>
   );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
