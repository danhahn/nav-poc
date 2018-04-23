import React from "react";
import "./styles.css";

const Filters = () => {
  return (
    <div className="Filters">
      <p>Shop By Color</p>
      <ul>
        <li className="color1" style={{ backgroundColor: `red` }} />
        <li className="color2" style={{ backgroundColor: `blue` }} />
        <li className="color3" style={{ backgroundColor: `green` }} />
      </ul>
    </div>
  );
};

export default Filters;
