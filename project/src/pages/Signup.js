import React, { useState } from "react";
import Layout from "../components/Layout/Layout";

import { Box, Button, Link, TextField, Typography } from "@mui/material";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform user registration logic here (e.g., API calls, etc.)
    // For the sake of this example, let's assume the sign-up is successful if all fields are filled
    if (username && email && password) {
      alert("Sign-up successful!");
      // You can redirect the user to another page after successful sign-up
      // Example: history.push('/login');
    } else {
      alert("Please enter username, email, and password.");
    }
  };

  return (
    <Layout>
      <Box sx={{ my: 5, mx: "auto", width: "300px" }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Sign Up
        </Typography>
        <form onSubmit={handleSignUp}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            Sign Up
          </Button>
        </form>
        <Box mt={2}>
          <Typography variant="body2" align="center">
            Already have an account?{" "}
            <Link href="/login" color="textSecondary">
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default SignUp;
