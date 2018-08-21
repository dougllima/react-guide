import React, { Component } from "react";
import PropTypes from "prop-types";

class Text extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {
    text: "Pequeno Texto"
  };

  render() {
    const { text } = this.props;

    return <p>{text}</p>;
  }
}

export default Text;
