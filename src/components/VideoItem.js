import React, { Component } from "react";

class VideoItem extends Component {
  state = {};
  render() {
    const { title, thumbnails, description } = this.props.video.snippet;
    return (
      <div className="item">
        <div className="small image">
          <img src={thumbnails.default.url} alt={description} />
        </div>
        <div className="content">
          <h4 className="header">{title}</h4>
        </div>
      </div>
    );
  }
}

export default VideoItem;
