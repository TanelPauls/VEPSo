import React from "react";
import "./NumberIcon.css"; // New CSS file for icons

const NumberIcon = ({ number, status, onClick, isNew }) => {
  return (
    <div className={`number-icon ${status}`} onClick={onClick}>
      {isNew ? "K" : number}
    </div>
  );
};

export default NumberIcon;
