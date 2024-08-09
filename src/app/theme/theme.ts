import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Custom primary color
    },
    secondary: {
      main: "#dc004e", // Custom secondary color
    },
    background: {
      default: "#f5f5f5", // Custom background color
    },
  },

  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h6: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "64px",
    },
    h3: {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "40px",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "21px",
      color: "#646464",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1976d2", // Custom AppBar color
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase transformation
        },
      },
    },
  },
});
