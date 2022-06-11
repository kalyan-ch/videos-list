import React from "react";

class SearchBar extends React.Component{
  state = {term : ""};

  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render(){
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Search"
            value={this.state.term} onChange={(e) => { this.setState({ term: e.target.value }) }} />
        </form>
      </div>
    );
  }
}

export default SearchBar;