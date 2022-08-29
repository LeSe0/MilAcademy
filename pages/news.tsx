import React from "react";
import Api from "api";

// types
import type { INewsItem } from "types/types";

// components
import NewsItem from "components/pages/news/newsItem";
import { Stack } from "@mui/material";

interface Props {
  news: INewsItem[];
}

export default function news({ news }: Props) {
  return (
    <Stack px={{ xs: "3vw", sm: "10vw" }} spacing={7.5} my={{ xs: "50px", sm: "100px" }}>
      {news.map(({ date, image, description, id }) => (
        <NewsItem date={date} image={image} id={id} description={description} key={`news-page_item-${date}_${id}`} />
      ))}
    </Stack>
  );
}

export async function getStaticProps() {
  const newsRsp = await Api.news.GetNews();

  return {
    props: {
      news: newsRsp?.data.items ?? []
    },
    revalidate: 60
  };
}
