import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <h2>{video.snippet.title}</h2>
    </div>
  )
}

export default VideoItem;