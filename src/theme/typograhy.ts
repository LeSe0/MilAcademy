import { Theme } from "@mui/material";
import { Typography } from "@mui/material/styles/createTypography";

export default function initTypography(theme: Theme): Typography {
  return {
    ...theme.typography,
    h1: {
      ...theme.typography.h1,
      fontSize: 30,
      fontWeight: 600,
      color: theme.palette.text.primary,
      lineHeight: "45px",
      [theme.breakpoints.down("xl")]: {
        fontSize: 26
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 24
      }
    },
    h2: {
      ...theme.typography.h2,
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 4.5,
      color: theme.palette.text.primary,
      [theme.breakpoints.down("xl")]: {
        fontSize: 20
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 18
      }
    },
    h3: {
      ...theme.typography.h3,
      fontSize: 20,
      fontWeight: 400,
      lineHeight: "30px",
      color: theme.palette.text.primary,
      [theme.breakpoints.down("xl")]: {
        fontSize: 16
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 14
      }
    },
    body1: {
      ...theme.typography.body1,
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 3,
      color: theme.palette.text.primary,
      [theme.breakpoints.down("sm")]: {
        fontSize: 14
      }
    }
  };
}
