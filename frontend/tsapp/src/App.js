import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/SharedComponents/Header/Header";
import AuthPage from "./pages/AuthPage";
import TeacherPage from "./pages/TeacherPage";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null); // Store logged-in user email

  return (
    <Router>
      <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <Routes>
        <Route
          path="/"
          element={<AuthPage setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="/teacher"
          element={
            loggedInUser ? (
              <TeacherPage loggedInUser={loggedInUser} /> // Pass loggedInUser to TeacherPage
            ) : (
              <AuthPage setLoggedInUser={setLoggedInUser} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
