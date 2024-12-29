import React from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import "./FileUpload.css";

// Register FilePond plugins
registerPlugin(FilePondPluginFileValidateType, FilePondPluginFileValidateSize);

const FileUpload = ({ files, setFiles, loggedInUser }) => {
  const username = loggedInUser.split("@")[0]; // Extract username from email

  const handleProcess = (fieldName, file, metadata, load, error, progress, abort) => {
    // Create a new FormData object
    const formData = new FormData();
    formData.append("file", file); // Add the file
    formData.append("user", username); // Add the username

    // Create an XMLHttpRequest to send the file
    const request = new XMLHttpRequest();
    request.open("POST", "http://localhost:5000/api/upload");

    // Track progress
    request.upload.onprogress = (event) => {
      progress(event.lengthComputable, event.loaded, event.total);
    };

    // On successful upload
    request.onload = () => {
      if (request.status >= 200 && request.status < 300) {
        load(request.responseText); // Notify FilePond that the upload is complete
      } else {
        error("File upload failed."); // Notify FilePond of an error
      }
    };

    // On upload error
    request.onerror = () => {
      error("Could not upload file.");
    };

    // Abort the request if needed
    return () => {
      request.abort();
      abort();
    };

    // Send the file
    request.send(formData);
  };

  return (
    <FilePond
      files={files}
      onupdatefiles={setFiles}
      allowMultiple={false}
      maxFileSize="5MB"
      acceptedFileTypes={["application/pdf", "text/plain", "application/msword"]}
      labelIdle='Drag & Drop your file or <span class="filepond--label-action">Browse</span>'
      server={{
        process: handleProcess, // Custom upload handler
        revert: null, // Optional: Revert endpoint for handling canceled uploads
      }}
    />
  );
};

export default FileUpload;
