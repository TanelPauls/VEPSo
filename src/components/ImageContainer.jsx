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
        <div className="question1">asd</div>
        <div className="question2">asd</div>
        <div className="question3">asd</div>
        <div className="question4">asd</div>
      </div>
      {/* <EventDescription /> */}
    </>
  );
};

export default ImageContainer;
