import React, { Component } from "react";

export default class childcomponent extends Component {
  componentDidMount() {
    console.log("Running componentDidMount");
    this.props.startTimer();
  }

  render() {
    return (
      <div
        style={{
          width: 400,
          height: 20,
          borderStyle: "dotted",
          verticalAlign: "center",
        }}
      >
        CHILD COMPONENT LOADED
      </div>
    );
  }

  componentWillUnmount() {
    console.log("Running componentWillUnmount");
    this.props.startTimer();
  }
}
