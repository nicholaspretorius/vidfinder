import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import keys from "../config/keys";

import youtube from "./../api/youtube";

class App extends React.Component {
  state = {
    videos: []
  };
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
      this.setState({ videos: res.data.items });
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.videos.length > 0 ? (
          <div className="ui stackable grid">
            <div className="ten wide column">
              <VideoDetail video={this.state.videos[0]} />
            </div>
            <div className="six wide column">
              <VideoList videos={this.state.videos} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
