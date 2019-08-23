import React from 'react'

// material-ui
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const VideoDetail = ({ video }) => {

  if(!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return(
    <React.Fragment>
      
      <iframe src={videoSrc} title={video.snippet.title} width="100%" height="425" allowFullScreen></iframe>

      <div className="videoItem__data" style={{ padding: '20 0' }}>
        <div className="videoItem__content" style={{ paddingBottom: 20}}>
          <Typography variant="h5" component="h3">
            { video.snippet.title }
          </Typography>
        </div>

        <Divider />

        <div style={{ padding: '20 0'}}>
          <TextField
            id="standard-name"
            label="Add a public comment"
            fullWidth
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default VideoDetail;