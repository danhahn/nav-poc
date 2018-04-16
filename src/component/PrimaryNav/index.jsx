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
    this.handleSecondaryMouseEnter = this.handleSecondaryMouseEnter.bind(this);
  }

  handlePrimaryMouseEnter(id, items) {
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

  handleSecondaryMouseEnter(id, items, template) {
    const { updateLevelTwoData } = this.props;
    this.setState({ levelTwoIsOpening: true, secondaryActive: id });
    updateLevelTwoData(items, template);
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
          primaryActive={primaryActive}
        />
        <LevelOneItems
          levelOneIsOpening={levelOneIsOpening}
          levelOneIsOpen={levelOneIsOpen}
          handleSecondaryMouseEnter={this.handleSecondaryMouseEnter}
          levelOneItems={levelOneItems}
          secondaryActive={secondaryActive}
        />
        <LevelTwoItems
          levelTwoIsOpening={levelTwoIsOpening}
          levelTwoIsOpen={levelTwoIsOpen}
          levelTwoItems={levelTwoItems}
          levelTwoTemplate={levelTwoTemplate}
        />
      </React.Fragment>
    );
  }
}
