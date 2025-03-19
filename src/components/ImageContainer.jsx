import React from "react";
import questionsData from "../assets/data.json";
import "./ImageContainer.css";

const ImageContainer = ({ currentQuestion }) => {
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
          <div className="question1">
            <span>{question.answers[0].text}</span>
            <input type="checkbox" className="answer-checkbox" />
          </div>
          <div className="question2">
            <span>{question.answers[1].text}</span>
            <input type="checkbox" className="answer-checkbox" />
          </div>
          <div className="question3">
            <span>{question.answers[2].text}</span>
            <input type="checkbox" className="answer-checkbox" />
          </div>
          <div className="question4">
            <span>{question.answers[3].text}</span>
            <input type="checkbox" className="answer-checkbox" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
