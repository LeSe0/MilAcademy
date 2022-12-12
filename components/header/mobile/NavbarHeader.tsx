import React from "react";

// images
import logo from "@images/logo.svg";

// Components
import { Grid, IconButton, Link } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

interface Props {
  CloseDrawer(): void;
}

export default function NavbarHeader({ CloseDrawer }: Props) {
  return (
    <Grid container justifyContent="space-between" alignItems="center" px={{ xs: "10vw", sm: "30px" }}>
      <Grid item>
        <Link href="/">
          <Image src={logo} alt="logo icon" />
        </Link>
      </Grid>
      <Grid item>
        <IconButton onClick={CloseDrawer}>
          <CloseIcon
            sx={{
              fontSize: "35px",
              fill: "white"
            }}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
}
