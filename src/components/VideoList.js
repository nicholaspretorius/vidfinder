import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Video List</h3>
        <VideoItem />
      </div>
    );
  }
}

export default VideoList;
