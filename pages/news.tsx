import React from "react";
import Api from "api";

// types
import type { INewsItem } from "types/types";

// components
import NewsItem from "components/pages/news/newsItem";
import { Stack } from "@mui/material";

import { defaultNews } from "components/pages/main/mock-data";

export default function news() {
  return (
    <Stack px={{ xs: "3vw", sm: "10vw" }} spacing={7.5} my={{ xs: "50px", sm: "100px" }}>
      {defaultNews?.map(({ date, image, description, id }) => (
        <NewsItem date={date} image={image} id={id} description={description} key={`news-page_item-${date}_${id}`} />
      ))}
    </Stack>
  );
}
