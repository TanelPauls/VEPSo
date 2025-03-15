import React from "react";
import data from "../assets/data.json";

const Description = ({ currentQuestion }) => {
  const question = data.questions[currentQuestion];

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-gray-800 text-white text-center">
      <p>{question.question}</p>
    </div>
  );
};

export default Description;
