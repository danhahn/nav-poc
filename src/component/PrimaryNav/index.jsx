import React, { Component } from "react";
import L1 from "../L1";
import L2 from "../L2";
import L3 from "../L3";
import Overlay from "../Overlay";
import "./styles.css";

export default class PrimaryNav extends Component {
  constructor() {
    super();
    this.state = {
      l1: [],
      l2: [],
      l3: [],
      l1Id: null,
      l2Id: null,
      l3Template: null,
      l3Meida: [],
      l2IsActive: false,
      l3IsActive: false
    };
    this.handleL1MouseEnter = this.handleL1MouseEnter.bind(this);
    this.handleL2MouseEnter = this.handleL2MouseEnter.bind(this);
    this.handleL3MouseEnter = this.handleL3MouseEnter.bind(this);
    this.clearNavState = this.clearNavState.bind(this);
    this.clearStateTimeout = null;
  }

  componentDidMount() {
    this.l3Wrapper.addEventListener("transitionend", event => {
      const { l3IsActive } = this.state;
      if (event.propertyName.includes("transform")) {
        if (!l3IsActive) {
          this.setState({ l3: [] });
        }
      }
    });
  }

  componentDidUpdate(prevProps, prevStates) {
    if (this.state.l1Id !== prevStates.l1Id) {
      // console.log("setting l3IsActive to false");
      this.setState({ l3IsActive: false });
    }
    console.log(this.state.l2Id, prevStates.l2Id);
    if (
      this.state.l1Id === prevStates.l1Id &&
      prevStates.l2Id &&
      !this.state.l2Id
    ) {
      if (this.state.l3IsActive) {
        this.setState({ l3IsActive: false });
      }
    }
  }

  handleL1MouseEnter(l1Id, l2, el) {
    clearTimeout(this.clearStateTimeout);
    this.setState({ l2, l1Id, l2Id: null });
  }

  handleL2MouseEnter(l2Id, l3, l3Template, hasFilter) {
    clearTimeout(this.clearStateTimeout);
    this.setState({ l3, l2Id, l3Template, l3IsActive: true });
  }

  handleL3MouseEnter(l2Id, l3, l3Template, hasFilter) {
    clearTimeout(this.clearStateTimeout);
  }

  clearNavState(level) {
    this.clearStateTimeout = setTimeout(() => {
      console.log("clearNavState");
      this.setState({
        l1: [],
        l2: [],
        l3: [],
        l1Id: null,
        l2Id: null,
        l3Template: null,
        l3Meida: [],
        l2IsActive: false,
        l3IsActive: false
      });
    }, 1000);
  }

  render() {
    const { l1 } = this.props;
    const {
      l2,
      l3,
      l1Id,
      l2Id,
      l3Template,
      l2IsActive,
      l3IsActive
    } = this.state;
    return (
      <React.Fragment>
        <div style={{ textAlign: "center" }}>
          id1 ={l1Id} id2= {l2Id} l3IsActive = {l3IsActive ? "✅" : "🚫"}
        </div>
        <L1
          navItems={l1}
          activeId={l1Id}
          mouseEnter={this.handleL1MouseEnter}
          mouseExit={() => this.clearNavState("l1")}
        />
        {l2.length ? (
          <L2
            navItems={l2}
            activeId={l2Id}
            mouseEnter={this.handleL2MouseEnter}
            mouseExit={() => this.clearNavState("l2")}
            isActive={l2IsActive}
          />
        ) : null}
        <div className="L3Wrapper" ref={el => (this.l3Wrapper = el)}>
          {l3.length ? (
            <L3
              navItems={l3}
              mouseEnter={this.handleL3MouseEnter}
              mouseExit={() => this.clearNavState("l3")}
              template={l3Template}
              isActive={l3IsActive}
            />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

PrimaryNav.defaultProps = {
  enterDelay: 500,
  exitDelay: 500
};
