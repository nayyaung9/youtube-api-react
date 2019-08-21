import React, { Component } from 'react'

class SearchBar extends Component {

  state = { term: '' }

  onInputChange = event => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = event => {
    event.preventDefault();

    // parent component is told what current term is
    this.props.onSubmit(this.state.term);
    
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input  
            type="text" 
            value={this.state.term} 
            onChange={this.onInputChange}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;