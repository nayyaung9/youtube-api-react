import React from 'react';

// material-ui
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const VideoItem = ({ video , onVideoSelect }) => {
  return (

      <div onClick={() => onVideoSelect(video)}>
        <Grid container spacing={2}>
        <Grid item xs={8} sm={8}>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} width="100%"/>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Typography variant="body2">{video.snippet.title}</Typography>
        </Grid>
        </Grid>
      </div>
  )
}

export default VideoItem;