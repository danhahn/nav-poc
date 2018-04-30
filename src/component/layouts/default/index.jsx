import React, { Component } from "react";
import chunk from "lodash/chunk";
import classNames from "classnames";
import LinkWithImage from "../../LinkWithImage";
import "./styles.css";

const NavItem = ({ title, url }) => (
  <li className="NavDefaultLayout__item">
    <a href={url} className="NavDefaultLayout__link">
      {title}
    </a>
  </li>
);

class NavDefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.updateL3 = this.updateL3.bind(this);
  }
  componentDidMount() {
    this.updateL3();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.levelTwoItems !== this.props.levelTwoItems) {
      this.updateL3();
    }
  }

  updateL3() {
    const { updateL3Offset } = this.props;
    // const { x } = this.l3Offset.getBoundingClientRect();
    updateL3Offset(0);
  }

  render() {
    const { levelTwoItems, media } = this.props;
    const nav = levelTwoItems.map(item => (
      <NavItem title={item.title} key={item.id} url={item.url} />
    ));

    let chunkSize = 7;
    switch (nav.length) {
      case 5:
      case 6:
      case 7:
        chunkSize = 7;
        break;
      case 8:
        chunkSize = 5;
        break;
      case 9:
        chunkSize = 6;
        break;
      default:
        break;
    }

    const splitNav = chunk(nav, chunkSize);

    return (
      <ul className="contentNav__list">
        {splitNav.length === 1 ? (
          <React.Fragment>
            {media.length ? <li className="contentNav__item isEmpty" /> : null}
            <li className="contentNav__item">
              <ul className="NavDefaultLayout" ref={el => (this.l3Offset = el)}>
                {splitNav[0]}
              </ul>
            </li>
          </React.Fragment>
        ) : (
          splitNav.map((part, i) => {
            const itemClasses = classNames("contentNav__item", {
              isFirstColumn: i === 0
            });
            let ulRef = null;
            if (i === 0) {
              ulRef = el => (this.l3Offset = el);
            }
            return (
              <li className={itemClasses} key={i}>
                <ul className="NavDefaultLayout" ref={ulRef}>
                  {part}
                </ul>
              </li>
            );
          })
        )}
        {media
          ? media.map(({ src, href, title }) => (
              <li className="contentNav__item" key={title}>
                <LinkWithImage src={src} href={href} title={title} />
              </li>
            ))
          : null}
      </ul>
    );
  }
}

export default NavDefaultLayout;
