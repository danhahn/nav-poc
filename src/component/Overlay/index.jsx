import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class OverLay extends Component {
  constructor(props) {
    super();
    this.overlayElement = null;
  }
  componentDidMount() {
    const id = "Overlay";
    let overlayElement = window.document.getElementById(id);
    if (!overlayElement) {
      overlayElement = window.document.createElement("div");
      overlayElement.id = id;
      window.document.body.appendChild(overlayElement);
    }
    this.overlayElement = overlayElement;
  }
  render() {
    return null;
  }
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.overlayElement);
    window.document.body.removeChild(this.overlayElement);
  }
  componentDidUpdate() {
    ReactDOM.render(
      <div
        style={{
          position: "fixed",
          top: this.props.top || 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 100
        }}
      />,
      this.overlayElement
    );
  }
}
