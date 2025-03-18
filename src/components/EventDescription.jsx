import React, { useState } from "react";
import Answers from "./Answers.jsx";
import Description from "./Description.jsx";

const EventDescription = () => {
  const [currentQuestion, setCurrentQuestion] = useState(2);

  return (
    <>
      <Description currentQuestion={currentQuestion} />
      <div className="min-vh-100">
        {/* Top Section (66%) */}
        <div className="flex-grow-1 p-4">{/* Other content goes here */}</div>

        {/* Bottom Section (33%) */}
        <div
          className=""
          style={{
            height: "28vh",
            overflowY: "auto",
            padding: 0,
            border: "2px solid red",
          }}
        >
          <Answers currentQuestion={currentQuestion} />
        </div>
      </div>
    </>
  );
};

export default EventDescription;
