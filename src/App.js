import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import logo from "./logo.svg";
import "./index.css";

const App = () => {
  const [p, setP] = useState(0);
  const [t, setT] = useState(0);
  const [r, setR] = useState(0);
  const [si, setSi] = useState(0);

  const calculateInterest = () => {
    setSi((p * t * r) / 100);
  };
  return (
    <div className="div">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <TextField
        onChange={(event) => setP(event.target.value)}
        id="outlined-basic"
        label="Enter Principle"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setT(event.target.value)}
        id="outlined-basic"
        label="Time"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setR(event.target.value)}
        label="Enter Rate"
        id="Rate"
        variant="outlined"
      />
      <br />
      <br />
      <Button
        onClick={() => calculateInterest()}
        variant="contained"
        color="success"
      >
        Calculate
      </Button>
      <br />
      <br />
      <Typography variant="h6" gutterBottom component="div">
        Simple Interest is {si}
      </Typography>
    </div>
  );
};

export default App;
