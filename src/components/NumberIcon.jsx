import React from "react";
import "./NumberIcon.css";
import { FaStar } from "react-icons/fa";

//different visual states based on status
const NumberIcon = ({ number, status, onClick, isNew }) => {
  return (
    <div className={`number-icon ${status}`} onClick={onClick}>
      {isNew ? <FaStar /> : number}
    </div>
  );
};

export default NumberIcon;
