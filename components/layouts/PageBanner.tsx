import React, { memo } from "react";
import { useRouter } from "next/router";

import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

import back from "@images/home-back.png";
import chat from "@images/chat.svg";

import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

const pagesInfo: { [key: string]: { title?: string; bannerText: string } } = {
  "/": {
    title: "ՀՀ ՊՆ Վ. ՍԱՐԳՍՅԱՆԻ ԱՆՎԱՆ ՌԱԶՄԱԿԱՆ ՀԱՄԱԼՍԱՐԱՆ",
    bannerText: "Գիտելիքը Ձեզ, նվաճումները Հայրենիքին․․․"
  },
  "/news": {
    bannerText: "Նորություններ"
  },
  "/eductaion": {
    bannerText: "Կրթություն"
  },
  "/daily_lif": {
    bannerText: "Մեր առօրյան"
  },
  "/about_us": {
    bannerText: "Մեր մասին"
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
          backgroundImage: `url(${back.src})`,
          width: "100vw",
          overflow: "hidden",
          px: "9.896vw",
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "55.5vh"
        }}
      >
        <Typography variant="h1">{pagesInfo[router.pathname]?.title ?? ""}</Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 600,
            background: "rgba(0, 0, 0, 0.8)",
            pl: 16.25,
            pr: "9.896vw",
            py: "5vh",
            width: "max-content",
            mt: "auto"
          }}
        >
          {pagesInfo[router.pathname]?.bannerText}
        </Typography>

        <Stack alignItems="flex-end" sx={{ position: "absolute", right: 0, top: "25%", width: "max-content" }}>
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
            right: 0
          }}
        >
          <Image width="25" height="25" src={chat} />
        </Button>
      </Stack>
    </Grid>
  );
};

export default memo(PageBanner);
