import React from "react";
import ReactPlayer from "react-player";

const Video = (props) => {
  const url = props.url;
  const lessonName = props.lessonName;
  const lessonId = props.id;
  return (
    <div className="inner-container">
      <h3 className="lesson-headline">{`סרטון מספר: ${lessonId} | ${lessonName}`}</h3>
      <ReactPlayer width="100%" url={url} />
    </div>
  );
};

export default Video;
