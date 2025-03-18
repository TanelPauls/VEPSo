import React, { useState } from "react";
import ImageContainer from "./ImageContainer.jsx";
import ProgressBar from "./ProgressBar.jsx";
import "./Gamewindow.css";

const Gamewindow = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 7;

  const handleQuestionClick = (questionNumber) => {
    setCurrentQuestion(questionNumber);
  };
  return (
    <>
      <div className="containerForGameScreen">asd</div>
      <div className="containerForProgressbar">
        <ProgressBar
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
          onQuestionClick={handleQuestionClick}
        />
      </div>
      {/* <div className="fill">
        <ImageContainer currentQuestion={currentQuestion} />

        <div>
          
        </div>
      </div> */}
    </>
  );
};
export default Gamewindow;
