import React from "react";
import Default from "../default";
import Trends from "../Trends";

const ChooseLayout = ({ template, levelTwoItems, media }) => {
  let Component = null;
  switch (template) {
    case "trends":
      Component = <Trends levelTwoItems={levelTwoItems} />;
      break;
    default:
      Component = <Default levelTwoItems={levelTwoItems} media={media} />;
  }
  return Component;
};

export default ChooseLayout;
