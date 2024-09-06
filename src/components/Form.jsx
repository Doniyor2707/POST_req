import React from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

const Form = ({
  username,
  password,
  handleClickName,
  handleClickPass,
  handleSubmit,
}) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "0 auto",
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Welcome back
      </Typography>

      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={handleClickName}
        required
      />

      <TextField
        label="Password"
        variant="outlined"
        value={password}
        onChange={handleClickPass}
        required
        type="password"
      />

      <Button variant="contained" color="primary" type="submit">
        POST
      </Button>
    </Box>
  );
};

export default Form;
