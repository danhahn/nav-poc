import React from "react";
import classNames from "classnames";
import "./styles.css";
import Trends from "../layouts/Trends";
import ChooseLayout from "../layouts/ChooseLayout";

const LevelTwoItems = ({
  levelTwoIsOpening,
  levelTwoIsOpen,
  levelTwoItems,
  levelTwoTemplate
}) => {
  const levelTwoStyles = classNames("contentNav", {
    levelTwoIsOpening,
    levelTwoIsOpen
  });
  return (
    <nav className={levelTwoStyles}>
      <ChooseLayout levelTwoItems={levelTwoItems} template={levelTwoTemplate} />
    </nav>
  );
};

export default LevelTwoItems;
