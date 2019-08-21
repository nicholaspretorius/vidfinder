import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    query: null
  };

  onFormSubmit = e => {
    e.preventDefault();
    console.log("state: ", this.state.query);
    this.props.onSubmit(this.state.query);
  };

  onInputChange = e => {
    console.log("value: ", e.target.value);
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              name="search-term"
              placeholder="Search for videos..."
              onChange={this.onInputChange}
            />
          </div>
        </form>
        <div>Query: {this.state.query}</div>
      </div>
    );
  }
}

export default SearchBar;
