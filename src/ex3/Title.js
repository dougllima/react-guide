import React, { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  componentDidMount() {
    var title = this.props.title ? this.props.title : "Titulo";

    this.setState({ title: title });
  }

  render() {
    return <h1>{this.state.title}</h1>;
  }
}

export default Title;
