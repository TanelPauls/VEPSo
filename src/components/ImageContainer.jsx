import React from "react";
import questionsData from "../assets/data.json";
import "./ImageContainer.css";

const ImageContainer = ({ currentQuestion, answers, onAnswerSelect }) => {
  const question = questionsData.questions[currentQuestion - 1];
  const selectedAnswer = answers[currentQuestion - 1];
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
          <label
            className={`question1 answer-container ${
              selectedAnswer === 1 ? "checked" : "unchecked"
            }`}
          >
            <span>{question.answers[0].text}</span>
            <input
              type="radio"
              name={`question-${currentQuestion}`}
              checked={selectedAnswer === 1}
              onChange={() => onAnswerSelect(currentQuestion, 1)}
            />
          </label>
          <label
            className={`question2 answer-container ${
              selectedAnswer === 2 ? "checked" : "unchecked"
            }`}
          >
            <span>{question.answers[1].text}</span>
            <input
              type="radio"
              name={`question-${currentQuestion}`}
              checked={selectedAnswer === 2}
              onChange={() => onAnswerSelect(currentQuestion, 2)}
            />
          </label>
          <label
            className={`question3 answer-container ${
              selectedAnswer === 3 ? "checked" : "unchecked"
            }`}
          >
            <span>{question.answers[2].text}</span>
            <input
              type="radio"
              name={`question-${currentQuestion}`}
              checked={selectedAnswer === 3}
              onChange={() => onAnswerSelect(currentQuestion, 3)}
            />
          </label>
          <label
            className={`question4 answer-container ${
              selectedAnswer === 4 ? "checked" : "unchecked"
            }`}
          >
            <span>{question.answers[3].text}</span>
            <input
              type="radio"
              name={`question-${currentQuestion}`}
              checked={selectedAnswer === 4}
              onChange={() => onAnswerSelect(currentQuestion, 4)}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
