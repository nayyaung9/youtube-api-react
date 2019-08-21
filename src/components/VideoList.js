import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const videoItems = videos.map((video) => {
    return <VideoItem video={video}/>
  });

  return <div>{videoItems}</div>
}

export default VideoList;