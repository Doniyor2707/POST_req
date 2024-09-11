// state
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  CircularProgress,
} from "@mui/material";
// api
import { useAuthPostsMutation } from "../../../app/services/auth";
// formik
import { useFormik } from "formik";
import * as Yup from "yup";

// category
const categories = [
  { value: "react js", label: "React js" },
  { value: "angular", label: "Angular" },
  { value: "vue js", label: "Vue js" },
];

// Initial values
const initialValues = {
  title: "",
  content: "",
  category: "",
};

// Validation schema
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
  category: Yup.string().required("Category is required"),
});

const Posts = () => {
  // api
  const [authLogin, { isLoading }] = useAuthPostsMutation();
  // state
  const [responseMessage, setResponseMessage] = useState(null);
  const [response, setResponse] = useState(null);

  // formik
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const res = await authLogin(values).unwrap();
        setResponse(res);
        // massage
        setResponseMessage({
          type: "success",
          text: "Post created successfully!",
        });

        resetForm();
      } catch (err) {
        // massage
        setResponseMessage({
          type: "error",
          text: "Failed to create post. Please try again.",
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
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Create New Post
      </Typography>
      <TextField
        id="title"
        name="title"
        label="Title"
        variant="outlined"
        fullWidth
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
        sx={{ mb: 2 }}
      />
      <TextField
        id="content"
        name="content"
        label="Content"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        value={formik.values.content}
        onChange={formik.handleChange}
        error={formik.touched.content && Boolean(formik.errors.content)}
        helperText={formik.touched.content && formik.errors.content}
        sx={{ mb: 2 }}
      />
      <TextField
        id="category"
        name="category"
        label="Category"
        variant="outlined"
        select
        fullWidth
        value={formik.values.category}
        onChange={formik.handleChange}
        error={formik.touched.category && Boolean(formik.errors.category)}
        helperText={formik.touched.category && formik.errors.category}
        sx={{ mb: 2 }}
      >
        {categories.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

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
              backgroundColor: "#3700b3",
            },
          }}
        >
          Submit
        </Button>
      )}
      {/* massage */}
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
      {/* res */}
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

export default Posts;
