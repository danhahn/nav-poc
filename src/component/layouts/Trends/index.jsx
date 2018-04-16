import React from "react";
import TrendsLinks from "../../TrendsLinks";
import LinkWithImage from "../../LinkWithImage";

const Trends = ({ levelTwoItems }) => {
  return (
    <ul className="contentNav__list">
      <li className="contentNav__item">
        <TrendsLinks links={levelTwoItems} />
      </li>
    </ul>
  );
};

export default Trends;
