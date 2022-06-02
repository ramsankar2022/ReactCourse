import React from "react";

export default class APIRequest extends React.Component {
  state = {
    users: [],
    firstname: "",
    job: "",
    showAddUser: false,
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

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          users: resJson.data,
        });
      });
  };

  deleteUser = (index) => {
    const allUsers = this.state.users;
    allUsers.splice(index, 1);

    this.setState({
      users: allUsers,
    });
  };

  showUsers = (user, index) => {
    return (
      <div
        style={{
          listStyle: "none",
          borderStyle: "none",
          backgroundColor: "lightgray",
          borderRadius: 5,
          marginBottom: 10,
        }}
      >
        {user.first_name} {user.last_name}
        <button
          style={{ marginLeft: 10, padding: 10, cursor: "pointer", backgroundColor: "lightgray", }}
          onClick={(e) => this.deleteUser(index)}
        >
          X
        </button>
        
      </div>
    );
  };

  render() {
    return (
      <div style={this.state.divStyle}>
        <h2>ASSIGNMENT 3 - PART 1</h2>
        <h3>API CALLS </h3>
        <h3>Users List</h3>

        {this.state.users.map(this.showUsers)}

        <button style={this.state.btnStyle} onClick={this.getUsers}>
          REFRESH USERS
        </button>
      </div>
    );
  }
}
