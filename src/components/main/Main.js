import React from "react";
import { useState } from "react";
import Lesson from "./Lesson";
import WellDone from "./WellDone";

import lessons from "../../data/lessoonsData";

const Main = () => {
  const [lessonNum, setLessonNum] = React.useState(0);
  const [isBetweenLessons, setIsBetWeenLessons] = useState(false);
  console.log(isBetweenLessons);
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
        />
      )}
    </div>
  );
};

export default Main;
