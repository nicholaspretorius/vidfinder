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
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoDetail />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
