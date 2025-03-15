import React from "react";
import "./NumberIcon.css"; // New CSS file for icons

const NumberIcon = ({ number, status, onClick }) => {
  return (
    <div className={`number-icon ${status}`} onClick={onClick}>
      {number}
    </div>
  );
};

export default NumberIcon;
