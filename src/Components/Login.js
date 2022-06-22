import React, { Component } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import encryptor from "../Encrypt";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "",
    success: true,
  };

  signIn = () => {
    let publicKey = document.getElementById("publicKey").value;
    this.enc = new encryptor(publicKey);
    var credentials = this.enc.encrypt(
      JSON.stringify({
        email: this.state.email.trim(),
        password: this.state.password.trim(),
      })
    );

    console.log(JSON.stringify({ credentials: credentials }));

    fetch("http://localhost:5000/signinuser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ credentials: credentials }),
    })
      .then((res) => res.json())
      .then((resJSON) => {
        resJSON.token
          ? this.setState({
              message: `Login is successful and your tokenId is ${resJSON.token}`,
              success: true,
            })
          : this.setState({
              message: resJSON.error,
              success: false,
            });
      });

      console.log(this.state.success, this.state.message)
  };

  // fetch("https://reqres.in/api/login", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     email: this.state.email,
  //     password: this.state.password,
  //   }),
  // })
  //   .then((response) => response.json())
  //   .then((res) => {
  //     console.log(this.state.email);
  //     console.log(this.state.password);
  //     res.token
  //       ? this.setState({
  //           message: `Login is successful and your tokenId is ${res.token}`,
  //           success: true,
  //         })
  //       : this.setState({
  //           message: res.error,
  //           success: false,
  //         });
  //   });
  // };

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
          <Item style={{ textAlign: "center" }}>
            {this.state.success ? (
              <h4 style={{ color: "green" }}>{this.state.message}</h4>
            ) : !this.state.success ? (
              <h4 style={{ color: "red" }}>{this.state.message}</h4>
            ) : (
              ""
            )}
          </Item>
        </Stack>

        <input
          id="publicKey"
          type="hidden"
          value="-----BEGIN PUBLIC KEY-----
                    MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAtUmkfa7DwEQnQMM5aS/F
                    pCbgKThc4eJGYHJwQqim3+6KdHPHsQCKfK0Ku22WZXIySbk9TxW3Zq7eusc4wEHB
                    4s+3ZhLJh/eSv+Cg160Zxvlm9WsnP0CTaBMfr3wRVyia1FMTbznmq5azKrbN7V1U
                    NWD1qumApBFaPs9esQ48htgx/vGZML0mLo/wEy3w9Due7c6AuaeiXGsYpTXDbz0K
                    KysQDtRjp9ltCX31cdycI3+DzOPAi4t8CztvFqymmTFRKkO9khV0ZwHgf4TUidC4
                    ssx7KfTQpyWkDGv8vVrH+ALdmln8WpwARX8DHwyfF2eW2y5kIZhMo9wiNIddM3SR
                    9kcst0EXAb8M5nlvxACyIU37VprbXHG0d408GjObcnO2p/BXqsUCh0RFp8FccNrG
                    87a9E/inpYAgalshsotx6gUX7CNA3N5wAmIAOSwKbDKJXFXaJthpUfxvGKXhzmVF
                    xtLi1bS0e4n2pP5H3fd2tFAsFnDp4wnboyuq+/BXW0K4eF0G6dnBCffcO5f4SN6A
                    TrnYBhanqJ8WW+8XUevoce2mxSYnWwaOgad3vNFYAXoqll+clLg9WbtgsZx33Fpn
                    yh7PV0VZGIvl2kFsjwIpuNaNBnfJ1xDrSo+4zB/0EfBNKqeD37SUxj1gX4jTLrWZ
                    mYAS1Do/DanESVjJUI0betcCAwEAAQ==
                    -----END PUBLIC KEY-----"
        />
      </Box>
    );
  }
}
