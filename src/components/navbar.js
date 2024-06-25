import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import theme from "../theme";

const pages = [" The School", "Academics", "Life @ DBTR", "Contact us"];

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#F0F0F0" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 10rem",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              // color: "black",
            }}
          >
            <img
              src="/images/logo.png"
              alt="LOGO"
              style={{
                height: "40px", // Adjust the height as needed
                width: "auto",
              }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "black", display: "block", mx: 1 }}
              >
                {page}
              </Button>
            ))}
            <Button
              color="primary"
              variant="outlined"
              sx={{
                // background: "#FFFFFF",
                my: 2,
                color: `${theme.palette.primary}`,
                display: "block",
                mx: 1,
              }}
            >
              CSR
            </Button>
            <Button
              // color="secondary"
              variant="contained"
              sx={{ my: 2, color: "white", display: "block", mx: 1 }}
            >
              Donate
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
