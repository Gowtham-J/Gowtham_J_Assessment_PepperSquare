import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Footer from "./components/footer";
import theme from "./theme";
import ResponsiveAppBar from "./components/navbar";
import Header from "./components/header";
import Main from "./components/main";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <ResponsiveAppBar />
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
