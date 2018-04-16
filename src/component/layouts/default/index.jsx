import React from "react";
import chunk from "lodash/chunk";
import "./styles.css";

const NavItem = ({ title, url }) => (
  <li className="NavDefaultLayout__item">
    <a href={url} className="NavDefaultLayout__link">
      {title}
    </a>
  </li>
);

const NavDefaultLayout = ({ levelTwoItems }) => {
  const nav = levelTwoItems.map(item => (
    <NavItem title={item.title} key={item.id} url={item.url} />
  ));

  const splitNav = chunk(nav, 5);

  return (
    <ul className="contentNav__list">
      {splitNav.map((part, i) => (
        <li className="contentNav__item" key={i}>
          <ul className="NavDefaultLayout">{part}</ul>
        </li>
      ))}
    </ul>
  );
};

export default NavDefaultLayout;
