import React, { SyntheticEvent } from "react";
import { TabList } from "@mui/lab";
import { Tab, Typography } from "@mui/material";

interface Props {
  handleChange(e: SyntheticEvent<Element, Event>, id: string): void;
  tabs: string[];
}

export default function TabListStyled({ handleChange, tabs }: Props) {
  return (
    <TabList
      onChange={handleChange}
      sx={{
        width: "100%",
        "& .MuiTabs-flexContainer": {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          rowGap: { xs: "10px", sm: "none" }
        },
        "& .MuiTab-root": {
          width: { xs: "100%", sm: "calc(100%/3)" },
          px: "2px",
          py: "24px",
          borderInline: { xs: "2px solid", sm: "none" }
        },
        "& .MuiTab-root:first-of-type, .MuiTab-root:last-of-type": {
          borderLeft: { sm: "2px solid" },
          borderRight: { sm: "2px solid" }
        },
        "& .Mui-selected": {
          color: "black !important",
          background: "#F3F3F3",
          borderBottom: "none"
        }
      }}
      TabIndicatorProps={{
        sx: {
          display: "none"
        }
      }}
    >
      {tabs.map((el, i) => (
        <Tab
          key={`education-tab_${i + 1}`}
          value={`${i + 1}`}
          label={
            <Typography key={`education-tab_${i}`} variant="h3" color="black">
              {el}
            </Typography>
          }
        />
      ))}
    </TabList>
  );
}
