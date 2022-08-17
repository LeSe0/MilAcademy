import React from "react";

// Components
import { Drawer, Grid, Stack } from "@mui/material";
import MobileNavbar from "./MobileNavbar";
import NavbarHeader from "./NavbarHeader";
import { AboutUs } from "components/footer";

interface Props {
  openDrawer: boolean;
  CloseDrawer(): void;
}

export default function MobileDrawer({ openDrawer, CloseDrawer }: Props) {
  return (
    <Drawer
      open={openDrawer}
      onClose={CloseDrawer}
      anchor="right"
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: "70%", md: "50%" }
        }
      }}
    >
      <Stack
        sx={{
          backgroundColor: "primary.main",
          height: "100%",
          py: "20px"
        }}
        alignItems="flex-start"
        spacing={5}
      >
        <NavbarHeader CloseDrawer={CloseDrawer} />
        <MobileNavbar />
        <Grid container justifyContent="center" width="100%" mt={8}>
          <Grid
            item
            sx={{
              "& h1": {
                m: "0"
              }
            }}
          >
            <AboutUs />
          </Grid>
        </Grid>
      </Stack>
    </Drawer>
  );
}
