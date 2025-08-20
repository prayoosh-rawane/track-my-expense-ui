import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/Dashboard";
import PublicLayout from "./layout/PublicLayout";
import DashboardLayout from "./layout/DashboardLayout";

const AppRoutes = () => (
  <Routes>
    <Route element={<PublicLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
    <Route element={<DashboardLayout />}>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
    {/* Add other routes here */}
  </Routes>
);

export default AppRoutes;
