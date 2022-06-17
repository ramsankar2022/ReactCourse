import { useState, useEffect } from 'react'
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

const FuncComponent = () => {

    const API_FETCH = "https://reqres.in/api/users?page=1";

    const [users, setusers] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [showAddUser, SetShowAddUser] = useState(false);
    const [search, setSearch] = useState("");
    const [isExist, setIsExist] = useState(true);
    const getAllUsers = async () => {
        const fetchAPI = await fetch(API_FETCH);
        await fetchAPI.json().then((res) => {
            setusers(res.data);
        });
    };

    const handleClickOpen = () => {
        SetShowAddUser(true);
        setFirstName("");
        setLastName("");
        setEmail("");
    };

    const handleClose = () => {
        SetShowAddUser(false);
    };

    const CreateUsers = (e) => {
        if (firstName === "" || lastName === "" || email === "") {
            alert("All fields are mandatory. Please enter all fields to proceed.");
            return false;
        }

        let allusers = users;
        allusers = [
            ...allusers,
            {
                first_name: firstName,
                last_name: lastName,
                email: email,
            },
        ];

        setusers(allusers);
        handleClose();
    };

    const deleteUser = (email) => {
        let allUsers = users.filter(user => user.email !== email);
        setusers(allUsers);
    };

    const showUsers = (user, index) => {
        return (
            <ListItem disablePadding key={index}>
                <ListItemText
                    primary={user.first_name + " " + user.last_name}
                    secondary={user.email}
                />
                <i
                    className="material-icons"
                    style={{ float: "right", cursor: "pointer" }}
                    onClick={(e) => deleteUser(user.email)}
                >
                    delete
                </i>
            </ListItem>
        );
    };

    const SearchByName = () => {

        const isExist = users.some(user => user.first_name === search
            || user.last_name === search);

        if (isExist) {
            setIsExist(isExist);
            let filteredUsers = users.filter(user => user.first_name === search
                || user.last_name === search);
            setusers(filteredUsers);
        }
        else {
            setIsExist(isExist);
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []);

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
                        <p style={{ textAlign: "center", padding: 0 }}>(Developed using Functional Component)</p>
                    </Item>
                </Grid>
            </Grid>

            <TextField
                style={{ textAlign: "center" }}
                margin="normal"
                id="search"
                label="Search by Name"
                type="text"
                variant="outlined"
                onChange={(e) => setSearch(e.target.value)}
                required
            />
            <Button
                style={{ marginTop: 20, marginLeft: 5, padding: 12, width: 175 }}
                variant="contained"
                size="small"
                color="secondary"
                onClick={SearchByName}
            >
                SEARCH
            </Button>

            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Item>
                        {!isExist && <p style={{ color: 'red', fontWeight: 'bold' }}>No matching Results</p>}
                        {isExist && <List>{users.map(showUsers)}</List>}
                    </Item>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Item style={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            size="small"
                            color="secondary"
                            onClick={getAllUsers}
                        >
                            REFRESH USERS
                        </Button>
                        <Button
                            style={{ marginLeft: 10 }}
                            variant="outlined"
                            size="small"
                            color="secondary"
                            onClick={handleClickOpen}
                        >
                            CREATE USERS
                        </Button>
                    </Item>
                </Grid>
            </Grid>

            <Dialog open={showAddUser} onClose={handleClose}>
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
                        onChange={(e) => setFirstName(e.target.value)}
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
                        onChange={e => setLastName(e.target.value)}
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
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={CreateUsers}>Create</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default FuncComponent;