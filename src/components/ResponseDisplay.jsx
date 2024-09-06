import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const ResponseDisplay = ({ response }) => {
  if (!response) return null;

  return (
    <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
      <Typography variant="h6" gutterBottom>
        Response:
      </Typography>
      <Box>
        <Typography><strong>Id:</strong> {response.id}</Typography>
        <Typography><strong>Username:</strong> {response.title}</Typography>
        <Typography><strong>Passoword:</strong> {response.body}</Typography>
      </Box>
    </Paper>
  );
};

export default ResponseDisplay;
