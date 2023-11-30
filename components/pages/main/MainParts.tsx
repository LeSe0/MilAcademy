import React from "react";
import { MainPartsData } from "src/constant/data";

// Components
import { Box, Grid, Stack, Typography } from "@mui/material";
import { ReadMoreButton } from "components/common";
import Image from "next/image";

export default function MainParts() {
  return (
    <Grid container rowSpacing={{ xs: 4, lg: 0 }} columnSpacing={{ lg: 2.5 }}>
      {MainPartsData.map(({ image, title, path }, i) => (
        <Grid item xs={12} lg={4} key={`main-parts-data_${title}-path_${path}`}>
          <Stack justifyContent="space-between" alignItems="center" rowGap={{ xs: 1.5, md: 2, lg: 2.5 }}>
            <Stack alignItems="center" rowGap={{ xs: 1, lg: 2.5 }} width="100%" mb={{ xs: "30px", lg: 0 }}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "1.5/1",
                  position: "relative"
                }}
              >
                <Image src={image} alt="" objectFit="cover" fill />
              </Box>
              <Typography variant="h2" fontFamily="MontserratArm" color="#000" textAlign="center" lineHeight={1.5}>
                {title}
              </Typography>
            </Stack>
            <Box>
              <ReadMoreButton title="Ավելին" path={path} />
            </Box>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}
