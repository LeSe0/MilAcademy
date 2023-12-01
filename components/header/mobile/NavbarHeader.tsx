import React from "react";

// images
import logo from "@images/logo.svg";

// Components
import { Box, Grid, IconButton, Link } from "@mui/material";
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
          <Box
            sx={{
              width: "110px",
              aspectRatio: "1/1",
              position: "relative"
            }}
          >
            <Image src={logo} alt="logo icon" fill objectFit="cover" />
          </Box>
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
