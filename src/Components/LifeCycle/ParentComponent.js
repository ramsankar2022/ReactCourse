import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";

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
      <Box
        sx={{
          width: 400,
          height: "auto",
          marginLeft: 50,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Item>
              <h3 style={{ textAlign: "center" }}>ASSIGNMENT 2 (PART 2)</h3>
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Item>
              <h3>LIFECYCLE EXAMPLE</h3>
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
              {this.state.isActive && (
                <ChildComponent startTimer={this.startTimer} />
              )}
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
