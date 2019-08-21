import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  onSearchSubmit = query => {
    console.log("query: ", query);
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

export default App;
