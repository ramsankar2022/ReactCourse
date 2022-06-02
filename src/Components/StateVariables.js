import React from "react";

class StateVariables extends React.Component {
  state = {
    color1: "",
    color2: "",
  };

  render() {
    let inpColor = "";

    return (
      <div
        style={{
          marginLeft: 500,
          marginTop: 10,
          borderColor: "black",
          borderStyle: "solid",
          padding: 10,
          width: 400,
          textAlign: "center",
        }}
      >
        <h2>ASSIGNMENT 1 </h2>
        <div style={{ textAlign: "center" }}>
          <h3>Textbox Onchange Event</h3>
          <div style={{ backgroundColor: this.state.color1, width: 400 }}>
            <input
              type="text"
              name="username"
              placeholder="Enter the Color"
              onChange={(e) => this.setState({ color1: e.target.value })}
            />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h3>Enter color and Click the button </h3>

          <div style={{ backgroundColor: this.state.color2, width: 400 }}>
            <input
              type="text"
              name="user"
              placeholder="Enter Color and submit it"
              onChange={(e) => (inpColor = e.target.value)}
            />
            <button
              name="submit"
              onClick={(e) => this.setState({ color2: inpColor })}
            >
              Click Here
            </button>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default StateVariables;
