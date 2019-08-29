import React, { Component } from "react";

class VideoDetail extends Component {
  state = {};
  render(props) {
    if (!this.props.video) {
      return <div></div>;
    }

    const { snippet, id } = this.props.video;

    return (
      <>
        <div className="ui embed">
          <iframe
            src={`https://www.youtube.com/embed/${id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={snippet.title}
          ></iframe>
        </div>
        <div className="ui segment">
          <div className="ui header">
            <h4>{snippet.title}</h4>
          </div>
          <div className="ui content">{snippet.description}</div>
        </div>
      </>
    );
  }
}

export default VideoDetail;
