import React from "react";
import { NewsData } from "src/constant/data";

// Components
import { Grid, Typography } from "@mui/material";

export default function NewsList() {
  return (
    <Grid
      container
      rowSpacing={3.8}
      px="30px"
      py="10px"
      sx={{
        bgcolor: "rgba(0, 0, 0, 0.8)",
        height: { xs: "500px", sm: "800px", lg: "1040px" },
        overflowY: "auto",
        overflowX: "hidden",
        mt: "0",
        "& h3, h2": {
          fontFamily: "MontserratArm"
        },
        "&::-webkit-scrollbar-track": {
          background: "#818181"
        },
        "&::-webkit-scrollbar": {
          width: "10px"
        },
        "&::-webkit-scrollbar-thumb": {
          bgcolor: "#C4C4C4",
          borderRadius: "10px"
        }
      }}
    >
      <Typography
        variant="h2"
        sx={{
          borderBottom: "2px solid white",
          width: "100%"
        }}
      >
        Լրահոս
      </Typography>
      {NewsData.map((el, i) => (
        <Grid item key={"Main-page_news-item_" + i}>
          <Typography variant="h3" fontWeight="700">
            {el.title}
          </Typography>
          <Typography variant="h3">{el.content}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
