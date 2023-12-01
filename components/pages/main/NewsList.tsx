import React, { useEffect, useState } from "react";
import Api from "api";

// types
import { INewsItem } from "types/types";

// Components
import { Box, Grid, Typography, Stack } from "@mui/material";
import Link from "next/link";
import { defaultNews } from "./mock-data";

export default function NewsList() {
  const [news, setNews] = useState<INewsItem[]>(defaultNews);

  return (
    <Box>
      <Grid
        container
        rowSpacing={3.8}
        px="30px"
        py="40px"
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.8)",
          height: "100%",
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
            width: "100%",
            height: "min-content",
            lineHeight: "unset",
            pb: "10px"
          }}
        >
          Լրահոս
        </Typography>
        <Stack rowGap={2} mt={2}>
          {news?.map(({ id, date, description }) => (
            <Grid item key={"Main-page_news-item_" + id}>
              <Link href={`/news/${id}`}>
                <Box sx={{ cursor: "pointer" }}>
                  <Typography variant="h3" fontWeight="700">
                    {date}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      maxWidth: "100%",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}
                  >
                    {description}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Stack>
      </Grid>
    </Box>
  );
}
