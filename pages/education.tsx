import React, { SyntheticEvent, useCallback, useState } from "react";

// Components
import { TabPanel, TabList, TabContext } from "@mui/lab";
import { Stack, Typography, Tab, Tabs, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { milEducation } from "src/constant/data";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function education() {
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
          {["Ռազմական կրթություն", "Համալսարանական կրթություն", "Դիմորդ"].map((el, i) => (
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
          {milEducation.map(el => (
            <Accordion disableGutters sx={{ p: "10px" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color="black" variant="h3" fontWeight="bold">
                  {el.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div" color="black" dangerouslySetInnerHTML={{ __html: el.content }}></Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </TabPanel>
        <TabPanel
          value="2"
          sx={{
            width: "100%",
            px: "0"
          }}
        ></TabPanel>
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
