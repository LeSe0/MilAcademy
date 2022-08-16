import React from "react";

// images
import crest from "@images/crest.svg";

// Components
import Image from "next/image";
import { Grid, Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <Grid container alignItems="center" flexDirection={{ xs: "column-reverse", xl: "row" }} flexWrap="nowrap">
      <Grid item>
        <Typography variant="h1" mr={{ xs: 0, sm: "30px" }} textAlign={{ xs: "center", xl: "left" }}>
          ՀՀ Պաշտպանության
          <br />
          Նախարարություն
        </Typography>
      </Grid>
      <Grid item>
        <Image src={crest} alt="footerLogo" width={190} height={170} />
      </Grid>
    </Grid>
  );
}
