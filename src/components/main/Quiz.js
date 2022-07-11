import React from "react";
import { useState } from "react";

const Quiz = (props) => {
  const [answerClassName, setAnswerClassName] = useState("answerOption");

  const answerClickHanlde = (event) => {
    const chosenAnswer = event.target.outerText;

    if (chosenAnswer == props.correctAnswer) {
      props.setLessonNum((prevLessonNum) => prevLessonNum + 1);
      props.setIsBetWeenLessons(true);
      setTimeout(() => {
        props.setIsBetWeenLessons(false);
      }, 1500);
    } else {
    }
  };

  const answersOption = props.options.map((option) => {
    return (
      <div className={answerClassName} onClick={answerClickHanlde}>
        {option}
      </div>
    );
  });
  return (
    <div className="inner-container">
      <h3 className="question-headline">ענה על השאלה הבאה: </h3>
      <h4 className="question">{props.q}</h4>
      {answersOption}
    </div>
  );
};

export default Quiz;
