import React from "react";
import EventDescription from "./EventDescription.jsx";
import { useState } from "react";
import "./ImageContainer.css";

const ImageContainer = () => {
  const [imageNr, setImageNr] = useState(1);

  return (
    <>
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        {imageNr === 1 && (
          <div className="esimenepilt w-100 h-100">
            <EventDescription>asd</EventDescription>
          </div>
        )}
        {imageNr === 2 && (
          <img
            src="https://www.tripwire.com/sites/default/files/thumb_shutterstock_271700015_1024.jpg"
            alt="Image 2"
            className="w-100 h-100"
          />
        )}
        {/* <button onClick={() => setImageNr(2)}>Go to 2</button> */}
      </div>
    </>
  );
};

export default ImageContainer;
