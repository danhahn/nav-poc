import React, { Component } from "react";
import ChooseLayout from "../layouts/ChooseLayout";
import Filters from "../Filters";
import classNames from "classnames";
import "./styles.css";

class L3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localActive: false,
      hasFilterOpening: false,
      hasFilterOpen: false,
      hasFilterClosing: false,
      localHasFilters: null,
      l3Offset: 0
    };
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.showFilters = this.showFilters.bind(this);
    this.hideFilters = this.hideFilters.bind(this);
    this.updateL3Offset = this.updateL3Offset.bind(this);
    this.timeout = null;
    this.hasFilterTimeout = null;
  }
  componentDidMount() {
    const { hasFilter } = this.props;
    this.timeout = setTimeout(() => {
      this.setState({ localActive: true });
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
  componentDidUpdate(prevProps, prevState) {
    const { hasFilter } = this.props;

    // if (!!this.props.secondaryActive === false && this.state.localActive) {
    //   this.setState({ localActive: false });
    // }
    if (prevProps.hasFilter !== this.props.hasFilter) {
      !hasFilter ? this.hideFilters() : this.showFilters();
      if (!hasFilter) {
        this.setState({ l3Offset: prevState.l3Offset });
      }
    }
  }
  showFilters() {
    this.setState({ hasFilterOpening: true, localHasFilters: true });
  }
  hideFilters() {
    this.setState({ localHasFilters: false, hasFilterClosing: true });
  }
  handleTransitionEnd(event) {
    const { localHasFilters } = this.state;
    if (event.propertyName.includes("max-height")) {
      if (localHasFilters) {
        this.setState({ hasFilterOpening: false, hasFilterOpen: true });
      }
    }
    if (event.propertyName.includes("opacity")) {
      if (!localHasFilters) {
        this.setState({ hasFilterOpen: false, hasFilterClosing: false });
      }
    }
  }
  updateL3Offset(l3Offset) {
    this.setState({ l3Offset });
  }
  render() {
    const {
      hasFilterOpening,
      hasFilterOpen,
      l3Offset,
      hasFilterClosing
    } = this.state;
    const {
      isOpening,
      isOpen,
      navItems,
      template,
      mouseEnter,
      mouseExit,
      enterDelay,
      media,
      isActive
    } = this.props;
    const { localActive } = this.state;
    const levelTwoStyles = classNames("contentNav", {
      isOpening,
      isOpen,
      localActive,
      isActive: isActive && localActive
    });
    const filterClasses = classNames("hasFilterWrapper", {
      hasFilterOpening,
      hasFilterOpen,
      hasFilterClosing
    });
    return (
      <nav
        className={levelTwoStyles}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseExit}
        style={{ transitionDelay: `${enterDelay}ms` }}
      >
        <ChooseLayout
          levelTwoItems={navItems}
          template={template}
          media={media}
          updateL3Offset={this.updateL3Offset}
        />
        <div
          className={filterClasses}
          ref={el => (this.filterWrapper = el)}
          style={{ marginLeft: l3Offset }}
        >
          <Filters l3Offset={l3Offset} />
        </div>
      </nav>
    );
  }
}

L3.defaultProps = {
  navItems: [],
  mouseEnter: () => null,
  media: [],
  updateL3Offset: 0,
  template: null
};

export default L3;
