import React from "react";
import { useRouter } from "next/router";

// images
import AboutNewsImage from "public/images/AboutNews.png";

// Components
import { Box, Grid, Hidden, Typography } from "@mui/material";
import { AboutNewsData } from "src/constant/data";
import Image from "next/image";

export default function AboutNews() {
  const router = useRouter();

  return (
    <Grid container>
      <Grid item width="100%">
        <Grid
          container
          sx={{
            backgroundImage: `url(${AboutNewsImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "500px",
            cursor: "pointer"
          }}
          alignItems="flex-end"
          onClick={() => router.push("/story")}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              background: "rgba(0, 0, 0, 0.8)",
              width: "100%",
              fontFamily: "MontserratArm",
              py: "30px",
              textAlign: "center"
            }}
          >
            Պատմական ակնարկ
          </Typography>
        </Grid>
      </Grid>
      <Hidden lgDown>
        <Grid item width="100%" mt={7.5}>
          <Grid container rowSpacing={2.5}>
            {AboutNewsData.map(({ image1, image2 }, i) => (
              <Grid item width="100%" key={`main_page-info-item_${i}`}>
                <Grid
                  container
                  key={"AboutNewsData_" + i}
                  columnSpacing={2.5}
                  flexDirection={i % 2 === 0 ? "row" : "row-reverse"}
                >
                  <Grid item xs={5}>
                    <Box position="relative" height="230px">
                      <Image src={image1} alt="" layout="fill" />
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                    <Box position="relative" height="230px">
                      <Image src={image2} alt="" layout="fill" />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
}
