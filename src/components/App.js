import React, { Component } from 'react'

// Components
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

// API 
import youtube from '../api/youtube'

// material-ui
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

class App extends Component {

  state = { videos: [], onSelectedVideo: null }

  onFormSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ 
      videos: response.data.items, 
      onSelectedVideo: response.data.items[0] 
    });
    console.log(this.state.videos)
  }

  onVideoSelect = (video) => {
    this.setState({ onSelectedVideo: video })
  }

  render() {
    return(
      <Container fixed>
        <SearchBar onSubmit={this.onFormSubmit}/>
          <Grid container spacing={2} style={{ marginTop: 70 }}>
            <Grid item xs={12} sm={8}>
              <VideoDetail video={this.state.onSelectedVideo}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <VideoList 
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos} 
              />
            </Grid>
          </Grid>
      </Container>
    )
  }
}

export default App;