import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack
      component="main"
      sx={{
        p: 2,
        backgroundColor: (theme) => theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <h1>Welcome to Track My Expense</h1>
      <p>Your personal expense tracking application.</p>
    </Stack>
  );
};

export default Home;
