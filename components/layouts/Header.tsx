import React from "react";

//components
import { Grid, Hidden } from "@mui/material";
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
      py={2}
      columnGap="5.5vw"
      justifyContent={{ xs: "space-between", lg: "unset" }}
    >
      <Link href="/">
        <Image src={logo} alt="logo icon" />
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
