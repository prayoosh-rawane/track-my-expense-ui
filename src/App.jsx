import { BrowserRouter } from "react-router";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AppRoutes />
      </LocalizationProvider>
    </BrowserRouter>
  );
}

export default App;
