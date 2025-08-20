import React from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    // Handle signup logic here
    console.log(data);
    navigate("/login");
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 8 }}
      component="main"
      aria-label="Signup form"
    >
      <Typography variant="h5" component="h1" gutterBottom align="center">
        Signup
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label="Name"
          type="text"
          variant="outlined"
          required
          fullWidth
          autoFocus
          {...register("name", { required: "Name is required" })}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          required
          fullWidth
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email",
            },
          })}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          required
          fullWidth
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        <TextField
          label="Re-enter Password"
          type="password"
          variant="outlined"
          required
          fullWidth
          {...register("rePassword", {
            required: "Please re-enter your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ mt: 2 }}
        >
          Signup
        </Button>
      </Box>
    </Paper>
  );
};

export default Signup;
