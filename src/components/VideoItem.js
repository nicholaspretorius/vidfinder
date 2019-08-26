import React, { Component } from "react";
import "./VideoItem.css";

class VideoItem extends Component {
  state = {};
  render() {
    const { title, thumbnails, description } = this.props.video.snippet;
    return (
      <div className="item video-item">
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
