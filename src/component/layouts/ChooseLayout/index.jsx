import React from "react";
import Tends from "../Trends";
import Default from "../default";
import Trends from "../Trends";

const ChooseLayout = ({ template, levelTwoItems }) => {
  let Component = null;
  switch (template) {
    case "trends":
      Component = <Trends levelTwoItems={levelTwoItems} />;
      break;
    default:
      Component = <Default levelTwoItems={levelTwoItems} />;
  }
  return Component;
};

export default ChooseLayout;
