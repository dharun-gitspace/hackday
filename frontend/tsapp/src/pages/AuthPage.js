import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/SharedComponents/AuthForm/AuthForm"; // Swappable form
import "./AuthPage.css"; // For any custom styling

const AuthPage = ({ setLoggedInUser }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [errorMessage, setErrorMessage] = useState(""); // Error feedback
  const navigate = useNavigate();

  const handleAuth = ({ email }) => {
    if (!email) {
      setErrorMessage("Email is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    setLoggedInUser(email); // Save email to global state
    alert(isLogin ? "Login Successful!" : "Signup Successful! Logging you in...");

    // Assume successful login/signup and navigate accordingly
    const isTeacher = email.includes("teacher"); // Example condition
    navigate(isTeacher ? "/teacher" : "/student");
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
