import React from "react";

// images
import phone from "@images/phone.svg";
import facebook from "@images/facebook.svg";
import email from "@images/email.svg";
import geo from "@images/geo.svg";
import address from "@images/address.svg";
import instagram from "@images/instagram.svg";

// Components
import { Grid, Typography, Link } from "@mui/material";
import Image from "next/image";

const phoneInfo = [
  {
    text: `+374 (10) - 66 - 22 - 02`,
    href: "tel:+37410662202"
  },
  {
    text: `+374 (010) - 66 - 18 - 09`,
    href: "tel:+37410661800"
  }
];

const footer_items = [
  {
    icon: facebook,
    text: `ՀՀ ՊՆ Վ.Սարգսյանի անվան ռազմական ակադեմիա`,
    href: "https://www.facebook.com/vsargsyanma"
  },
  {
    icon: instagram,
    text: "ՀՀ ՊՆ Վ.Սարգսյանի անվան ռազմական ակադեմիա",
    href: "https://www.instagram.com/vsargsyan_ma/"
  },
  {
    icon: email,
    text: `mu.vs@mil.am`,
    href: "mailto:mu.vs@mil.am"
  },
  {
    icon: geo,
    text: `Նոր նորքի 6րդ զանգված,  Դավիթ Բեկի 155`
  },
  {
    icon: address,
    text: `0090`
  }
];

export default function ContactUs() {
  return (
    <Grid container rowSpacing={{ xs: 3, sm: 5 }} py="4vh">
      <Grid item xs={12}>
        <Grid container alignItems="center" columnGap={{ xs: 2, sm: 4 }}>
          <Grid item xs={1}>
            <Image width={30} height={30} src={phone} alt="contactIcons" />
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Link href={phoneInfo[0].href}>
                <Typography variant="h3">
                  {phoneInfo[0].text}
                  &nbsp;,&nbsp;
                </Typography>
              </Link>
              <Link href={phoneInfo[1].href}>
                <Typography variant="h3">{phoneInfo[1].text}</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {footer_items.map((el, i) => (
        <Grid item xs={12} key={el.text + i}>
          <Link href={el.href}>
            <Grid container alignItems="center" columnGap={{ xs: 2, sm: 4 }}>
              <Grid item xs={1}>
                <Image width={30} height={30} src={el.icon} alt="contactIcons" />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h3">{el.text}</Typography>
              </Grid>
            </Grid>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
