import React from "react";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  render(){
    return (
      <div className="ui container">
        <h1>MyTube</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
