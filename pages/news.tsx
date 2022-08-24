import { Stack } from "@mui/material";
import NewsItem from "components/pages/news/newsItem";
import React from "react";
import { NewsData } from "src/constant/data";

type Props = {};

export default function news({}: Props) {
  return (
    <Stack px={{ xs: "3vw", sm: "10vw" }} spacing={7.5} my={{ xs: "50px", sm: "100px" }}>
      {NewsData.map(({ title, thumbnail, path, content }, i) => (
        <NewsItem date={title} image={thumbnail} path={path} content={content} key={`news-page_item-${title}_${i}`} />
      ))}
    </Stack>
  );
}
