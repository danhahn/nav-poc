import React from "react";
import ChooseLayout from "../layouts/ChooseLayout";
import classNames from "classnames";
import "./styles.css";

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
