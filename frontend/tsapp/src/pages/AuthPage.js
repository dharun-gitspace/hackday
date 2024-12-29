import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/SharedComponents/AuthForm/AuthForm"; // Swappable form
import "./AuthPage.css"; // For any custom styling

const AuthPage = ({ setLoggedInUser }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [errorMessage, setErrorMessage] = useState(""); // Error feedback
  const navigate = useNavigate();

  const handleAuth = async ({ email, password }) => {
    const endpoint = isLogin ? "http://localhost:5000/api/login" : "http://localhost:5000/api/signup";

    // Input validation
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.message || "Authentication failed. Please try again.");
        return;
      }

      if (isLogin) {
        // Successful login
        setLoggedInUser(email); // Pass the email to App.js for global state
        alert("Login Successful! Redirecting...");
        setTimeout(() => navigate("/teacher"), 3000); // Redirect after 3 seconds
      } else {
        // Successful signup
        alert("Signup Successful! Please login.");
        setIsLogin(true); // Switch to login form
      }
    } catch (error) {
      console.error("Error during authentication:", error);

      // Improved error handling
      if (error instanceof TypeError) {
        setErrorMessage("Network error or server is unreachable. Please check your internet connection and try again.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="auth-page">
      <AuthForm isLogin={isLogin} onSubmit={handleAuth} />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p className="toggle-text">
        {isLogin ? (
          <>
            Don’t have an account?{" "}
            <span
              className="toggle-link"
              onClick={() => {
                setIsLogin(false);
                setErrorMessage(""); // Clear errors
              }}
            >
              Sign Up
            </span>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <span
              className="toggle-link"
              onClick={() => {
                setIsLogin(true);
                setErrorMessage(""); // Clear errors
              }}
            >
              Login
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthPage;
