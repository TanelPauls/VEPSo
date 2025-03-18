import React from "react";
import EventDescription from "./EventDescription.jsx";
import questionsData from "../assets/data.json";

const ImageContainer = ({ currentQuestion }) => {
  const question = questionsData.questions[currentQuestion - 1];
  return (
    <div
      className="w-100 h-100 justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${question.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <EventDescription />
    </div>
  );
};

export default ImageContainer;
