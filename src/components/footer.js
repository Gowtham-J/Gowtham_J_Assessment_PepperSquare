import React from "react";
import { Typography, Container, Grid, Button, Box } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#EAEAEA", color: "black", p: 2, mt: 2 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <Grid container spacing={2}>
                <Grid item sm={3}>
                  <img src="/images/logo.png" />
                </Grid>
                <Grid item sm={9}>
                  <Typography variant="body1" paragraph>
                    DBTR National Higher Secondary School
                  </Typography>
                  <Typography variant="body2" paragraph color="blue">
                    Virtuousness is Life
                  </Typography>
                  <Typography variant="caption" color="gray" paragraph>
                    Established in 1901, DBTR is situated in the temple town of
                    Mayiladuthurai.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="body1">
                QUICK LINKS
                <Typography variant="body2">Admissions</Typography>
                <Typography variant="body2">Alumni association</Typography>
                <Typography variant="body2">Donate</Typography>
                <Typography variant="body2">Events</Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant="body1" paragraph>
                CONTACT
              </Typography>
              <Typography variant="body2" paragraph>
                DBTR NHSS, Mahadhana Street, Kamarajar Salai, Mayiladuthurai,
                Tamilnadu - 609001
              </Typography>
              <Typography variant="body2" paragraph>
                +91.436.422.3272
              </Typography>
              <Typography variant="body2" paragraph>
                contact@nationalhighschool.in
              </Typography>
              <Typography variant="body2" paragraph>
                Big or small, you can make an impact.
              </Typography>
              <Button variant="contained" color="primary">
                Donate
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
