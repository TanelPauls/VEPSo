import React from "react";
import EventDescription from "./EventDescription.jsx";
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

      <div className="containerForQuestions">
        <div className="question1">{question.answers[0].text}</div>
        <div className="question2">{question.answers[1].text}</div>
        <div className="question3">{question.answers[2].text}</div>
        <div className="question4">{question.answers[3].text}</div>
      </div>
      {/* <EventDescription /> */}
    </>
  );
};

export default ImageContainer;
