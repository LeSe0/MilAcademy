import { Stack } from "@mui/material";
import React, { memo } from "react";
import Header from "./Header";

const MainLayout = () => {
  return (
    <Stack>
      <Header />
    </Stack>
  );
};

export default memo(MainLayout);
