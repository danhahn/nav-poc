import React from "react";
import ChooseLayout from "../layouts/ChooseLayout";
import classNames from "classnames";
import "./styles.css";

const LevelTwoItems = ({
  levelTwoIsOpening,
  levelTwoIsOpen,
  levelTwoItems,
  levelTwoTemplate,
  handleThirdMouseEnter,
  handleThirdMouseExit
}) => {
  const levelTwoStyles = classNames("contentNav", {
    levelTwoIsOpening,
    levelTwoIsOpen
  });
  return levelTwoIsOpening ? (
    <nav
      className={levelTwoStyles}
      onMouseEnter={handleThirdMouseEnter}
      onMouseLeave={handleThirdMouseExit}
    >
      <ChooseLayout levelTwoItems={levelTwoItems} template={levelTwoTemplate} />
    </nav>
  ) : null;
};

export default LevelTwoItems;
