import React from "react";
import NumberIcon from "./NumberIcon.jsx";
import "./ProgressBar.css"; // Import CSS

const ProgressBar = ({
  currentQuestion,
  totalQuestions,
  onQuestionClick,
  answers,
}) => {
  return (
    <div className="progress-bar">
      {Array.from({ length: totalQuestions }, (_, index) => {
        const questionNumber = index + 1;
        let status = "not-done";

        if (answers[questionNumber - 1] !== null) {
          status = "done";
        }

        if (questionNumber === currentQuestion) {
          status =
            answers[questionNumber - 1] !== null ? "done active" : "active";
        }

        return (
          <NumberIcon
            key={questionNumber}
            number={questionNumber}
            status={status}
            onClick={() => onQuestionClick(questionNumber)}
          />
        );
      })}
    </div>
  );
};

export default ProgressBar;
