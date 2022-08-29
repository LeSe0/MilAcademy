import React from "react";

// types
import { StaticImageData } from "next/image";

// Components
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import ClampLines from "react-clamp-lines";
import { useRouter } from "next/router";

interface Props {
  image: StaticImageData;
  content: string;
  date: string;
  path: string;
}

export default function NewsItem({ image, content, date, path }: Props) {
  const router = useRouter();
  const smallQuery = useMediaQuery("(min-width: 400px)")

  return (
    <Grid container height={{ xs: "auto", md: "400px" }} flexDirection={{ xs: "column", md: "row" }}>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          backgroundImage: `url(${image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: { xs: "300px", md: "auto" }
        }}
        onClick={() => router.push(path)}
      />
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          p: { xs: "10px 30px", sm: "20px 60px", md: "40px 130px" }
        }}
      >
        <Stack justifyContent="space-between" height="100%">
          <Box
            sx={{
              "& p": {
                fontSize: { xs: 14, sm: 16, xl: 20 },
                fontWeight: 400,
                lineHeight: "30px",
                color: "white"
              }
            }}
          >
            <ClampLines text={content} lines={smallQuery ? 7 : 3} ellipsis="..." buttons={false} innerElement="p" id="newsItemLineClamp" />
          </Box>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Link href={path}>
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
