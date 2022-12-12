import React from "react";
import { MainPartsData } from "src/constant/data";

// Components
import { Grid, Stack, Typography } from "@mui/material";
import { ReadMoreButton } from "components/common";
import Image from "next/image";

export default function MainParts() {
  return (
    <Grid container rowSpacing={{ xs: 4, lg: 0 }} columnSpacing={{ lg: 2.5 }}>
      {MainPartsData.map(({ image, title, content, path }, i) => (
        <Grid item xs={12} lg={4} key={`main-parts-data_${title}-path_${path}`}>
          <Stack justifyContent="space-between" alignItems="center" height={{ xs: "auto", lg: "670px" }}>
            <Stack alignItems="center" mb={{ xs: "30px", lg: 0 }}>
              <Image src={image} alt="" />
              <Typography variant="h2" fontFamily="MontserratArm" color="#000" textAlign="center">
                {title}
              </Typography>
              <Typography variant="h3" textAlign="center" color="black" dangerouslySetInnerHTML={{ __html: content }} />
            </Stack>
            <ReadMoreButton title="Ավելին" path={path} />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}
