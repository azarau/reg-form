import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";

export default function About(props) {
  const [name, setName] = useState("");

  const { firebase, items } = props;
  const db = firebase.firestore();

  const handleClick = () => {
    console.log(+Date.now());

    // Add a new document in collection "cities"
    db.collection("registration")
      .doc("Azarau")
      .set({
        name: "Azra",
        age: 20
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  const handleChange = () => {
    console.log(+Date.now());
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <form noValidate autoComplete="off">
          <h1> Welcome to Azra E-portal Registration Form </h1>
          <TextField
            name="name"
            label="Enter your name"
            variant="outlined"
            onChange={handleChange}
          />
          <br />
          <br />

          <TextField
            id="outlined-basic"
            name="phone number"
            label="Enter your phone number."
            variant="outlined"
          />
          <br />
          <br />

          <TextField
            id="outlined-basic"
            name="depatment"
            label="Enter your depatment"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            name="email"
            label="Enter your email address"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            name="home address"
            label="Enter your parmanent home address"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            name="RRR number"
            label="Enter your RRR number"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            name="amount"
            label="Enter your amount"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            name="next of kin's name"
            label="Enter your next of kin's name"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            name="next of kin's phone number"
            label="Enter your next of kin's phone number"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            name="next of kin's home address"
            label="Enter your next of kin's parmanent home address"
            variant="outlined"
          />
          <br />
          <br />
          <h2> if you are assures of the informations above click submit </h2>
          <Button
            onClick={() => setName(+new Date())}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
