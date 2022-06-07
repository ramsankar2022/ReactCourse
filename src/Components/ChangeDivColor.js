import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default class Timer extends React.Component {
  state = {
    inpColor: "",
    dvColor1: "",
    dvColor2: "",
    dvColor3: "",
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
              <h3 style={{ textAlign: "center" }}>ASSIGNMENT 2 (PART 1)</h3>
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Item>
              <h3>DIV COLOR CHANGE </h3>
              <div style={{ textAlign: "center" }}>
                <div
                  id="div1"
                  style={{
                    backgroundColor: this.state.dvColor1,
                    width: 400,
                    height: 30,
                    marginBottom: 10,
                    borderStyle: "solid",
                    borderColor: "gray",
                  }}
                  onClick={(e) =>
                    this.state.inpColor !== ""
                      ? this.setState({ dvColor1: this.state.inpColor })
                      : this.setState({ dvColor1: "" })
                  }
                ></div>

                <div
                  id="div2"
                  style={{
                    backgroundColor: this.state.dvColor2,
                    width: 400,
                    height: 30,
                    marginBottom: 10,
                    borderStyle: "solid",
                    borderColor: "gray",
                  }}
                  onClick={(e) =>
                    this.state.inpColor !== ""
                      ? this.setState({ dvColor2: this.state.inpColor })
                      : this.setState({ dvColor2: "" })
                  }
                ></div>

                <div
                  id="div3"
                  style={{
                    backgroundColor: this.state.dvColor3,
                    width: 400,
                    height: 30,
                    marginBottom: 10,
                    borderStyle: "solid",
                    borderColor: "gray",
                  }}
                  onClick={(e) =>
                    this.state.inpColor !== ""
                      ? this.setState({ dvColor3: this.state.inpColor })
                      : this.setState({ dvColor3: "" })
                  }
                ></div>
              </div>
            </Item>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Item>
              <TextField
              style={{width:400}}
                id="outlined-basic"
                label="Enter the Color"
                variant="outlined"
                onChange={(e) => this.setState({ inpColor: e.target.value })}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
