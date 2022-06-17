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
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";

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
      <Box
        sx={{
          width: 400,
          height: "auto",
          marginLeft: 50
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Item>
              <h3 style={{ textAlign: "center" }}>ASSIGNMENT 4</h3>
              <p style={{ textAlign: "center" }}>(Developed using Class Component)</p>
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Item>
              <h3 style={{ textAlign: "center" }}>Users List</h3>
            </Item>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Item>
              <List>{this.state.users.map(this.showUsers)}</List>
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Item style={{textAlign: 'center'}}>
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
            </Item>
          </Grid>
        </Grid>

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
    );
  }
}
