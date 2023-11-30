import React from "react";

//components
import { Grid, Box, Hidden } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

// routes
import { navbar } from "routes";

//images
import logo from "@images/logo.svg";
import { Navbar, BurgerMenu } from "components/header";

const Header = () => {
  return (
    <Grid
      component="header"
      container
      bgcolor="primary.main"
      alignItems="center"
      px={{ xs: "10vw", lg: "9vw", xl: "10vw" }}
      columnGap="5.5vw"
      justifyContent={{ xs: "space-between", lg: "unset" }}
    >
      <Link href="/">
        <Box
          sx={{
            width: "100px",
            aspectRatio: "1/1",
            position: "relative"
          }}
        >
          <Image src={logo} alt="logo icon" fill objectFit="cover" />
        </Box>
      </Link>
      <Hidden lgUp>
        <BurgerMenu />
      </Hidden>
      <Hidden lgDown>
        <Navbar navbar={navbar} />
      </Hidden>
    </Grid>
  );
};

export default Header;
