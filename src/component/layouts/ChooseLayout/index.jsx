import React from "react";
import Tends from "../Trends";
import LayoutTwo from "../LayoutTwo";
import Trends from "../Trends";

const ChooseLayout = ({ template, levelTwoItems }) => {
  let Component = null;
  switch (template) {
    case "trends":
      Component = <Trends levelTwoItems={levelTwoItems} />;
      break;
    case "two":
      Component = <LayoutTwo />;
      break;
    default:
      Component = null;
  }
  return Component;
};

export default ChooseLayout;
