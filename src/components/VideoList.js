import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectVideo }) => {
  return (
    <div className="ui relaxed divided list">
      {videos.map((video, i) => (
        <VideoItem onSelectVideo={onSelectVideo} key={i} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
