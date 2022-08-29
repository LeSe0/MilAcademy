import { Stack } from "@mui/material";
import Api from "api";
import NewsItem from "components/pages/news/newsItem";
import type { INewsItem } from "types/types";
import React from "react";
import { NewsData } from "src/constant/data";

interface Props {
  news: INewsItem[];
}

export default function news({ news }: Props) {
  console.log(news);

  return (
    <Stack px={{ xs: "3vw", sm: "10vw" }} spacing={7.5} my={{ xs: "50px", sm: "100px" }}>
      {NewsData.map(({ title, thumbnail, path, content }, i) => (
        <NewsItem date={title} image={thumbnail} path={path} content={content} key={`news-page_item-${title}_${i}`} />
      ))}
    </Stack>
  );
}

export async function getStaticProps() {
  const newsRsp = await Api.news.GetNews();

  console.log(newsRsp);

  return {
    props: {
      news: newsRsp?.data.items ?? []
    },
    revalidate: 60
  };
}
