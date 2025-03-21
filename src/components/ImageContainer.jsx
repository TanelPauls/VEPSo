import React, { useMemo } from "react";
import questionsData from "../assets/data.json";
import "./ImageContainer.css";

const ImageContainer = ({
  currentQuestion,
  answers,
  onAnswerSelect,
  isLocked,
  setIsLocked,
  resetGame,
}) => {
  //check if the current question is confirmation question to trigger confirmation step to review answers
  const isConfirmationQuestion =
    currentQuestion > questionsData.questions.length; // Check if it's the new 8th question
  const selectedAnswer = answers[currentQuestion - 1];
  //calculate the maximum possible score only once, not on every render unnecessarily
  const maxScore = useMemo(() => {
    return questionsData.questions.reduce((total, question) => {
      const maxPoints = Math.max(
        ...question.answers.map((answer) => answer.points)
      );
      return total + maxPoints;
    }, 0);
  }, []); //empty dependency array to ensure that it's calculated only once

  const score = useMemo(() => {
    return answers.reduce((total, userAnswerIndex, questionIndex) => {
      if (userAnswerIndex !== null) {
        // Ensure an answer was selected
        const question = questionsData.questions[questionIndex];
        const selectedAnswerPoints =
          question.answers[userAnswerIndex - 1].points; // Convert 1-based index
        return total + selectedAnswerPoints;
      }
      return total;
    }, 0);
  }, [answers]);

  if (isConfirmationQuestion) {
    return (
      <>
        <div className="containerForQuestionsAndAnswers">
          <div className="containerForQuestions">
            Kas soovid vastused lukustada?
          </div>

          <div className="containerForButton">
            <button
              className="confirm-button"
              onClick={() => {
                setIsLocked(true);
              }}
              disabled={isLocked}
            >
              Jah!
            </button>
          </div>
        </div>
        {isLocked && (
          <div className="containerForScore">
            <span>
              {score} / {maxScore}
            </span>
            <button className="restart-button" onClick={resetGame}>
              Alusta uuesti.
            </button>
          </div>
        )}
      </>
    );
  }

  // Normal question handling
  const question = questionsData.questions[currentQuestion - 1];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${question.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          resize: "both",
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div className="containerForQuestionsAndAnswers">
        <div className="containerForQuestions">{question.question}</div>
        <div className="containerForAnswers">
          {question.answers.map((answer, index) => (
            <label
              key={index}
              className={`question${index + 1} answer-container ${
                selectedAnswer === index + 1 ? "checked" : "unchecked"
              } ${isLocked ? "locked" : ""}`} // ✅ Add "locked" class when answers are locked
            >
              <span>{answer.text}</span>
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                checked={selectedAnswer === index + 1}
                onChange={() => onAnswerSelect(currentQuestion, index + 1)}
                disabled={isLocked}
                style={{ accentColor: "darkgreen" }}
              />
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
