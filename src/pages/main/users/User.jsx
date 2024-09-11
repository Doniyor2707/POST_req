import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Grid,
} from "@mui/material";
import { useAuthUsersMutation } from "../../../app/services/auth";
import { useFormik } from "formik";
import * as Yup from "yup";

// Initial values
const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  birthdate: "",
};

// Validation schema
const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  birthdate: Yup.date().required("Birthdate is required"),
});

const UserForm = () => {
  // API call
  const [authUser, { isLoading }] = useAuthUsersMutation();
  // State for response and messages
  const [responseMessage, setResponseMessage] = useState(null);
  const [response, setResponse] = useState(null);

  // Formik for form handling
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const res = await authUser(values).unwrap();
        setResponse(res);
        setResponseMessage({
          type: "success",
          text: "User created successfully!",
        });
        resetForm();
      } catch (err) {
        setResponseMessage({
          type: "error",
          text: "Failed to create user. Please try again.",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#fafafa",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        borderRadius: "12px",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Create New User
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstname"
            name="firstname"
            label="First Name"
            variant="outlined"
            fullWidth
            value={formik.values.firstname}
            onChange={formik.handleChange}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastname"
            name="lastname"
            label="Last Name"
            variant="outlined"
            fullWidth
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>
      <TextField
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{ mb: 2 }}
      />
      <TextField
        id="birthdate"
        name="birthdate"
        label="Birthdate"
        type="date"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        fullWidth
        value={formik.values.birthdate}
        onChange={formik.handleChange}
        error={formik.touched.birthdate && Boolean(formik.errors.birthdate)}
        helperText={formik.touched.birthdate && formik.errors.birthdate}
        sx={{ mb: 2 }}
      />
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            padding: "10px",
            backgroundColor: "#6200ea",
            "&:hover": {
              backgroundColor: "#115293",
            },
          }}
        >
          Submit
        </Button>
      )}
      {responseMessage && (
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: responseMessage.type === "success" ? "green" : "red",
            mt: 2,
          }}
        >
          {responseMessage.text}
        </Typography>
      )}
      {response && (
        <Box
          sx={{ mt: 4, p: 2, backgroundColor: "#f0f0f0", borderRadius: "8px" }}
        >
          <Typography variant="h6" gutterBottom>
            Response:
          </Typography>
          <Typography
            variant="body1"
            component="pre"
            sx={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {JSON.stringify(response, null, 2)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default UserForm;
