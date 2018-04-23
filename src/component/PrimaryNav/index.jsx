import React, { Component } from "react";
import LevelZeroItems from "../LevelZeroItems";
import LevelOneItems from "../LevelOneItems";
import LevelTwoItems from "../LevelTwoItems";
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
      primaryActive: null,
      secondaryActive: null,
      primaryNavOffSetHeight: null
    };
    this.handlePrimaryMouseEnter = this.handlePrimaryMouseEnter.bind(this);
    this.handlePrimaryMouseExit = this.handlePrimaryMouseExit.bind(this);
    this.handleSecondaryMouseEnter = this.handleSecondaryMouseEnter.bind(this);
    this.handleSecondaryMouseExit = this.handleSecondaryMouseExit.bind(this);
    this.handleThirdMouseEnter = this.handleThirdMouseEnter.bind(this);
    this.handleThirdMouseExit = this.handleThirdMouseExit.bind(this);
    this.resetNavData = this.resetNavData.bind(this);
    this.constructTimeoutEnter = this.constructTimeoutEnter.bind(this);
    this.constructTimeoutExit = this.constructTimeoutExit.bind(this);
    this.timeout = null;
  }

  resetNavData() {
    this.setState({
      primaryActive: null,
      secondaryActive: null,
      levelOneIsOpen: false,
      levelOneIsOpening: false,
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

  handlePrimaryMouseEnter(id, items, el) {
    const { y: primaryNavOffSetHeight } = el.getBoundingClientRect();
    clearTimeout(this.timeout);
    const { updateLevelOneData, resetLevelTwoData, levelTwoItems } = this.props;
    this.setState({
      levelOneIsOpening: true,
      primaryActive: id,
      primaryNavOffSetHeight
    });
    this.constructTimeoutEnter({
      levelOneIsOpening: false,
      levelOneIsOpen: true
    });
    if (levelTwoItems) {
      this.setState({ levelTwoIsOpen: false, secondaryActive: null });
      setTimeout(resetLevelTwoData, 1000);
      // resetLevelTwoData();
    }
    updateLevelOneData(items);
  }

  handlePrimaryMouseExit() {
    this.constructTimeoutExit();
  }

  handleSecondaryMouseEnter(id, items, template, hasFilter) {
    clearTimeout(this.timeout);
    const {
      updateLevelTwoData,
      updateLevelTwoMedia,
      updateLevel2HasFilter,
      levelOneItems
    } = this.props;
    this.setState({
      levelTwoIsOpening: true,
      secondaryActive: id
    });
    this.constructTimeoutEnter({
      levelTwoIsOpening: false,
      levelTwoIsOpen: true
    });
    updateLevelTwoData(items, template);
    updateLevelTwoMedia(id, levelOneItems);
    updateLevel2HasFilter(hasFilter);
  }

  handleSecondaryMouseExit() {
    this.constructTimeoutExit();
  }

  handleThirdMouseEnter() {
    clearTimeout(this.timeout);
  }

  handleThirdMouseExit() {
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
      levelOneIsOpening,
      levelOneIsOpen,
      levelTwoIsOpening,
      levelTwoIsOpen,
      primaryActive,
      secondaryActive,
      primaryNavOffSetHeight
    } = this.state;
    const timing = {
      enterDelay,
      exitDelay
    };
    return (
      <React.Fragment>
        <LevelZeroItems
          {...timing}
          items={items}
          handlePrimaryMouseEnter={this.handlePrimaryMouseEnter}
          handlePrimaryMouseExit={this.handlePrimaryMouseExit}
          primaryActive={primaryActive}
        />
        <LevelOneItems
          {...timing}
          levelOneIsOpening={levelOneIsOpening}
          levelOneIsOpen={levelOneIsOpen}
          handleSecondaryMouseEnter={this.handleSecondaryMouseEnter}
          handleSecondaryMouseExit={this.handleSecondaryMouseExit}
          levelOneItems={levelOneItems}
          secondaryActive={secondaryActive}
        />
        {levelTwoItems.length ? (
          <LevelTwoItems
            {...timing}
            levelTwoIsOpening={levelTwoIsOpening}
            levelTwoIsOpen={levelTwoIsOpen}
            levelTwoItems={levelTwoItems}
            secondaryActive={secondaryActive}
            levelTwoTemplate={levelTwoTemplate}
            media={levelTwoMedia}
            hasFilter={levelTwoFilter}
            handleThirdMouseEnter={this.handleThirdMouseEnter}
            handleThirdMouseExit={this.handleThirdMouseExit}
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
  enterDelay: 800,
  exitDelay: 500
};
