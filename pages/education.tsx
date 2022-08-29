import { Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { SyntheticEvent, useCallback, useState } from "react";

type Props = {};

export default function education({}: Props) {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = useCallback(
    (e: SyntheticEvent<Element, Event>, id: number) => {
      setActiveTab(id);
    },
    [setActiveTab]
  );

  return (
    <Stack>
      <Stack px="190px">
        <Tabs value={activeTab} onChange={handleChange}>
          {["Ռազմական կրթություն", "Համալսարանական կրթություն", "Դիմորդ"].map((el, i) => (
            <Tab
              key={`education-tab_${i}`}
              label={
                <Typography key={`education-tab_${i}`} variant="h3" color="black">
                  {el}
                </Typography>
              }
            />
          ))}
        </Tabs>
        {/* <TabPanel></TabPanel> */}
      </Stack>
    </Stack>
  );
}
