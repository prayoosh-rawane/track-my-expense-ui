import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Drawer,
  TextField,
  MenuItem,
  Box,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Close as CloseIcon } from "@mui/icons-material";
import { getInputTypeNumberStyle } from "./Support";

const categories = [
  "Clothing",
  "Drinks",
  "Food",
  "Education",
  "Fuel",
  "Fun",
  "Health",
  "Transport",
  "Rent",
  "EMI",
  "Other",
];

const ExpenseForm = ({ open, onClose, onSubmit }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    setValue,
  } = useForm();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 400, p: 3 }}>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" mb={2} sx={{ m: 0 }}>
            Add Expense
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("amount", { required: "Amount is required", min: 1 })}
            label="Amount"
            type="number"
            fullWidth
            margin="normal"
            error={!!errors.amount}
            helperText={errors.amount?.message}
            sx={{ ...getInputTypeNumberStyle() }}
          />
          <TextField
            {...register("category", { required: "Category is required" })}
            select
            label="Category"
            fullWidth
            margin="normal"
            error={!!errors.category}
            helperText={errors.category?.message}
            value={watch("category") || ""}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
          <DatePicker
            {...register("date", { required: "Date is required" })}
            label="Date"
            value={watch("date") || null}
            onChange={(date) => setValue("date", date)}
            slotProps={{
              textField: {
                fullWidth: true,
                margin: "normal",
                error: !!errors.date,
                helperText: errors.date?.message,
              },
            }}
          />
          <TextField
            {...register("description")}
            label="Description (optional)"
            fullWidth
            margin="normal"
            multiline
            inputProps={{ maxLength: 100 }}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          <Stack flexDirection="row" justifyContent="space-between" gap={1}>
            <Button
              type="button"
              variant="contained"
              color="inherit"
              fullWidth
              sx={{ mt: 2, textTransform: "none" }}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, textTransform: "none" }}
            >
              Save
            </Button>
          </Stack>
        </form>
      </Box>
    </Drawer>
  );
};

export default ExpenseForm;
