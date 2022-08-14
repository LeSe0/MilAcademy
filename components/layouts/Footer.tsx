import React from "react";

//components
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

// images
import phone from "@images/phone.svg";
import facebook from "@images/facebook.svg";
import email from "@images/email.svg";
import geo from "@images/geo.svg";
import address from "@images/address.svg";
import crest from "@images/crest.svg";

const footer_items = [
  {
    icon: phone,
    text: `+374 (10) - 66 - 22 - 02`
  },
  {
    icon: facebook,
    text: `ՀՀ ՊՆ Վ.Սարգսյանի անվան ռազմական համալսարան`
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

const Footer = () => {
  return (
    <Grid
      component="footer"
      container
      bgcolor={theme => theme.palette.primary.main}
      alignItems="center"
      justifyContent="space-between"
      px="9.896vw"
      py="5.7vh"
      columnGap={13.125}
    >
      <Box>
        <Typography variant="h1">Հետադարձ կապ</Typography>
        <Box pt="4.16vh">
          {footer_items.map((el, i) => (
            <Box sx={{ display: "flex" }} pt={i ? "3.24vh" : 0}>
              <Image width={30} height={30} src={el.icon} />
              <Typography pl={45 / 8} variant="h3">
                {el.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Grid display="flex" alignItems="center">
        <Typography variant="h1" mr="30px">
          ՀՀ Պաշտպանության
          <br />
          Նախարարություն
        </Typography>

        <Image src={crest} />
      </Grid>
    </Grid>
  );
};

export default Footer;
