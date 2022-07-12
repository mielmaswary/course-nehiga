import React from "react";
import { useState } from "react";
import Lesson from "./Lesson";
import WellDone from "./WellDone";

import lessons from "../../data/lessoonsData";

const Main = (props) => {
  const [lessonNum, setLessonNum] = React.useState(0);
  const [isBetweenLessons, setIsBetWeenLessons] = useState(false);
  return (
    <div>
      {isBetweenLessons ? (
        <WellDone />
      ) : (
        <Lesson
          setLessonNum={setLessonNum}
          lesson={lessons[lessonNum]}
          isBetweenLessons={isBetweenLessons}
          setIsBetWeenLessons={setIsBetWeenLessons}
          openModal={props.openModal}
        />
      )}
    </div>
  );
};

export default Main;
