import React from "react";

//components
import { Grid, Typography } from "@mui/material";
import { ContactUs, AboutUs } from "components/footer";

const Footer = () => {
  return (
    <Grid
      container
      component="footer"
      bgcolor={theme => theme.palette.primary.main}
      alignItems="center"
      justifyContent="space-between"
      px={{ xs: "5vw", lg: "8vw", xl: "9vw" }}
      flexDirection={{ xs: "column-reverse", md: "unset" }}
      py="6vh"
      sx={{
        "& p, h1, h2, h3": {
          fontFamily: "MontserratArm"
        }
      }}
    >
      <Grid item md={6} xl={5}>
        <Typography variant="h1">Հետադարձ կապ</Typography>
        <ContactUs />
      </Grid>
      <Grid item md={4} xl={5} mb={{ xs: 4, md: 0 }}>
        <AboutUs />
      </Grid>
    </Grid>
  );
};

export default Footer;
