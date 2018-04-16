import React from "react";
import TrendsLinks from "../../TrendsLinks";
import LinkWithImage from "../../LinkWithImage";

const Trends = ({ levelTwoItems }) => {
  return (
    <ul className="contentNav__list">
      {levelTwoItems.map(content => (
        <li className="contentNav__item" key={content.id}>
          {content.title ? (
            <LinkWithImage
              href={content.url}
              src={content.img}
              title={content.title}
            />
          ) : (
            <TrendsLinks links={content} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Trends;
