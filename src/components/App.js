import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'

class App extends Component {

  state = { videos: [] }

  onFormSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items })
  }

  render() {
    return(
      <div>
        <SearchBar onSubmit={this.onFormSubmit}/>
        <p>{this.state.videos.length} videos</p>
      </div>
    )
  }
}

export default App;