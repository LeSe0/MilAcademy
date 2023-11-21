import React from "react";

// images
import phone from "@images/phone.svg";
import facebook from "@images/facebook.svg";
import email from "@images/email.svg";
import geo from "@images/geo.svg";
import address from "@images/address.svg";

// Components
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const footer_items = [
  {
    icon: phone,
    text: `+374 (10) - 66 - 22 - 02`
  },
  {
    icon: facebook,
    text: `ՀՀ ՊՆ Վ.Սարգսյանի անվան ռազմական ակադեմիա`
  },
  {
    icon: email,
    text: `mu.vs@mil.am`
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
      {footer_items.map((el, i) => (
        <Grid item xs={12} key={el.text + i}>
          <Grid container alignItems="center" columnGap={{ xs: 2, sm: 4 }}>
            <Grid item xs={1}>
              <Image width={30} height={30} src={el.icon} alt="contactIcons" />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h3">{el.text}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
