class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      currentVideo: exampleVideoData[0]
    };
    this.videoClick = this.videoClick.bind(this);
  }

  videoClick(video) {
    console.dir(video);
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList listedVideo={this.videoClick} videos={exampleVideoData}/>
      </div>
    </div>
   );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
