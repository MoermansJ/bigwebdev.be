import React, { useRef } from "react";
import "./ToggleButton.css";

function ToggleButton() {
  const ref = useRef();

  const handleToggle = () => {
    ref.current.classList.toggle("toggled");
  };

  return (
    <div className="togglebutton" onClick={handleToggle}>
      <div className="togglebutton__circle" ref={ref}></div>
    </div>
  );
}

export default ToggleButton;
