import React, { Component } from "react";

class VideoItem extends Component {
  state = {};
  render(props) {
    const { title, thumbnails, description } = this.props.video.snippet;
    return (
      <div>
        <h4>{title}</h4>
        <img src={thumbnails.default.url} alt={description} />
      </div>
    );
  }
}

export default VideoItem;
