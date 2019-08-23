import React from 'react'

// material-ui
import Typography from '@material-ui/core/Typography'

const VideoDetail = ({ video }) => {

  if(!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return(
    <React.Fragment>
      
      <iframe src={videoSrc} width="100%" height="425" allowFullScreen></iframe>

      <div style={{ padding: 20 }}>
        <Typography variant="h5" component="h3">
          { video.snippet.title }
        </Typography>
        <Typography component="p">
          { video.snippet.description }
        </Typography>
      </div>
    </React.Fragment>
  )
}

export default VideoDetail;