import {
  useTheme,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router";

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      //   color={theme.customPalette.colors.darkBlue}
      component="header"
      sx={{ mb: 2, backgroundColor: theme.palette.background.default }}
    >
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          component="div"
          sx={{ flexGrow: 1, gap: theme.spacing(1), cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <img
            alt="Track My Expense Logo"
            src="/header_logo.png"
            aria-label="Website logo"
            height={48}
            width={48}
          />
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontWeight: "bold",
              color: theme.customPalette.colors.darkBlue,
              fontStyle: "italic",
            }}
          >
            Track My Expense
          </Typography>
        </Box>
        <nav aria-label="Main navigation">
          <Button
            type="button"
            onClick={() => navigate("/login")}
            aria-label="Login"
          >
            Login
          </Button>
          <Button
            type="button"
            onClick={() => navigate("/signup")}
            aria-label="Signup"
          >
            Signup
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
