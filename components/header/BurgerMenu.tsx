import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
type Props = {};

export default function BurgerMenu({}: Props) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box>
      <IconButton>
        <MenuIcon />
      </IconButton>
    </Box>
  );
}
