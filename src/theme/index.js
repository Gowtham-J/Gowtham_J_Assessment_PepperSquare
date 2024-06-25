import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F54E39",
    },
    secondary: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    allVariants: {
      color: "#000000",
    },
  },
});

export default theme;
