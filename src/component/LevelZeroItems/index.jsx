import React from "react";
import classNames from "classnames";
import "./styles.css";

const LevelZeroItems = ({
  items,
  handlePrimaryMouseEnter,
  handlePrimaryMouseExit,
  primaryActive
}) => {
  return (
    <nav className="PrimaryNav">
      <ul className="PrimaryNav__list">
        {items.map(primary => {
          const primaryNavStyle = classNames("PrimaryNav__link", {
            active: primary.id === primaryActive
          });

          return (
            <li
              className="PrimaryNav__item"
              key={primary.id}
              onMouseEnter={() =>
                handlePrimaryMouseEnter(primary.id, primary.l2)
              }
              onMouseLeave={handlePrimaryMouseExit}
            >
              <a href="" className={primaryNavStyle}>
                {primary.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default LevelZeroItems;
