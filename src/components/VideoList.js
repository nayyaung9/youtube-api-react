import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map((video) => {
    return (
        <VideoItem 
          video={video} 
          key={video.id.videoId} 
          onVideoSelect={onVideoSelect}
        />
    )
  });

  return <div>{videoItems}</div>

}

export default VideoList;