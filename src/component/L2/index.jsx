import React, { Component } from "react";
import classNames from "classnames";
import "./styles.css";

export default class LevelOneItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.timeout = null;
  }
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ isActive: true });
    }, 100);
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  render() {
    const {
      isOpening,
      isOpen,
      levelOneIsCloseing,
      levelOneIsClosed,
      levelOneItems,
      mouseEnter,
      mouseExit,
      isActive,
      enterDelay
    } = this.props;
    const levelOneStyles = classNames("SecondaryNav", {
      isOpening,
      isOpen,
      levelOneIsCloseing,
      levelOneIsClosed
    });
    const listStyles = classNames("SecondaryNav__list", {
      "SecondaryNav__list--active": this.state.isActive,
      isOpen
    });
    return (
      <nav
        className={levelOneStyles}
        style={{ transitionDelay: `${enterDelay / 2}ms` }}
      >
        <ul className={listStyles}>
          {levelOneItems
            ? levelOneItems.map(secondary => {
                const linkStyles = classNames("SecondaryNav__link", {
                  active: secondary.id === isActive
                });
                return (
                  <li
                    className="SecondaryNav__item"
                    key={secondary.id}
                    onMouseEnter={() =>
                      mouseEnter(
                        secondary.id,
                        secondary.l3,
                        secondary.template,
                        secondary.hasFilter
                      )
                    }
                    onMouseLeave={mouseExit}
                  >
                    <a href="" className={linkStyles}>
                      {secondary.title}
                    </a>
                  </li>
                );
              })
            : null}
        </ul>
      </nav>
    );
  }
}
