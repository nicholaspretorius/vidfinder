import React, { Component } from "react";
import "./VideoItem.css";

class VideoItem extends Component {
  state = {};

  onVideoSelected = e => {
    console.log("From item: ", this.props.video);
    this.props.onVideoSelected(this.props.video);
  };

  render() {
    const { title, thumbnails, description } = this.props.video.snippet;
    return (
      <div className="item video-item" onClick={this.onVideoSelected}>
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
