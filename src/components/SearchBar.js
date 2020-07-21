import React from "react";
import "../css/SearchBar.css";

class SearchBar extends React.Component {
  state = { text: "" };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.search(this.state.text);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmitForm}>
          <div className="field">
            <label>Search Video</label>
            <input
              type="text"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
