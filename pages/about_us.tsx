import React, { SyntheticEvent, useCallback, useState } from "react";
import { education as educationData } from "src/constant/data";

// Components
import { TabPanel, TabContext } from "@mui/lab";
import { Stack } from "@mui/material";
import EducationAccordion from "components/pages/education/EducationAccordion";
import { faq } from "src/constant/about_us_data";
import TabListStyled from "components/common/TabListStyled";

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
        <TabListStyled handleChange={handleChange} tabs={["Հաճախ տրվող հարցեր", "Ընդհանուր ինֆորմացիա", "Պատմական ակնարկ"]} />
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
