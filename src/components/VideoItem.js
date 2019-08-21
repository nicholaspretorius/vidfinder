import React, { Component } from "react";

class VideoItem extends Component {
  state = {};
  render(props) {
    const { snippet } = this.props.video;
    return <div>{snippet.title}</div>;
  }
}

export default VideoItem;
