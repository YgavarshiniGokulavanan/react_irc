import React, { useState } from "react";
import Layout from "../components/Layout/Layout";

import { Box, Button, Link, TextField, Typography } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username && password) {
      alert("Login successful!");
      
    } else {
      alert("Please enter username and password.");
    }
  };

  return (
    <Layout>
      <Box sx={{ my: 5, mx: "auto", width: "300px",mt:14 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
        <Box mt={2}>
          <Typography variant="body2" align="center">
            <Link href="#" color="textSecondary" sx={{ mr: 1 }}>
              Forgot Password?
            </Link>
            or
            <Link href="/Signup" color="textSecondary" sx={{ ml: 1 }}>
              Signup
            </Link>
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Login;
