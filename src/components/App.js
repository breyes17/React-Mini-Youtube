import React from "react";
import SearchBar from "./SearchBar";
import youtube, { KEY } from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchText("Air Supply");
  }

  onSearchText = async (text) => {
    const response = await youtube.get("/search", {
      params: {
        q: text,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onSelectVideo = (video) => this.setState({ selectedVideo: video });

  render() {
    return (
      <div className="ui container">
        <SearchBar search={this.onSearchText} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onSelectVideo={this.onSelectVideo}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
