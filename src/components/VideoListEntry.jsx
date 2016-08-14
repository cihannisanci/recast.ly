var VideoListEntry = (props) => {

  return (
  <div
     className="video-list-entry">
    <div className="media-left media-middle">
      <img onClick={() => props.handleVideoClick(props.video)}
           className="media-object"  
           src={props.video.snippet.thumbnails.default.url} 
           alt="" />
    </div>
    <div className="media-body">
      <div onClick={() => props.handleVideoClick(props.video)} className="video-list-entry-title">{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
  );
};
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired,
  handleVideoClick: React.PropTypes.func.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
