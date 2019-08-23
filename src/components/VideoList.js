import React from 'react'
import VideoItem from './VideoItem';



const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map((video) => {
    return (
      <div>
     
  
      
          <VideoItem 
          video={video} 
          key={video.id.videoId} 
          onVideoSelect={onVideoSelect}
        />
     

  
    </div>
    )
  });

  return <div>{videoItems}</div>
}

export default VideoList;