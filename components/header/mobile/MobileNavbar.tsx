import React from "react";
import { useRouter } from "next/router";
import { navbar } from "routes";

// Components
import { Link, Stack, Typography } from "@mui/material";

export default function MobileNavbar() {
  const router = useRouter();

  return (
    <Stack spacing={3} justifyContent="center" width="100%" px="20px">
      {navbar.map(el => (
        <Link
          key={"burger_menu-" + el.title}
          href={el.path}
          sx={{
            backgroundColor: router.pathname === el.path ? "primary.dark" : "transparent",
            transition: "0.5s",
            "&:hover": {
              backgroundColor: "primary.dark",
              textDecoration: "none",
              transition: "0.5s"
            }
          }}
        >
          <Typography
            sx={{
              fontFamily: "MontserratArm",
              pl: "10px"
            }}
          >
            {el.title}
          </Typography>
        </Link>
      ))}
    </Stack>
  );
}
