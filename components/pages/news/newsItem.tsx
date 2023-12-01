import React from "react";
import { getImage } from "providers/hooks/common";
import { useRouter } from "next/router";

// Components
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";

import type { StaticImageData } from "next/image";
import Image from "next/image";

interface Props {
  image: StaticImageData | string;
  description: string;
  date: string;
  id: number;
}

export default function NewsItem({ image, description, date, id }: Props) {
  const router = useRouter();
  const smallQuery = useMediaQuery("(min-width: 400px)");

  return (
    <Grid container height={{ xs: "auto", md: "400px" }} flexDirection={{ xs: "column", md: "row" }}>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          position: "relative",
          minHeight: { xs: "300px", md: "auto" }
        }}
        onClick={() => router.push(`news/${id}`)}
      >
        <Image src={typeof image === "string" ? `url(${getImage(image)})` : image} fill alt="news-image" sizes="100%" />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          p: "3.7vh 6.7vw"
        }}
      >
        <Stack justifyContent="space-between" height="100%">
          <Typography
            variant="h3"
            sx={{
              maxWidth: "100%",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: smallQuery ? 7 : 3,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {description}
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Link href={`news/${id}`}>
                <Typography sx={{ cursor: "pointer" }}>Ավելին</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Typography>{date}</Typography>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}
