import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";

import "./CSS/firstPage.css";

export default class FirstPage extends React.Component {
  render() {
    return (
      <Box
        sx={{
          width: 1160,
          height: "auto",
          marginLeft: 10,
        }}
      >
        {/* <Grid container spacing={4}>
          <Grid item xs={12}>
            <Item>
              <h3 style={{ textAlign: "center" }}>WELCOME TO REACT COURSE</h3>
            </Item>
          </Grid>
        </Grid> */}
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Item>
              <h4>ASSIGNMENT 1 </h4>
              <hr />
              <p>
                Part 1: Create an input. Type in a color and it should change
                the background color of a div directly{" "}
              </p>
              <p>
                Part 2: The color of the div should change only when a button is
                clicked.
              </p>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h4>ASSIGNMENT 2 </h4>
              <hr />
              <p>
                Part 1: Calculate the duration between a component mount and
                unmount.
              </p>
              <p>
                Part 2: Change the color of a div to what the user enters in an
                input. The change should happen on click of the div.
              </p>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h4>ASSIGNMENT 3 </h4>
              <hr />
              <p>
                Part 1: Use splice to delete a Particular user from the list
              </p>
              <p>
                Part 2: Lets create a login form, make an API call and validate
                if the login was successful.
              </p>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h4>ASSIGNMENT 4 </h4>
              <hr />
              <p>
                Part 1: Lets continue assignment 3. But now the UI needs to be
                created using MUI. www.mui.com
              </p>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h4>ASSIGNMENT 5 </h4>
              <hr />
              <p>Part 1: Use Router 6 to navigate between the components</p>
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
