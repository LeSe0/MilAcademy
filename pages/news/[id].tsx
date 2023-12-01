import { Stack, Typography } from "@mui/material";
import Api from "api";
import { defaultNews } from "components/pages/main/mock-data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { INewsById } from "types/types";

export default function NewsItem() {
  const router = useRouter();
  // const [queryBanner, setQueryBanner] = useState<INewsById>();

  // useEffect(() => {
  //   if (router.query.id) {
  //     Api.news.GetNewsByID(router.query.id).then(rsp => setQueryBanner(rsp.data));
  //   }
  // }, [router]);

  return (
    <Stack p="9vw 10vw">
      <Typography variant="h3" color="black">
        {defaultNews.find(el => el.id === +(router.query?.id || "1"))?.description}
      </Typography>
    </Stack>
  );
}
