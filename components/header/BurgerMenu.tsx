import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";

// Components
import { Box, IconButton } from "@mui/material";
import MobileDrawer from "./mobile/MobileDrawer";
import MenuIcon from "@mui/icons-material/Menu";

export default function BurgerMenu() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const OpenDrawer = useCallback(() => {
    setOpenDrawer(true);
  }, [setOpenDrawer]);

  const CloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, [setOpenDrawer]);

  return (
    <Box>
      <IconButton onClick={OpenDrawer}>
        <MenuIcon
          sx={{
            fontSize: "35px",
            fill: "white"
          }}
        />
      </IconButton>
      <MobileDrawer openDrawer={openDrawer} CloseDrawer={CloseDrawer} />
    </Box>
  );
}
