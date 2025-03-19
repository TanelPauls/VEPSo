import React, { useState } from "react";
import ImageContainer from "./ImageContainer.jsx";
import ProgressBar from "./ProgressBar.jsx";
import "./Gamewindow.css";

const Gamewindow = () => {
  const totalQuestions = 7;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState(Array(totalQuestions).fill(null));

  const handleQuestionClick = (questionNumber) => {
    setCurrentQuestion(questionNumber);
  };
  const handleAnswerSelection = (questionNumber, answer) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionNumber - 1] = answer;
      return updatedAnswers;
    });
  };
  return (
    <>
      <div className="containerForGameScreen">
        <ImageContainer
          currentQuestion={currentQuestion}
          answers={answers}
          onAnswerSelect={handleAnswerSelection}
        />
      </div>
      <div className="containerForProgressbar">
        <ProgressBar
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
          onQuestionClick={handleQuestionClick}
          answers={answers}
        />
      </div>
    </>
  );
};
export default Gamewindow;
