import React from 'react';

const VideoItem = ({ video , onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <h2>{video.snippet.title}</h2>
    </div>
  )
}

export default VideoItem;