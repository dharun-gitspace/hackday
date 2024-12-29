import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const AuthForm = ({ isLogin, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password }); // Pass form data to AuthPage
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: "auto", padding: 2 }}>
      <Typography variant="h4" align="center" sx={{ mb: 3 }}>
        {isLogin ? "Login" : "Sign Up"}
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        {isLogin ? "Login" : "Sign Up"}
      </Button>
    </Box>
  );
};

export default AuthForm;
