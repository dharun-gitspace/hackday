import React from "react";
import AuthForm from "../components/SharedComponents/AuthForm/AuthForm";

const SignupPage = () => {
  const handleSignup = (credentials) => {
    console.log("Sign up with", credentials);
    // Add logic to send credentials to the backend
  };

  return <AuthForm isLogin={false} onSubmit={handleSignup} />;
};

export default SignupPage;
