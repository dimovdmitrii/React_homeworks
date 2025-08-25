import "./App.css";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Typography,
  Button as MuiButton,
} from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
  },
});

const StyledButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: 20,
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const handleThemeToggle = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  const currentTheme = themeMode === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          {themeMode === "light" ? "Light theme" : "Dark Theme"}
        </Typography>
        <StyledButton onClick={handleThemeToggle}>Change Theme</StyledButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
