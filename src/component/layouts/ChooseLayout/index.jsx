import React from "react";
import Default from "../default";
import Trends from "../Trends";

const ChooseLayout = ({ template, levelTwoItems, media, updateL3Offset }) => {
  let Component = null;
  switch (template) {
    case "trends":
      Component = <Trends levelTwoItems={levelTwoItems} />;
      break;
    default:
      Component = (
        <Default
          levelTwoItems={levelTwoItems}
          media={media}
          updateL3Offset={updateL3Offset}
        />
      );
  }
  return Component;
};

export default ChooseLayout;
