import React from "react";
import questionsData from "../assets/data.json";
import "./ImageContainer.css";

const ImageContainer = ({ currentQuestion, answers, onAnswerSelect }) => {
  const isConfirmationQuestion =
    currentQuestion > questionsData.questions.length; // Check if it's the new 8th question
  const selectedAnswer = answers[currentQuestion - 1];

  if (isConfirmationQuestion) {
    return (
      <div className="containerForQuestionsAndAnswers">
        <div className="containerForQuestions">Kas kontrollime vastused?</div>
        <div className="containerForAnswers">
          <label
            className={`question-confirm answer-container ${
              selectedAnswer === 1 ? "checked" : "unchecked"
            }`}
          >
            <span>Yes</span>
            <input
              type="radio"
              name={`question-${currentQuestion}`}
              checked={selectedAnswer === 1}
              onChange={() => onAnswerSelect(currentQuestion, 1)}
            />
          </label>
        </div>
      </div>
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
