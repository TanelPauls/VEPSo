import React from "react";
import NumberIcon from "./NumberIcon.jsx";
import "./ProgressBar.css"; // Import CSS

const ProgressBar = ({ currentQuestion, totalQuestions = 9 }) => {
  return (
    <div className="progress-bar">
      {Array.from({ length: totalQuestions }, (_, index) => {
        const questionNumber = index + 1;
        let status = "not-done";

        if (questionNumber < currentQuestion) status = "done";
        if (questionNumber === currentQuestion) status = "active";

        return (
          <NumberIcon
            key={questionNumber}
            number={questionNumber}
            status={status}
          />
        );
      })}
    </div>
  );
};

export default ProgressBar;
