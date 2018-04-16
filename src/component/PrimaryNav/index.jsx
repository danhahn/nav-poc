import React, { Component } from "react";
import LevelZeroItems from "../LevelZeroItems";
import LevelOneItems from "../LevelOneItems";
import LevelTwoItems from "../LevelTwoItems";
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
      secondaryActive: null
    };
    this.handlePrimaryMouseEnter = this.handlePrimaryMouseEnter.bind(this);
    this.handlePrimaryMouseExit = this.handlePrimaryMouseExit.bind(this);
    this.handleSecondaryMouseEnter = this.handleSecondaryMouseEnter.bind(this);
    this.handleSecondaryMouseExit = this.handleSecondaryMouseExit.bind(this);
    this.handleThirdMouseEnter = this.handleThirdMouseEnter.bind(this);
    this.handleThirdMouseExit = this.handleThirdMouseExit.bind(this);
    this.timeout = null;
  }

  handlePrimaryMouseEnter(id, items) {
    clearTimeout(this.timeout);
    const { updateLevelOneData } = this.props;
    this.setState({ levelOneIsOpening: true });
    setTimeout(() => {
      this.setState({
        levelOneIsOpening: false,
        levelOneIsOpen: true,
        primaryActive: id
      });
    }, 1000);
    updateLevelOneData(items);
  }

  handlePrimaryMouseExit() {
    const { updateLevelOneReset } = this.props;
    this.timeout = setTimeout(() => {
      updateLevelOneReset;
      this.setState({ levelOneIsOpen: false, primaryActive: null });
    }, 500);
  }

  handleSecondaryMouseEnter(id, items, template) {
    clearTimeout(this.timeout);
    const { updateLevelTwoData } = this.props;
    this.setState({
      levelTwoIsOpening: true,
      secondaryActive: id
    });
    updateLevelTwoData(items, template);
  }

  handleSecondaryMouseExit() {
    const { updateLevelOneReset } = this.props;
    this.timeout = setTimeout(() => {
      updateLevelOneReset();
      this.setState({
        levelOneIsOpen: false,
        primaryActive: null,
        levelTwoIsOpening: false,
        secondaryActive: null
      });
    }, 500);
  }

  handleThirdMouseEnter() {
    clearTimeout(this.timeout);
  }

  handleThirdMouseExit() {
    const { updateLevelOneReset } = this.props;
    this.timeout = setTimeout(() => {
      updateLevelOneReset();
      this.setState({
        levelOneIsOpen: false,
        primaryActive: null,
        levelTwoIsOpening: false,
        secondaryActive: null
      });
    }, 500);
  }

  render() {
    const {
      items,
      levelOneItems,
      levelTwoItems,
      levelTwoTemplate
    } = this.props;
    const {
      levelOneIsOpening,
      levelOneIsOpen,
      levelTwoIsOpening,
      levelTwoIsOpen,
      primaryActive,
      secondaryActive
    } = this.state;
    return (
      <React.Fragment>
        <LevelZeroItems
          items={items}
          handlePrimaryMouseEnter={this.handlePrimaryMouseEnter}
          handlePrimaryMouseExit={this.handlePrimaryMouseExit}
          primaryActive={primaryActive}
        />
        <LevelOneItems
          levelOneIsOpening={levelOneIsOpening}
          levelOneIsOpen={levelOneIsOpen}
          handleSecondaryMouseEnter={this.handleSecondaryMouseEnter}
          handleSecondaryMouseExit={this.handleSecondaryMouseExit}
          levelOneItems={levelOneItems}
          secondaryActive={secondaryActive}
        />
        <LevelTwoItems
          levelTwoIsOpening={levelTwoIsOpening}
          levelTwoIsOpen={levelTwoIsOpen}
          levelTwoItems={levelTwoItems}
          levelTwoTemplate={levelTwoTemplate}
          handleThirdMouseEnter={this.handleThirdMouseEnter}
          handleThirdMouseExit={this.handleThirdMouseExit}
        />
      </React.Fragment>
    );
  }
}
