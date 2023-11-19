import React from "react";
import "../styles/PopUp.css";
const PopUp = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="alert">
      <span>Wrong Email or Password</span>
      <p className="close-btn" onClick={onClose}>
        X
      </p>
    </div>
  );
};

export default PopUp;
