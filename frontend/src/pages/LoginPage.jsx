import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { useCurrentUserContext } from "../Context/userContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setToken } = useCurrentUserContext();

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    if (email && password) {
      fetch("http://localhost:5000/api/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setUser(result.user);
          setToken(result.token);
        })
        .then(() => {
          setTimeout(() => {
            navigate("/");
          }, 1500);
        })
        .catch(console.error);
    } else {
      setErrorMessage("Please specify email and password");
    }
  };

  console.warn(email, password);

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={handleSubmit}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default LoginPage;
