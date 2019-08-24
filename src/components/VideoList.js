import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  state = {};
  render() {
    console.log("VideoList: ", this.props.videos);
    const { videos } = this.props;

    const rendered = videos.map(video => {
      return <VideoItem key={video.etag} video={video} />;
    });

    return <div className="ui divided list">{rendered}</div>;
  }
}

export default VideoList;
