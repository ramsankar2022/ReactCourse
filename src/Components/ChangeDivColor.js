import React from "react";

export default class Timer extends React.Component {
  state = {
    inpColor: "",
    dvColor1: "",
    dvColor2: "",
    dvColor3: "",
  };

  render() {
    return (
      <div style={{
        marginLeft: 500,
        marginTop: 50,
        borderColor: "black",
        borderStyle: "solid",
        padding:10,
        width:400,
        textAlign:"center"
      }}>
        <h2>ASSIGNMENT 2 - PART 1</h2>
        <h3>DIV COLOR CHANGE </h3>
        <div style={{ textAlign: "center" }}>
          <div
            id="div1"
            style={{
              backgroundColor: this.state.dvColor1,
              width: 400,
              height: 30,
              marginBottom: 10,
              borderStyle:'solid',
              borderColor:'gray'
            }}
            onClick={(e) =>
              this.state.inpColor !== "" ?
              this.setState({ dvColor1: this.state.inpColor }): this.setState({ dvColor1: "" })
            }
          ></div>

          <div
            id="div2"
            style={{
              backgroundColor: this.state.dvColor2,
              width: 400,
              height: 30,
              marginBottom: 10,
              borderStyle:'solid',
              borderColor:'gray'
            }}
            onClick={(e) =>
              this.state.inpColor !== "" ?
              this.setState({ dvColor2: this.state.inpColor }): this.setState({ dvColor2: "" })
            }
          ></div>

          <div
            id="div3"
            style={{
              backgroundColor: this.state.dvColor3,
              width: 400,
              height: 30,
              marginBottom: 10,
              borderStyle:'solid',
              borderColor:'gray'
            }}
            onClick={(e) =>
              this.state.inpColor !== "" ?
              this.setState({ dvColor3: this.state.inpColor }): this.setState({ dvColor3: "" })
            }
          ></div>
        </div>
        <div>
          <input
            value={this.state.color}
            style={{ width: 380, borderRadius: "30", margin: 5, padding: 5,  }}
            placeholder="Enter the color"
            onChange={(e) => this.setState({ inpColor: e.target.value })}
          ></input>
        </div>
      </div>
    );
  }
}
