import React from "react";
import "./NumberIcon.css"; // New CSS file for icons

const NumberIcon = ({ number, status }) => {
  return <div className={`number-icon ${status}`}>{number}</div>;
};

export default NumberIcon;
