import React, { useState } from "react";
import ImageContainer from "./ImageContainer.jsx";
import ProgressBar from "./ProgressBar.jsx";
import "./GameWindow.css";

const GameWindow = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 7;

  const handleQuestionClick = (questionNumber) => {
    setCurrentQuestion(questionNumber);
  };
  return (
    <>
      <div className="fill">
        <ImageContainer currentQuestion={currentQuestion} />

        <div>
          <ProgressBar
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            onQuestionClick={handleQuestionClick}
          />
        </div>
      </div>
    </>
  );
};
export default GameWindow;
