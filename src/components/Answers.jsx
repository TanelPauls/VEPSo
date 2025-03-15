import React from "react";
import data from "../assets/data.json";

const Answers = ({ currentQuestion }) => {
  const question = data.questions[currentQuestion];

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">{question.question}</h2>
      <ul className="list-disc pl-5 space-y-2">
        {question.answers.map((answer, index) => (
          <li key={index} className="text-gray-800">
            {answer.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Answers;
