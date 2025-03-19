import React, { useMemo } from "react";
import questionsData from "../assets/data.json";
import "./ImageContainer.css";

const ImageContainer = ({ currentQuestion, answers, onAnswerSelect }) => {
  const isConfirmationQuestion =
    currentQuestion > questionsData.questions.length; // Check if it's the new 8th question
  const selectedAnswer = answers[currentQuestion - 1];
  const maxScore = useMemo(() => {
    return questionsData.questions.reduce((total, question) => {
      const maxPoints = Math.max(
        ...question.answers.map((answer) => answer.points)
      );
      return total + maxPoints;
    }, 0);
  }, []);

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
          <div className="containerForQuestions">Kas kontrollime vastused?</div>

          <div className="containerForButton">
            <button
              className={`confirm-button ${
                selectedAnswer === 1 ? "checked" : ""
              }`}
              onClick={() => onAnswerSelect(currentQuestion, 1)}
            >
              Jah!
            </button>
          </div>
        </div>
        <div className="containerForScore">
          <span>
            {score} / {maxScore}
          </span>
        </div>
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
              }`}
            >
              <span>{answer.text}</span>
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                checked={selectedAnswer === index + 1}
                onChange={() => onAnswerSelect(currentQuestion, index + 1)}
              />
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
