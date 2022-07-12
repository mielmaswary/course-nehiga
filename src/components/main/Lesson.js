import React from "react";
import Quiz from "./Quiz";
import Video from "./Video";

const Lesson = (props) => {
  return (
    <div className="container">
      <Video
        lessonNum={props.lessonNum}
        url={props.lesson.videoUrl}
        lessonName={props.lesson.lessonName}
        id={props.lesson.id}
      />
      <Quiz
        lessonNum={props.lessonNum}
        setLessonNum={props.setLessonNum}
        q={props.lesson.quiz[0].q}
        options={props.lesson.quiz[0].options}
        correctAnswer={props.lesson.quiz[0].correctAnswer}
        isBetweenLessons={props.isBetweenLessons}
        setIsBetWeenLessons={props.setIsBetWeenLessons}
        openModal={props.openModal}
      />
    </div>
  );
};

export default Lesson;
