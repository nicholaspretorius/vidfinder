import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import keys from "../config/keys";

import youtube from "./../api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentWillMount() {
    this.onSearchSubmit("skateline");
  }

  onSearchSubmit = async query => {
    console.log("query: ", query);
    try {
      const res = await youtube.get("/youtube/v3/search", {
        params: {
          part: "snippet",
          q: query,
          key: keys.apiKeyYouTube,
          maxResults: 3
        }
      });
      console.log("Videos: ", res);
      this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  onVideoSelected = selectedVideo => {
    console.log("From the app: ", selectedVideo);
    this.setState({ selectedVideo: selectedVideo });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.videos.length > 0 ? (
          <div className="ui stackable grid">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected} />
            </div>
            )
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
