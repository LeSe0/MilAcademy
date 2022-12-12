import React, { memo } from "react";

import { Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import PageBanner from "./PageBanner";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack>
      <Header />
      <Stack>
        <PageBanner />
        {children}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default memo(MainLayout);
