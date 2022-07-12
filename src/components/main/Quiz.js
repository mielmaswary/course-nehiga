import React from "react";
import { useState } from "react";

const Quiz = (props) => {
  const [answerClassName, setAnswerClassName] = useState("answerOption");

  const answerClickHanlde = (event, id) => {
    console.log(event.target);
    const chosenAnswer = event.target.innerHTML;

    if (chosenAnswer == props.correctAnswer) {
      props.setLessonNum((prevLessonNum) => prevLessonNum + 1);
      props.setIsBetWeenLessons(true);
      setTimeout(() => {
        props.setIsBetWeenLessons(false);
      }, 2000);
    } else {
      props.openModal();
    }
  };

  const answersOption = props.options.map((option, id) => {
    return (
      <div key={id} className={answerClassName} onClick={answerClickHanlde}>
        {option}
      </div>
    );
  });
  return (
    <div className="inner-container">
      <h3 className="question-headline">:ענה על השאלה הבאה </h3>
      <h4 className="question">{props.q}</h4>
      {answersOption}
    </div>
  );
};

export default Quiz;
