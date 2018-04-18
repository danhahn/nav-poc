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
  componentDidUpdate(prevProps) {
    if (!!this.props.secondaryActive === false && this.state.isActive) {
      this.setState({ isActive: false });
    }
  }
  render() {
    const {
      levelTwoIsOpening,
      levelTwoIsOpen,
      levelTwoItems,
      levelTwoTemplate,
      handleThirdMouseEnter,
      handleThirdMouseExit,
      enterDelay,
      media
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
        style={{ transitionDelay: `${enterDelay / 2}ms` }}
      >
        <ChooseLayout
          levelTwoItems={levelTwoItems}
          template={levelTwoTemplate}
          media={media}
        />
      </nav>
    );
  }
}

export default LevelTwoItems;
