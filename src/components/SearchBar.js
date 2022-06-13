import React from "react";

class SearchBar extends React.Component{
  state = {term : ""};

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  onSearchChange = (event) => {
    this.setState({ term: event.target.value });
  }

  render(){
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Search"
            value={this.state.term} onChange={this.onSearchChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;