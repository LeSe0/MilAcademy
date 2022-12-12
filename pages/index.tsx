import type { NextPage } from "next";

//components
import { Stack, Typography } from "@mui/material";
import News from "components/pages/main/News";
import MainParts from "components/pages/main/MainParts";

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
      <MainParts />
    </Stack>
  );
};

export default Home;
