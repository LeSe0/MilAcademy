import React from "react";

//components
import { Grid, Typography } from "@mui/material";

//images
import logo from "@images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navbar: { title: string; path: string }[] = [
  {
    title: `Գլխավոր`,
    path: "/"
  },
  {
    title: `Նորություններ`,
    path: "/news"
  },
  {
    title: `Կրթություն`,
    path: "/education"
  },
  {
    title: `Մեր առօրյան`,
    path: "/daily_life"
  },
  {
    title: `Մեր մասին`,
    path: "/about_us"
  }
];

const Header = () => {
  const router = useRouter();

  return (
    <Grid
      component="header"
      container
      bgcolor={theme => theme.palette.primary.main}
      alignItems="center"
      px="9.896vw"
      py={2}
      columnGap={13.125}
    >
      <Link href="/">
        <Image src={logo} alt="logo icon" />
      </Link>
      <Grid container flex={1} justifyContent="space-between">
        {navbar.map(el => (
          <Typography key={el.title} variant="body1" sx={{ fontWeight: router.pathname === el.path ? "bold" : 400 }}>
            <Link href={el.path}>{el.title}</Link>
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default Header;
