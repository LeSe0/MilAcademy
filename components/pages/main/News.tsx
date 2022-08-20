import React from "react";

// Components
import { Grid } from "@mui/material";
import NewsList from "./NewsList";
import AboutNews from "./AboutNews";

export default function News() {
  return (
    <Grid container columnSpacing={2.5} rowSpacing={{ xs: 3.5, lg: 0 }}>
      <Grid item xs={12} lg={7}>
        <AboutNews />
      </Grid>
      <Grid item xs={12} lg={5}>
        <NewsList />
      </Grid>
    </Grid>
  );
}
