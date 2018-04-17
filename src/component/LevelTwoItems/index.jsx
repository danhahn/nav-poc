import React, { Component } from "react";
import ChooseLayout from "../layouts/ChooseLayout";
import classNames from "classnames";
import "./styles.css";

class LevelTwoItems extends Component {
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
      levelTwoIsOpening,
      levelTwoIsOpen,
      levelTwoItems,
      levelTwoTemplate,
      handleThirdMouseEnter,
      handleThirdMouseExit
    } = this.props;
    const { isActive } = this.state;
    const levelTwoStyles = classNames("contentNav", {
      levelTwoIsOpening,
      levelTwoIsOpen,
      isActive
    });
    return (
      <nav
        className={levelTwoStyles}
        onMouseEnter={handleThirdMouseEnter}
        onMouseLeave={handleThirdMouseExit}
      >
        <ChooseLayout
          levelTwoItems={levelTwoItems}
          template={levelTwoTemplate}
        />
      </nav>
    );
  }
}

export default LevelTwoItems;
