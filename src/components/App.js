import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'

class App extends Component {

  onFormSubmit = term => {
    youtube.get('/search', {
      params: {
        q: term
      }
    });
    console.log(term);
  }

  render() {
    return(
      <div>
        <SearchBar onSubmit={this.onFormSubmit}/>
      </div>
    )
  }
}

export default App;