import React, { useState } from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";

const Dashboard = () => {
  const [openIncome, setOpenIncome] = useState(false);
  const [openExpense, setOpenExpense] = useState(false);

  const handleIncomeSubmit = (data) => {
    // TODO: handle income form submission
    console.log("here::", data);
    setOpenIncome(false);
  };

  const handleExpenseSubmit = (data) => {
    // TODO: handle expense form submission
    console.log("here::", data);
    setOpenExpense(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>
        Dashboard
      </Typography>
      <Stack direction="row" spacing={4} mb={4}>
        <Box textAlign="center">
          <Button
            onClick={() => setOpenIncome(true)}
            sx={{
              background: "green",
              color: "#fff",
              borderRadius: 2,
              minWidth: 90,
              minHeight: 90,
              flexDirection: "column",
              boxShadow: 3,
              "&:hover": {
                opacity: 0.8,
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AddCircleIcon sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Income
            </Typography>
          </Button>
        </Box>
        <Box textAlign="center">
          <Button
            onClick={() => setOpenExpense(true)}
            sx={{
              background: "#cb2d3e",
              color: "#fff",
              borderRadius: 2,
              minWidth: 90,
              minHeight: 90,
              flexDirection: "column",
              boxShadow: 3,
              "&:hover": {
                opacity: 0.8,
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RemoveCircleIcon sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Expense
            </Typography>
          </Button>
        </Box>
      </Stack>
      <IncomeForm
        open={openIncome}
        onClose={() => setOpenIncome(false)}
        onSubmit={handleIncomeSubmit}
      />
      <ExpenseForm
        open={openExpense}
        onClose={() => setOpenExpense(false)}
        onSubmit={handleExpenseSubmit}
      />
    </Box>
  );
};

export default Dashboard;
