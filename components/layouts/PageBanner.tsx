import React, { memo } from "react";
import { useRouter } from "next/router";

import { Button, Grid, Stack, TextField, Typography } from "@mui/material";

import back from "@images/home-back.png";
import story from "@images/story/storyBanner.png";
import chat from "@images/chat.svg";

import SearchIcon from "@mui/icons-material/Search";
import Image, { StaticImageData } from "next/image";

const pagesInfo: { [key: string]: { title?: string; bannerText: string; backgroundImg: StaticImageData } } = {
  "/": {
    title: "ՀՀ ՊՆ Վ. ՍԱՐԳՍՅԱՆԻ ԱՆՎԱՆ ՌԱԶՄԱԿԱՆ ՀԱՄԱԼՍԱՐԱՆ",
    bannerText: "Գիտելիքը Ձեզ, նվաճումները Հայրենիքին․․․",
    backgroundImg: back
  },
  "/news": {
    bannerText: "Նորություններ",
    backgroundImg: back
  },
  "/eductaion": {
    bannerText: "Կրթություն",
    backgroundImg: back
  },
  "/daily_lif": {
    bannerText: "Մեր առօրյան",
    backgroundImg: back
  },
  "/about_us": {
    bannerText: "Մեր մասին",
    backgroundImg: back
  },
  "/story": {
    bannerText: "Պատամական ակնարկ",
    backgroundImg: story
  }
};

const PageBanner = () => {
  const router = useRouter();
  return (
    <Grid container>
      <Stack
        pt={5}
        alignContent="space-between"
        sx={{
          backgroundImage: `url(${pagesInfo[router.pathname].backgroundImg.src})`,
          width: "100%",
          overflow: "hidden",
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "55.5vh",
          px: { xs: 0, md: "9.896vw" },
          "& h1": {
            fontFamily: "MontserratArm"
          }
        }}
      >
        <Typography variant="h1" sx={{ px: { xs: "9.896vw", md: 0 }, fontSize: { xs: "20px", sm: "23px", md: "25px" } }}>
          {pagesInfo[router.pathname]?.title ?? ""}
        </Typography>
        <Grid container alignItems="flex-end" height="100%">
          <Typography
            variant="h1"
            sx={{
              fontWeight: 600,
              background: "rgba(0, 0, 0, 0.8)",
              pl: "6.7vw",
              pr: "9.896vw",
              py: "5vh",
              width: { xs: "100%", md: "max-content" },
              mt: "auto",
              fontSize: { xs: "20px", sm: "23px", md: "25px" }
            }}
          >
            {pagesInfo[router.pathname]?.bannerText}
          </Typography>
        </Grid>

        <Stack
          alignItems="flex-end"
          sx={{
            position: "absolute",
            right: 0,
            top: "25%",
            width: "max-content",
            display: router.pathname === "/" ? "flex" : "none"
          }}
        >
          <TextField
            variant="standard"
            sx={{ background: "rgba(0, 0, 0, 0.9)", p: 1 }}
            InputProps={{
              startAdornment: <SearchIcon />,
              disableUnderline: true,
              sx: { width: 30, transition: "1s", "&:hover": { width: "200px" } }
            }}
            inputProps={{ onMouseLeave: e => e.currentTarget.blur() }}
          />
          <Grid
            container
            sx={{
              background: "rgba(0, 0, 0, 0.9)",
              columnGap: "25px",
              flexWrap: "nowrap",
              px: 2,
              width: 46,
              transition: "1s",
              "&:hover": { width: "200px" }
            }}
          >
            <Typography>HY</Typography>
            <Typography>EN</Typography>
            <Typography>RU</Typography>
          </Grid>
        </Stack>
        <Button
          sx={{
            background: "rgba(0, 0, 0, 0.8)",
            width: "max-content",
            p: 2,
            borderRadius: 0,
            position: "absolute",
            bottom: "20px",
            right: 0,
            display: router.pathname === "/" ? "block" : "none"
          }}
        >
          <Image width="25" height="25" alt="" src={chat} />
        </Button>
      </Stack>
    </Grid>
  );
};

export default memo(PageBanner);
