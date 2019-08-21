import React, { Component } from 'react'

// Components
import SearchBar from './SearchBar'
import VideoList from './VideoList'

// API 
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
    console.log(this.state.videos)
  }

  render() {
    return(
      <div>
        <SearchBar onSubmit={this.onFormSubmit}/>
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App;