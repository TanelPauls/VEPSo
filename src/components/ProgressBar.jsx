import React from "react";
import NumberIcon from "./NumberIcon.jsx";
import "./ProgressBar.css"; // Import CSS

//dynamic progressbar to visually track the progress
const ProgressBar = ({
  currentQuestion,
  totalQuestions,
  onQuestionClick,
  answers,
  hasExpanded,
}) => {
  return (
    <div className="progress-bar">
      {" "}
      {/* generate the question number to display to player */}
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

        if (hasExpanded && questionNumber === totalQuestions) {
          status = "control not-done";
        }

        return (
          <NumberIcon
            key={questionNumber}
            number={questionNumber}
            status={status}
            onClick={() => onQuestionClick(questionNumber)}
            isNew={hasExpanded && questionNumber === totalQuestions}
          />
        );
      })}
    </div>
  );
};

export default ProgressBar;
