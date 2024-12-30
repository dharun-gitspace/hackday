import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Button, IconButton } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const TeacherUpload = () => {
  const [uploadSuccess, setUploadSuccess] = useState(false); // Track upload success

  const handleFileSelect = () => {
    setUploadSuccess(true); // Show success message immediately after file selection
  };

  if (uploadSuccess) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="h4" color="primary">
          File uploaded successfully!
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card
        sx={{
          width: 400,
          padding: 2,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Upload Teaching Materials
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Select a PDF to upload.
          </Typography>
          <IconButton
            color="primary"
            sx={{
              border: "2px dashed #6200ea",
              padding: "20px",
              marginBottom: "20px",
            }}
            component="label"
          >
            <UploadFileIcon fontSize="large" />
            <input
              type="file"
              accept="application/pdf"
              hidden
              onChange={handleFileSelect} // Trigger success message on file selection
            />
          </IconButton>
          <Button variant="contained" color="primary" component="label">
            Select File
            <input
              type="file"
              accept="application/pdf"
              hidden
              onChange={handleFileSelect} // Trigger success message on file selection
            />
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TeacherUpload;
