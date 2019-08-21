import React from 'react';

const VideoItem = props => {
  return (
    <div>{props.video.snippet.title}</div>
  )
}

export default VideoItem;