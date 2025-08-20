import { Stack } from "@mui/material";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <Stack flexDirection="row" height="100%">
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
