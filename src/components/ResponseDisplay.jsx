import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const ResponseDisplay = ({ id,title,body }) => {
  if (!response) return null;

  return (
    <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
      <Typography variant="h6" gutterBottom>
        Response:
      </Typography>
      <Box>
        <Typography><strong>Id:</strong> {id}</Typography>
        <Typography><strong>Username:</strong> {title}</Typography>
        <Typography><strong>Passoword:</strong> {body}</Typography>
      </Box>
    </Paper>
  );
};

export default ResponseDisplay;
