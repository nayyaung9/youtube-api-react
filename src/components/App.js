import React, { Component } from 'react'

// Components
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

// API 
import youtube from '../api/youtube'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = { videos: [], onSelectedVideo : null }

  onFormSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items })
    console.log(this.state.videos)
  }

  onVideoSelect = (video) => {
    console.log(video)
  }

  render() {
    return(
      <div className="container">
        <SearchBar onSubmit={this.onFormSubmit}/>
        <div className="row">
          <div className="col-md-6">
            <VideoDetail />
          </div>
          <div className="col-md-6">
            <VideoList 
              onVideoSelect={this.onVideoSelect} 
              videos={this.state.videos} 
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;