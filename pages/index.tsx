import type { NextPage } from "next";

//components
import { Grid, Stack, Typography } from "@mui/material";
import News from "components/pages/main/News";
import { MainPartsData } from "src/constant/data";
import Image from "next/image";
import { ReadMoreButton } from "components/common";

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
      <Grid container spacing={{ xs: 4, lg: 2.5 }}>
        {MainPartsData.map(({ image, title, content, path }, i) => (
          <Grid item xs={12} lg={4} key={`main-parts-data_${title}-path_${path}`}>
            <Stack justifyContent="space-between" alignItems="center" height="670px">
              <Stack alignItems="center">
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
    </Stack>
  );
};

export default Home;
