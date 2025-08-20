import {
  Stack,
  Divider,
  Typography,
  Box,
  Tabs,
  Tab,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CategoryIcon from "@mui/icons-material/Category";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 250;

const menuTabs = [
  { label: "Home", icon: <HomeIcon />, to: "/dashboard", disabled: false },
  {
    label: "Movements",
    icon: <SwapHorizIcon />,
    to: "/dashboard/movements",
    disabled: true,
  },
  {
    label: "Reports by date",
    icon: <DateRangeIcon />,
    to: "/dashboard/reports/date",
    disabled: true,
  },
  {
    label: "Reports by category",
    icon: <CategoryIcon />,
    to: "/dashboard/reports/category",
    disabled: true,
  },
  {
    label: "Setting",
    icon: <SettingsIcon />,
    to: "/dashboard/setting",
    disabled: true,
  },
];

import { useNavigate, useLocation } from "react-router";

const Sidebar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  // Find the selected tab index based on current location
  const currentTab = menuTabs.findIndex((tab) =>
    location.pathname.startsWith(tab.to)
  );

  const handleChange = (event, newValue) => {
    navigate(menuTabs[newValue].to);
  };

  return (
    <Stack
      sx={{
        width: drawerWidth,
        borderRight: (theme) => `1px solid ${theme.palette.divider}`,
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <img
          alt="Track My Expense Logo"
          src="/header_logo.png"
          aria-label="Website logo"
          height={48}
          width={48}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{ mt: 1, mb: 2, fontStyle: "italic" }}
        >
          Track my Expense
        </Typography>
      </Box>
      <Divider role="separator" />
      <nav aria-label="Main navigation">
        <Tabs
          orientation="vertical"
          value={currentTab === -1 ? 0 : currentTab}
          onChange={handleChange}
          aria-label="Sidebar navigation tabs"
          sx={{ mt: 2 }}
        >
          {menuTabs.map((tab) => (
            <Tab
              key={tab.label}
              icon={tab.icon}
              iconPosition="start"
              label={tab.label}
              aria-label={tab.label}
              disabled={tab?.disabled}
              sx={{
                alignItems: "center",
                justifyContent: "flex-start",
                minHeight: theme.spacing(6),
                "&.Mui-selected": {
                  backgroundColor: theme.palette.action.selected,
                  color: theme.palette.primary.main,
                },
              }}
            />
          ))}
        </Tabs>
      </nav>
    </Stack>
  );
};

export default Sidebar;
