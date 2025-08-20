import React from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 8 }}
      component="main"
      aria-label="Login form"
    >
      <Typography variant="h5" component="h1" gutterBottom align="center">
        Login
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          required
          fullWidth
          autoFocus
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
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
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
    </Paper>
  );
};

export default Login;
