// React
import React from "react";

// components
import { Grid, Hidden, Typography } from "@mui/material";
import Link from "next/link";
import { INavBar } from "routes";
import { useRouter } from "next/router";

interface Props {
  navbar: INavBar[];
}

export default function Navbar({ navbar }: Props) {
  const router = useRouter();

  return (
    <Hidden lgDown>
      <Grid container flex={1} justifyContent="space-between" columnGap={"3.1vw"}>
        {navbar.map(el => (
          <Grid item key={el.title}>
            <Typography variant="body1" sx={{ fontWeight: router.pathname === el.path ? "bold" : 400, fontSize: "0.8vw" }}>
              <Link href={el.path}>{el.title}</Link>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Hidden>
  );
}
