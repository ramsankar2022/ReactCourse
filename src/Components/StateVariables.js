import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class StateVariables extends React.Component {
  state = {
    color1: "",
    color2: "",
  };

  render() {
    let inpColor = "";

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
              <h3 style={{ textAlign: "center" }}>ASSIGNMENT 1</h3>
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Item>
              <h3>Textbox Onchange Event</h3>
              <div
                style={{
                  backgroundColor: this.state.color1,
                  width: 400,
                  padding: 10,
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Enter the Color"
                  variant="outlined"
                  onChange={(e) => this.setState({ color1: e.target.value })}
                />
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Item>
              <h3>Enter color and Click the button </h3>

              <div
                style={{
                  backgroundColor: this.state.color2,
                  width: 400,
                  minHeight: 100,
                  padding: 10,
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Enter the Color"
                  variant="outlined"
                  onChange={(e) => (inpColor = e.target.value)}
                />
                <br />
                <Button
                  style={{ marginTop: 5 }}
                  variant="outlined"
                  onClick={(e) => this.setState({ color2: inpColor })}
                >
                  Click Here
                </Button>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default StateVariables;
