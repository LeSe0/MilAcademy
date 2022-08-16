import React from "react";

//components
import { Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

// routes
import { navbar } from "routes";

//images
import logo from "@images/logo.svg";
import { Navbar } from "components/header";

const Header = () => {
  return (
    <Grid
      component="header"
      container
      bgcolor={theme => theme.palette.primary.main}
      alignItems="center"
      px="10vw"
      py={2}
      columnGap="5.5vw"
    >
      <Link href="/">
        <Image src={logo} alt="logo icon" />
      </Link>
      <Navbar navbar={navbar} />
    </Grid>
  );
};

export default Header;
