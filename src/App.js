import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount(){
    this.onSearchBarSubmit('');
  }

  onVideoClick = (video) => {
    this.setState({ selectedVideo: video });
  };

  onSearchBarSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });

  }

  render(){
    return (
      <div className="ui container">
        <h1>MyTube</h1>
        <SearchBar onSubmit={this.onSearchBarSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={ this.state.selectedVideo } />
            </div>
            <div className="five wide column">
              <VideoList videos={ this.state.videos } onVideoClick={ this.onVideoClick } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
