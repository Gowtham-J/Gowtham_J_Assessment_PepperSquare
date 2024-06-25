import React from "react";
import { Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <div>
      {" "}
      <Box
        sx={{
          background: `url('/images/bg.png') 50% / cover no-repeat`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "119px 0",
            color: "white",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ color: "white" }}
          >
            Our events gallery
          </Typography>
          <Typography
            variant="h6"
            align="center"
            paragraph
            sx={{ color: "white", margin: "0 10rem" }}
          >
            Events at DBTR are filled with joyous occasions, cultural
            gatherings, and learning opportunities that bring us all together.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
