import React, { SyntheticEvent, useCallback, useState } from "react";
import { milEducation, education as educationData } from "src/constant/data";

// Components
import { TabPanel, TabList, TabContext } from "@mui/lab";
import { Stack, Typography, Tab } from "@mui/material";
import EducationAccordion from "components/pages/education/EducationAccordion";
import { faq } from "src/constant/about_us_data";

export default function about_us() {
  const [activeTab, setActiveTab] = useState("1");

  const handleChange = useCallback(
    (e: SyntheticEvent<Element, Event>, id: string) => {
      setActiveTab(id);
    },
    [setActiveTab]
  );

  return (
    <Stack
      sx={{
        px: "10vw",
        alignItems: "center",
        pt: "60px"
      }}
    >
      <TabContext value={activeTab}>
        <TabList
          onChange={handleChange}
          sx={{
            width: "100%",
            "& .MuiTabs-flexContainer": {
              justifyContent: "center"
            },
            "& .MuiTab-root": {
              width: `calc(100%/3)`,
              px: "0",
              py: "24px"
            },
            "& .MuiTab-root:first-of-type, .MuiTab-root:last-of-type": {
              borderLeft: "2px solid",
              borderRight: "2px solid"
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
          {["Հաճախ տրվող հարցեր", " Ընդհանուր ինֆորմացիա", "Պատմական ակնարկ"].map((el, i) => (
            <Tab
              key={`education-tab_${i + 1}`}
              label={
                <Typography key={`education-tab_${i}`} variant="h3" color="black">
                  {el}
                </Typography>
              }
              value={`${i + 1}`}
            />
          ))}
        </TabList>
        <TabPanel
          value="1"
          sx={{
            width: "100%",
            px: "0",
            "& .MuiAccordion-root:not(:first-child)": {
              mt: "20px"
            }
          }}
        >
          {faq.map(el => (
            <EducationAccordion el={el} />
          ))}
        </TabPanel>
        <TabPanel
          value="2"
          sx={{
            width: "100%",
            px: "0",
            "& .MuiAccordion-root:not(:first-child)": {
              mt: "20px"
            }
          }}
        >
          {educationData.map(el => (
            <EducationAccordion el={el} />
          ))}
        </TabPanel>
        <TabPanel
          value="3"
          sx={{
            width: "100%",
            px: "0"
          }}
        ></TabPanel>
      </TabContext>
    </Stack>
  );
}
