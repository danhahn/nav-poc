import React, { Component } from "react";
import L1 from "../L1";
import L2 from "../L2";
import L3 from "../L3";
import Overlay from "../Overlay";
import "./styles.css";

export default class PrimaryNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelOneIsOpening: false,
      levelOneIsOpen: false,
      levelTwoIsOpening: false,
      levelTwoIsOpen: false,
      levelOneIsCloseing: false,
      levelOneIsClosed: false,
      levelOneActive: null,
      secondaryActive: null,
      primaryNavOffSetHeight: null
    };
    this.handleL1MouseEnter = this.handleL1MouseEnter.bind(this);
    this.handleL1MouseExit = this.handleL1MouseExit.bind(this);
    this.handleL2MouseEnter = this.handleL2MouseEnter.bind(this);
    this.handleL2MouseExit = this.handleL2MouseExit.bind(this);
    this.handleL3Enter = this.handleL3Enter.bind(this);
    this.handleL3MouseExit = this.handleL3MouseExit.bind(this);
    this.resetNavData = this.resetNavData.bind(this);
    this.constructTimeoutEnter = this.constructTimeoutEnter.bind(this);
    this.constructTimeoutExit = this.constructTimeoutExit.bind(this);
    this.timeout = null;
  }

  resetNavData() {
    this.setState({
      l1Active: null,
      l2Active: null,
      levelTwoIsOpen: false,
      levelTwoIsOpening: false,
      primaryNavOffSetHeight: null
    });
  }

  constructTimeoutEnter(newState) {
    setTimeout(() => {
      this.setState(newState);
    }, this.props.enterDelay);
  }

  constructTimeoutExit() {
    const { updateLevelOneReset } = this.props;
    this.timeout = setTimeout(() => {
      updateLevelOneReset();
      this.resetNavData();
    }, this.props.exitDelay);
  }

  handleL1MouseEnter(id, items, el) {
    const { y: primaryNavOffSetHeight } = el.getBoundingClientRect();
    clearTimeout(this.timeout);
    const { updateLevelOneData, resetLevelTwoData, levelTwoItems } = this.props;
    this.setState({
      l1Active: id,
      primaryNavOffSetHeight
    });
    if (levelTwoItems) {
      this.setState({ levelTwoIsOpen: false, l2Active: null });
      setTimeout(resetLevelTwoData, 1000);
    }
    updateLevelOneData(items);
  }

  handleL1MouseExit() {
    this.constructTimeoutExit();
  }

  handleL2MouseEnter(id, items, template, hasFilter) {
    clearTimeout(this.timeout);
    const {
      updateLevelTwoData,
      updateLevelTwoMedia,
      updateLevel2HasFilter,
      levelOneItems
    } = this.props;
    this.setState({
      levelTwoIsOpening: true,
      l2Active: id
    });
    this.constructTimeoutEnter({
      levelTwoIsOpening: false,
      levelTwoIsOpen: true
    });
    updateLevelTwoData(items, template);
    updateLevelTwoMedia(id, levelOneItems);
    updateLevel2HasFilter(hasFilter);
  }

  handleL2MouseExit() {
    this.constructTimeoutExit();
  }

  handleL3Enter() {
    clearTimeout(this.timeout);
  }

  handleL3MouseExit() {
    this.constructTimeoutExit();
  }

  render() {
    const {
      items,
      levelOneItems,
      levelTwoItems,
      levelTwoTemplate,
      enterDelay,
      exitDelay,
      levelTwoMedia,
      levelTwoFilter
    } = this.props;
    const {
      levelTwoIsOpening,
      levelTwoIsOpen,
      l1Active,
      l2Active,
      primaryNavOffSetHeight
    } = this.state;
    const timing = {
      enterDelay,
      exitDelay
    };
    return (
      <React.Fragment>
        <L1
          {...timing}
          navItems={items}
          mouseEnter={this.handleL1MouseEnter}
          mouseExit={this.handleL1MouseExit}
          isActive={l1Active}
        />
        {levelOneItems.length ? (
          <L2
            {...timing}
            mouseEnter={this.handleL2MouseEnter}
            mouseExit={this.handleL2MouseExit}
            navItems={levelOneItems}
            isActive={l2Active}
          />
        ) : null}
        {levelTwoItems.length ? (
          <L3
            {...timing}
            isOpening={levelTwoIsOpening}
            isOpen={levelTwoIsOpen}
            levelTwoItems={levelTwoItems}
            secondaryActive={l2Active}
            levelTwoTemplate={levelTwoTemplate}
            media={levelTwoMedia}
            hasFilter={levelTwoFilter}
            mouseEnter={this.handleL3Enter}
            mouseExit={this.handleL3MouseExit}
          />
        ) : null}
        {primaryNavOffSetHeight ? (
          <Overlay top={primaryNavOffSetHeight} />
        ) : null}
      </React.Fragment>
    );
  }
}

PrimaryNav.defaultProps = {
  enterDelay: 500,
  exitDelay: 500
};
