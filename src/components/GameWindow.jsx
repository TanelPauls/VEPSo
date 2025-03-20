import React, { useState, useEffect, useMemo } from "react";
import ImageContainer from "./ImageContainer.jsx";
import ProgressBar from "./ProgressBar.jsx";
import "./Gamewindow.css";
import { toast } from "react-hot-toast";

const Gamewindow = () => {
  //hooks to manage game logic
  const [isLocked, setIsLocked] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(7);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState(Array(totalQuestions).fill(null));
  const [hasExpanded, setHasExpanded] = useState(false);
  //caching the result of a calculation between re-renders to prevent unnecessary recalculations
  const allAnswered = useMemo(
    () => answers.every((answer) => answer !== null),
    [answers]
  );

  useEffect(() => {
    if (allAnswered && !hasExpanded) {
      setTotalQuestions(8);
      setHasExpanded(true); // Prevents repeated updates
      toast.success(
        "Kõik küsimused vastatud! Nüüd saab vastuseid kontrollida! 🎉"
      );
    }
  }, [allAnswered, hasExpanded]);
  //reset game to initial state to start again

  const resetGame = () => {
    setTotalQuestions(7);
    setAnswers(Array(7).fill(null));
    setIsLocked(false);
    setCurrentQuestion(1);
    setHasExpanded(false);
  };

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
      {/* render ImageContainer which handles images and answer choices */}
      <div className="containerForGameScreen">
        <ImageContainer
          currentQuestion={currentQuestion}
          answers={answers}
          onAnswerSelect={handleAnswerSelection}
          isLocked={isLocked}
          setIsLocked={setIsLocked}
          resetGame={resetGame}
        />
      </div>
      {/* render the ProgressBar to visually track user's progress */}
      <div className="containerForProgressbar">
        <ProgressBar
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
          onQuestionClick={handleQuestionClick}
          answers={answers}
          hasExpanded={hasExpanded}
        />
      </div>
    </>
  );
};
export default Gamewindow;
