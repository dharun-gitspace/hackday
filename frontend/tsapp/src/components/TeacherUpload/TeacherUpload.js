import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Alert,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import FileUpload from "../SharedComponents/FileUpload/FileUpload";
import Footer from "../SharedComponents/Footer/Footer";
import Header from "../SharedComponents/Header/Header";

const TeacherUpload = () => {
  const [files, setFiles] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleUpload = () => {
    const formData = new FormData();
    files.forEach((file) => formData.append("file", file.file));

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setNotification({
            open: true,
            message: "File uploaded successfully!",
            severity: "success",
          });
          setFiles([]);
        } else {
          setNotification({
            open: true,
            message: "Failed to upload file.",
            severity: "error",
          });
        }
      })
      .catch((error) => {
        setNotification({
          open: true,
          message: `Upload Error: ${error.message}`,
          severity: "error",
        });
      })
      .finally(() => {
        setOpenDialog(false);
      });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Box
        sx={{
          flex: 1,
          display: "flex",
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
              Drag and drop a document or use the button below to select a file.
            </Typography>
            <IconButton
              color="primary"
              sx={{
                border: "2px dashed #6200ea",
                padding: "20px",
                marginBottom: "20px",
              }}
              onClick={() => setOpenDialog(true)}
            >
              <UploadFileIcon fontSize="large" />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpenDialog(true)}
              startIcon={<UploadFileIcon />}
            >
              Upload Document
            </Button>
          </CardContent>
        </Card>
      </Box>
      <Footer />

      {/* Upload Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Upload Your Document</DialogTitle>
        <DialogContent>
          <FileUpload files={files} setFiles={setFiles} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleUpload}
            color="primary"
            variant="contained"
            disabled={files.length === 0}
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={() => setNotification({ ...notification, open: false })}
      >
        <Alert
          onClose={() => setNotification({ ...notification, open: false })}
          severity={notification.severity}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default TeacherUpload;
