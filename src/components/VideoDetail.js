import React, { Component } from "react";

class VideoDetail extends Component {
  state = {};
  render(props) {
    const { snippet } = this.props.video;
    return (
      <div>
        <h2>{snippet.title}</h2>
        <img src={snippet.thumbnails.high.url} alt={snippet.description} />
      </div>
    );
  }
}

export default VideoDetail;
