import React, { Component } from "react";
import classNames from "classnames";
import "./styles.css";

export default class LevelOneItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isActive: !this.state.isActive });
    }, 100);
  }
  render() {
    const {
      levelOneIsOpening,
      levelOneIsOpen,
      levelOneIsCloseing,
      levelOneIsClosed,
      levelOneItems,
      handleSecondaryMouseEnter,
      secondaryActive
    } = this.props;
    const levelOneStyles = classNames("SecondaryNav", {
      levelOneIsOpening,
      levelOneIsOpen,
      levelOneIsCloseing,
      levelOneIsClosed
    });
    const listStyles = classNames("SecondaryNav__list", {
      "SecondaryNav__list--active": this.state.isActive
    });
    return (
      <nav className={levelOneStyles}>
        <ul className={listStyles}>
          {levelOneItems
            ? levelOneItems.map(secondary => {
                const linkStyles = classNames("SecondaryNav__link", {
                  active: secondary.id === secondaryActive
                });
                return (
                  <li
                    className="SecondaryNav__item"
                    key={secondary.id}
                    onMouseEnter={() =>
                      handleSecondaryMouseEnter(
                        secondary.id,
                        secondary.l3,
                        secondary.template
                      )
                    }
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
