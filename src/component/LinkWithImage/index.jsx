import React, { Component } from "react";
import classNames from "classnames";
import "./styles.css";

export default class LinkWithImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHasBeenAdded: false
    };
    this.timeout = null;
  }
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ isHasBeenAdded: !this.state.isHasBeenAdded });
    }, 1);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { src, href, title } = this.props;
    const labelStyles = classNames("LinkWithImage__label", {
      "LinkWithImage__label--show": this.state.isHasBeenAdded
    });

    return (
      <div className="LinkWithImage">
        <img src={src} alt="" className="LinkWithImage__image" />
        <p className={labelStyles}>
          <a href={href} className="LinkWithImage__link">
            {title}
          </a>
        </p>
      </div>
    );
  }
}

LinkWithImage.defaultProps = {
  src: "http://via.placeholder.com/330x266",
  href: "http://www.michaelkors.com",
  title: "place holder text"
};
