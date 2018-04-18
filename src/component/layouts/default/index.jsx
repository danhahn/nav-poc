import React from "react";
import chunk from "lodash/chunk";
import LinkWithImage from "../../LinkWithImage";
import "./styles.css";

const NavItem = ({ title, url }) => (
  <li className="NavDefaultLayout__item">
    <a href={url} className="NavDefaultLayout__link">
      {title}
    </a>
  </li>
);

const NavDefaultLayout = ({ levelTwoItems, media }) => {
  const nav = levelTwoItems.map(item => (
    <NavItem title={item.title} key={item.id} url={item.url} />
  ));

  const splitNav = chunk(nav, 5);

  return (
    <ul className="contentNav__list">
      {splitNav.length === 1 ? (
        <React.Fragment>
          <li className="contentNav__item isEmpty" />
          <li className="contentNav__item">
            <ul className="NavDefaultLayout">{splitNav[0]}</ul>
          </li>
        </React.Fragment>
      ) : (
        splitNav.map((part, i) => (
          <li className="contentNav__item" key={i}>
            <ul className="NavDefaultLayout">{part}</ul>
          </li>
        ))
      )}
      {media.map(({ src, href, title }) => (
        <li className="contentNav__item" key={title}>
          <LinkWithImage src={src} href={href} title={title} />
        </li>
      ))}
    </ul>
  );
};

export default NavDefaultLayout;
