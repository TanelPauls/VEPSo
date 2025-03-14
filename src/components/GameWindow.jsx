import React from "react";
import ImageContainer from "./ImageContainer.jsx";
import ProgressBar from "./ProgressBar.jsx";
import "./GameWindow.css";

const GameWindow = () => {
  return (
    <>
      <div className="fill">
        <ImageContainer />

        <div>
          <ProgressBar />
        </div>
      </div>
    </>
  );
};
export default GameWindow;
