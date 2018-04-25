import React from "react";
import classNames from "classnames";
import "./styles.css";

const LevelZeroItems = ({ navItems, mouseEnter, mouseExit, isActive }) => {
  return (
    <nav className="l1" ref={el => (this.primaryNav = el)}>
      <ul className="l1__list">
        {navItems.map(primary => {
          const primaryNavStyle = classNames("l1__link", {
            active: primary.id === isActive
          });

          return (
            <li
              className="l1__item"
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
