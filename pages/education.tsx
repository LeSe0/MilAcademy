/* eslint-disable react-hooks/rules-of-hooks */
import React, { SyntheticEvent, useCallback, useState } from "react";
import { milEducation, education as educationData, applicant } from "src/constant/data";

// Components
import { TabPanel, TabList, TabContext } from "@mui/lab";
import { Stack, Typography, Tab } from "@mui/material";
import EducationAccordion from "components/pages/education/EducationAccordion";
import TabListStyled from "components/common/TabListStyled";

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
      className="list-container"
      sx={{
        px: "10vw",
        alignItems: "center",
        pt: "60px"
      }}
    >
      <TabContext value={activeTab}>
        <TabListStyled handleChange={handleChange} tabs={["Ռազմական կրթություն", "Կրթական ծրագրեր", "Դիմորդ"]} />
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
          {milEducation.map((el, i) => (
            <EducationAccordion el={el} key={`mil-info-accordion-item_${el.title}-index_${i}`} />
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
          {educationData.map((el, i) => (
            <EducationAccordion el={el} key={`mil-accordion-item_${el.title}-index_${i}-education`} />
          ))}
        </TabPanel>
        <TabPanel
          value="3"
          sx={{
            width: "100%",
            px: "0",
            "& .MuiAccordion-root:not(:first-child)": {
              mt: "20px"
            }
          }}
        >
          {applicant.map((el, i) => (
            <EducationAccordion el={el} key={`mil-accordion-item_${el.title}-index_${i}-applicant`} />
          ))}
        </TabPanel>
      </TabContext>
    </Stack>
  );
}
