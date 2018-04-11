import React from "react";
import TrendsLinks from "../TrendsLinks";
import LinkWithImage from "../LinkWithImage";
import classNames from "classnames";
import "./styles.css";

const LevelTwoItems = ({
  levelTwoIsOpening,
  levelTwoIsOpen,
  levelTwoItems
}) => {
  const levelTwoStyles = classNames("contentNav", {
    levelTwoIsOpening,
    levelTwoIsOpen
  });
  return (
    <nav className={levelTwoStyles}>
      {levelTwoItems ? (
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
      ) : null}
    </nav>
  );
};

export default LevelTwoItems;
