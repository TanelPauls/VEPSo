import React from "react";
import data from "../assets/data.json";

const Answers = ({ currentQuestion }) => {
  const question = data.questions[currentQuestion];

  return (
    <div className="p-4">
      <ul className="list-unstyled ps-3">
        {question.answers.map((answer, index) => (
          <li key={index} className="text-dark mb-2">
            {answer.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Answers;
