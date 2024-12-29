import React from "react";
import AuthForm from "../components/SharedComponents/AuthForm/AuthForm";

const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log("Login with", credentials);
    // Add logic to send credentials to the backend
  };

  return <AuthForm isLogin={true} onSubmit={handleLogin} />;
};

export default LoginPage;
