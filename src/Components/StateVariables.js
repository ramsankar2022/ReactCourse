import React from "react";

class StateVariables extends React.Component {
  state = {
    color1: "",
    color2: "",
  };

  handleChange = (e) => {
    this.setState({
      color1: e.target.value,
    });
  };

  render() {
    let inpColor = "";

    return (
      <>
        <div
          style={{
            width: 500,
            border: 1,
            borderColor: "black",
            borderRadius: 0.5,
          }}
        >
          <div>
            <h3>Textbox Onchange Event</h3>
            <div style={{ backgroundColor: this.state.color1, width: 400 }}>
              <input
                type="text"
                name="username"
                placeholder="Enter the Color"
                onChange={this.handleChange}
              />
            </div>
            <div style={{ backgroundColor: this.state.color1 }}></div>
          </div>
        </div>
        <br />
        <hr />
        <div
          style={{
            width: 500,
            border: 1,
            borderColor: "grey",
            borderRadius: 0.5,
          }}
        >
          <div>
            <h3>Enter color and Submit </h3>
            <div style={{ backgroundColor: this.state.color2, width: 400 }}>
              <input
                type="text"
                name="user"
                placeholder="Enter Color and submit it"
                onChange={(e) => {
                  inpColor = e.target.value;
                }}
              />
              <button
                name="submit"
                onClick={(e) => this.setState({ color2: inpColor })}
              >
                Click Here
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StateVariables;
