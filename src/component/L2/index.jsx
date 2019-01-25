import React, { Component } from "react";
import classNames from "classnames";
import "./styles.css";

class L2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localActive: false,
      isOpen: false
    };
    this.timeout = null;
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ localActive: true });
    }, 1);
    this.l2.addEventListener("transitionend", this.handleTransitionEnd);
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  handleTransitionEnd(event) {
    if (event.propertyName.includes("opacity")) {
      this.setState({ isOpen: true });
    }
  }
  render() {
    const { localActive } = this.state;
    const {
      navItems,
      mouseEnter,
      mouseExit,
      activeId,
      enterDelay
    } = this.props;
    const { isOpen } = this.state;
    const levelOneStyles = classNames("L2", {
      localActive
    });
    const listStyles = classNames("L2__list", {
      isOpen
    });
    return (
      <nav
        className={levelOneStyles}
        ref={el => (this.l2 = el)}
        style={{ transitionDelay: `${enterDelay}ms` }}
      >
        <ul className={listStyles}>
          {navItems
            ? navItems.map(secondary => {
                const linkStyles = classNames("L2__link", {
                  active: secondary.id === activeId
                });
                return (
                  <li
                    className="L2__item"
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

L2.defaultProps = {
  mouseEnter: () => null,
  navItems: []
};

export default L2;
