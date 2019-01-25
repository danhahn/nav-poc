import React from "react";
import "./styles.css";

const TrendsLinks = ({ links }) => {
  return (
    <ul className="TrendsLinks">
      {links.map(link => (
        <li key={link.id} className="TrendsLinks__item">
          <a href={link.url} className="TrendsLinks__link">
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TrendsLinks;
