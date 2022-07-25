import type { NextPage } from "next";

//components
import { Grid, Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Grid container sx={{ bgcolor: "primary.main" }}>
      <Typography>Գլխավոր</Typography>
    </Grid>
  );
};

export default Home;
