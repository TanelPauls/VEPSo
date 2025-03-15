import React, { useState } from "react";
import Answers from "./Answers.jsx";
import Description from "./Description.jsx";

const EventDescription = () => {
  const [currentQuestion, setCurrentQuestion] = useState(2);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex-grow p-4">
        <Answers currentQuestion={currentQuestion} />
      </div>
      <Description currentQuestion={currentQuestion} />
    </div>
  );
};

export default EventDescription;
