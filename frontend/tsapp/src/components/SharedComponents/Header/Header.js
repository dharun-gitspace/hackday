import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ loggedInUser, setLoggedInUser }) => {
  const navigate = useNavigate();

  // Logout Handler
  const handleLogout = () => {
    setLoggedInUser(null); // Clear user state
    navigate("/"); // Redirect to login page
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#6200ea" }}>
      <Toolbar>
        {/* App Title */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", fontFamily: "'Roboto', sans-serif" }}
        >
          Intelligent Assessment Platform
        </Typography>

        {/* Dynamic Buttons */}
        {loggedInUser ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1" sx={{ color: "white" }}>
              Hello, {loggedInUser.split("@")[0]}!
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
            <Button component={Link} to="/signup" color="inherit">
              Sign Up
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
