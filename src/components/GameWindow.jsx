import React from "react";
import ImageContainer from "./ImageContainer.jsx";
import ProgressBar from "./ProgressBar.jsx";
import "./GameWindow.css";

const GameWindow = () => {
  const currentQuestion = 5;
  const totalQuestions = 7;
  return (
    <>
      <div className="fill">
        <ImageContainer />

        <div>
          <ProgressBar
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
          />
        </div>
      </div>
    </>
  );
};
export default GameWindow;
