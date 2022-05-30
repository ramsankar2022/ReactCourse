import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  state = {
    isActive: false,
    startDate: "",
    endDate: "",
    diff: 0,
    timerMessage: "",
  };

  showComponent = (e) => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  startTimer = () => {
    if (this.state.isActive) {
      this.setState({
        startDate: new Date(),
        diff: 0,
        timerMessage: "Timer Started ...",
      });
    } else {
      let eDate = new Date();
      this.setState({
        timerMessage: "Timer Ended ...",
        isActive: false,
        endDate: eDate,
        diff: (eDate - this.state.startDate) / 1000,
      });
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>LIFECYCLE EXAMPLE</h2>
        <button onClick={this.showComponent}> Timer</button>
        {this.state.isActive && (
          <p style={{ paddingTop: 0, marginTop: 0 }}>
            (To Stop timer, press the timer button again!!!)
          </p>
        )}
        <br />
        <h3>Difference is {this.state.diff}</h3>
        <h3>{this.state.timerMessage}</h3>
        <br />
        {this.state.isActive && <ChildComponent startTimer={this.startTimer} />}
      </div>
    );
  }
}
