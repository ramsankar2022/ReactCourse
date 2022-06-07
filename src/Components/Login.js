import React, { Component } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "",
    success: true    
  };



  signIn = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(this.state.email);
        console.log(this.state.password);
        res.token
          ? this.setState({
              message: `Login is successful and your tokenId is ${res.token}`,
              success: true,
            })
          : this.setState({
              message: res.error,
              success: false,
            });
      });
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
              <h3 style={{ textAlign: "center" }}>ASSIGNMENT 3 - PART 2</h3>
            </Item>
          </Grid>
        </Grid>
        <br />
        <br />

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Item>
              <form autoComplete="off">
                <TextField
                  style={{ width: 400 }}
                  type="text"
                  name="email"
                  id="email"
                  label="Enter the email"
                  variant="outlined"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  required
                />
                <br />
                <br />
                <TextField
                  style={{ width: 400 }}
                  type="Password"
                  name="password"
                  id="password"
                  label="Enter the Password"
                  variant="outlined"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  required
                />
                <br />
                <br />
                <Button
                  style={{ marginTop: 5, width: 400 }}
                  variant="outlined"
                  name="signin"
                  id="signin"
                  onClick={(e) => {
                    e.preventDefault();
                    this.signIn();
                  }}
                >
                  Sign In
                </Button>                
              </form>
            </Item>
          </Grid>
        </Grid>
        <Stack spacing={2}>
          <Item style={{textAlign:'center'}}>
            {this.state.success && this.state.message !== "" ? (
              <h4 style={{ color: "green" }}>{this.state.message}</h4>
            ) : !this.state.success ? (
              <h4 style={{ color: "red" }}>{this.state.message}</h4>
            ) : (
              ""
            )}
          </Item>
        </Stack>
      </Box>
    );
  }
}
