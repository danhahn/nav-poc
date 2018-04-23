import React, { Component } from "react";
import ChooseLayout from "../layouts/ChooseLayout";
import Filters from "../Filters";
import classNames from "classnames";
import "./styles.css";

class LevelTwoItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      hasFilterOpening: false,
      hasFilterOpen: false,
      localHasFilters: null
    };
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.showFilters = this.showFilters.bind(this);
    this.hideFilters = this.hideFilters.bind(this);
    this.timeout = null;
    this.hasFilterTimeout = null;
  }
  componentDidMount() {
    const { hasFilter } = this.props;
    this.timeout = setTimeout(() => {
      this.setState({ isActive: true });
    }, 100);
    if (hasFilter) {
      this.hasFilterTimeout = setTimeout(() => {
        this.setState({ hasFilterOpening: true, localHasFilters: true });
      }, this.props.enterDelay * 1.5);
    }
    this.filterWrapper.addEventListener(
      "transitionend",
      this.handleTransitionEnd
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
    clearTimeout(this.hasFilterTimeout);
  }
  componentDidUpdate(prevProps) {
    const { hasFilter } = this.props;

    if (!!this.props.secondaryActive === false && this.state.isActive) {
      this.setState({ isActive: false });
    }
    if (prevProps.hasFilter !== this.props.hasFilter) {
      !hasFilter ? this.hideFilters() : this.showFilters();
    }
  }
  showFilters() {
    this.setState({ hasFilterOpening: true, localHasFilters: true });
  }
  hideFilters() {
    this.setState({ hasFilterOpen: false, localHasFilters: false });
  }
  handleTransitionEnd(event) {
    const { localHasFilters } = this.state;
    if (event.propertyName.includes("max-height")) {
      if (localHasFilters) {
        this.setState({ hasFilterOpening: false, hasFilterOpen: true });
      }
    }
  }
  render() {
    const { hasFilterOpening, hasFilterOpen } = this.state;
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
    const filterClasses = classNames("hasFilterWrapper", {
      hasFilterOpening,
      hasFilterOpen
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
        <div className={filterClasses} ref={el => (this.filterWrapper = el)}>
          <Filters />
        </div>
      </nav>
    );
  }
}

export default LevelTwoItems;
