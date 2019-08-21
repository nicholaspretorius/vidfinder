import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  state = {};
  render(props) {
    console.log("VideoList: ", this.props.videos);
    const { videos } = this.props;
    return (
      <div>
        <h3>Results: </h3>
        {videos.map(video => {
          return <VideoItem key={video.etag} video={video} />;
        })}
      </div>
    );
  }
}

export default VideoList;
