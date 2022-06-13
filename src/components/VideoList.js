import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoClick}) => {

  const videoItems = videos.map((video, i) => {

    if(i === 0){
      return null;
    }

    return (
      <VideoItem video={video} key={video.id.videoId} onVideoClick={onVideoClick} />
    );
  });

  return(
    <div className="ui relaxed divided list">
      { videoItems }
    </div>
  );
}

export default VideoList;