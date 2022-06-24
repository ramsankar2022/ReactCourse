import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid, TextareaAutosize } from "@mui/material";
import Item from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import encryptor from "../Encrypt";

const CreateUser = () => {

  const [userName, setuserName] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(true); 

  const addUser = () => {
    let publicKey = document.getElementById("publicKey").value;
    const enc = new encryptor(publicKey);
    var credentials = enc.encrypt(
      JSON.stringify({
        userName: userName.trim(),
        userAddress: userAddress.trim(),
      })
    );

    console.log(credentials);
    

    fetch("http://localhost:5000/users", {
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
          ? alert('user added succesfully to the database')
          : alert('user insertion failed')
      });
  };

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
            <h3 style={{ textAlign: "center" }}>Create User </h3>
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
                name="userName"
                id="userName"
                label="Enter the name"
                variant="outlined"
                onChange={(e) => setuserName(e.target.value)}
                required
              />
              <br />
              <br />
              <TextField
                style={{ width: 400 }}
                type="text"
                name="userAddress"
                height="200"
                id="userAddress"
                label="Enter the Address"
                variant="outlined"
                onChange={(e) => setUserAddress(e.target.value)}
                required
              />
              <br />
              <br />
              <Button
                style={{ marginTop: 5, width: 400 }}
                variant="outlined"
                name="create"
                id="create"
                onClick={(e) => {
                  e.preventDefault();
                  addUser();
                }}
              >
                Create User
              </Button>
            </form>
          </Item>
        </Grid>
      </Grid>
      <Stack spacing={2}>
        <Item style={{ textAlign: "center" }}>
          {success ? (
            <h4 style={{ color: "green" }}>{message}</h4>
          ) : !success ? (
            <h4 style={{ color: "red" }}>{message}</h4>
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
};

export default CreateUser;