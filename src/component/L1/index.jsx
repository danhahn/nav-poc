import React from "react";
import classNames from "classnames";
import "./styles.css";

const LevelZeroItems = ({ items, mouseEnter, mouseExit, isActive }) => {
  return (
    <nav className="PrimaryNav" ref={el => (this.primaryNav = el)}>
      <ul className="PrimaryNav__list">
        {items.map(primary => {
          const primaryNavStyle = classNames("PrimaryNav__link", {
            active: primary.id === isActive
          });

          return (
            <li
              className="PrimaryNav__item"
              key={primary.id}
              onMouseEnter={() =>
                mouseEnter(primary.id, primary.l2, this.primaryNav)
              }
              onMouseLeave={mouseExit}
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
