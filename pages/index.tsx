import type { NextPage } from "next";

//components
import { Grid, Stack, Typography } from "@mui/material";
import News from "components/pages/main/News";
import { MainPartsData } from "src/constant/data";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Stack px={{ xs: "7vw", sm: "10vw" }} py="100px">
      <News />
      <Typography
        variant="h1"
        sx={{
          fontFamily: "MontserratArm",
          fontWeight: 400,
          py: "9vh",
          textAlign: "center",
          color: "#000"
        }}
      >
        Հիմնական մասեր
      </Typography>
      <Grid container spacing={2.5}>
        {MainPartsData.map(({ image, title, content }, i) => (
          <Grid item xs={4}>
            <Image src={image} alt="" />
            <Typography variant="h2" fontFamily="MontserratArm" color="#000" textAlign="center">
              {title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Home;
