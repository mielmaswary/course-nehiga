import React from "react";
import { useState } from "react";
import Lesson from "./Lesson";
import WellDone from "./WellDone";

import lessons from "../../data/lessoonsData";
import EndScreen from "./EndScreen";

const Main = (props) => {
  const [lessonNum, setLessonNum] = React.useState(0);
  const [isBetweenLessons, setIsBetWeenLessons] = useState(false);
  const [isEndLessons, setIsEndLessons] = useState(false);
  return (
    <div>
      {lessonNum > 7 ? (
        <EndScreen />
      ) : isBetweenLessons ? (
        <WellDone />
      ) : (
        <Lesson
          setLessonNum={setLessonNum}
          lesson={lessons[lessonNum]}
          isBetweenLessons={isBetweenLessons}
          setIsBetWeenLessons={setIsBetWeenLessons}
          isEndLessons={isEndLessons}
          setIsEndLessons={setIsEndLessons}
          openModal={props.openModal}
        />
      )}
    </div>
  );
};

export default Main;
