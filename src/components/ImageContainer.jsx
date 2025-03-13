import React from "react";
import EventDescription from "./EventDescription.jsx";
import { useState } from "react";
import "./ImageContainer.css";

const ImageContainer = () => {
  const [imageNr, setImageNr] = useState(1);

  return (
    <>
      {imageNr === 1 && (
        <div className="esimenepilt">
          <EventDescription>asd</EventDescription>
        </div>
      )}
      {imageNr === 2 && (
        <img
          src="https://www.tripwire.com/sites/default/files/thumb_shutterstock_271700015_1024.jpg"
          alt="Image 2"
        />
      )}

      {/* <button onClick={() => setImageNr(2)}>Go to 2</button> */}
    </>
  );
};

export default ImageContainer;
