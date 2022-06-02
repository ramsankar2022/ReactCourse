import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "",
    success: true,
    divStyle: {
      marginLeft: 500,
      marginTop: 50,
      borderColor: "black",
      borderStyle: "solid",
      padding: 10,
      width: 400,
      textAlign: "center",
    },
    btnStyle: {
      margin: 10,
      padding: 10,
      borderRadius: 5,
      backgroundColor: "darkblue",
      color: "White",
      fontWeight: "bold",
      width: 150,
      cursor: "pointer",
    },
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
      <div style={this.state.divStyle}>
        <h2>ASSIGNMENT 3 - PART 2</h2>
        <h3>Login Form</h3>

        <form>
          <input
            style={{ width: 300, borderRadius: 5, margin: 5, padding: 5 }}
            type="text"
            name="email"
            id="email"
            placeholder="Enter the email"
            onChange={(e) => this.setState({ email: e.target.value })}
            required
          />
          <br />
          <br />
          <input
            style={{ width: 300, borderRadius: 5, margin: 5, padding: 5 }}
            type="Password"
            name="password"
            id="password"
            placeholder="Enter the Password"
            onChange={(e) => this.setState({ password: e.target.value })}
            required
          />
          <br />
          <br />
          <input
            style={this.state.btnStyle}
            type="button"
            name="signin"
            id="signin"
            value="Sign In"
            onClick={(e) => {
              e.preventDefault();
              this.signIn();
            }}
          ></input>
          <br />
          {this.state.success && this.state.message !== "" ? (
            <h4 style={{ color: "green" }}>{this.state.message}</h4>
          ) : !this.state.success ? (
            <h4 style={{ color: "red" }}>{this.state.message}</h4>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}
