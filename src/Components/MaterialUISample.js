import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default class MaterialUISample extends React.Component {
  state = {
    users: [],
    firstname: "",
    job: "",
    showAddUser: false,
    firstName: "",
    lastName: "",
    email: "",
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

  handleClickOpen = () => {
    this.setState({
      showAddUser: true,
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  handleClose = () => {
    this.setState({
      showAddUser: false,
    });
  };

  CreateUsers = (e) => {
    const { firstName, lastName, email } = this.state;

    if (firstName === "" || lastName === "" || email === "") {
      alert("All fields are mandatory. Please enter all fields to proceed.");
      return false;
    }

    var allusers = this.state.users;
    allusers = [
      ...allusers,
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
      },
    ];

    this.setState({
      users: allusers,
    });
    this.handleClose();
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
      <ListItem disablePadding>
        <ListItemText
          primary={user.first_name + " " + user.last_name}
          secondary={user.email}
        />
        <i
          class="material-icons"
          style={{ float: "right", cursor: "pointer" }}
          onClick={(e) => this.deleteUser(index)}
        >
          delete
        </i>
      </ListItem>
    );
  };

  render() {
    return (
      <div style={this.state.divStyle}>
        <h2>ASSIGNMENT 4</h2>
        <h3>Material UI Designs</h3>
        <h3>Users List</h3>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <List>{this.state.users.map(this.showUsers)}</List>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={this.getUsers}
          >
            REFRESH USERS
          </Button>
          <Button
            style={{ marginLeft: 10 }}
            variant="outlined"
            size="small"
            color="secondary"
            onClick={this.handleClickOpen}
          >
            CREATE USERS
          </Button>
          <Dialog open={this.state.showAddUser} onClose={this.handleClose}>
            <DialogTitle>Create User</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter the user details. All fields are mandatory.
              </DialogContentText>
              .
              <TextField
                autoFocus
                margin="dense"
                id="firstName"
                label="First Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => this.setState({ firstName: e.target.value })}
                required
              />
              <TextField
                autoFocus
                margin="dense"
                id="lastName"
                label="Last Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => this.setState({ lastName: e.target.value })}
                required
              />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                onChange={(e) => this.setState({ email: e.target.value })}
                required
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose}>Cancel</Button>
              <Button onClick={this.CreateUsers}>Create</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </div>
    );
  }
}
