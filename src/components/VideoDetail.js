import React from 'react'

const VideoDetail = ({ video }) => {

  if(!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return(
    <React.Fragment>
      
      <iframe src={videoSrc} width="560" height="315" allowfullscreen></iframe>

      <div className="card">
        <div className="card-body">
          <div className="card-title">{video.snippet.title}</div>
          <div className="card-text">{video.snippet.description}</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default VideoDetail;