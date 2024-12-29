import React, { useState } from "react";
import FileUpload from "../components/SharedComponents/FileUpload/FileUpload";

const TeacherPage = ({ loggedInUser }) => {
  const [files, setFiles] = useState([]);

  return (
    <div>
      <h1>Welcome, {loggedInUser.split("@")[0]}</h1>
      <FileUpload files={files} setFiles={setFiles} loggedInUser={loggedInUser} />
    </div>
  );
};

export default TeacherPage;
