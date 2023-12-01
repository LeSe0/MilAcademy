/* eslint-disable react-hooks/rules-of-hooks */
import React, { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { government } from "src/constant/data";
import { tabs } from "components/pages/about/mock-data";
import { faq } from "src/constant/about_us_data";

// Components
import { TabPanel, TabContext } from "@mui/lab";
import { Stack } from "@mui/material";
import EducationAccordion from "components/pages/education/EducationAccordion";
import TabListStyled from "components/common/TabListStyled";
import StoryPage from "components/pages/about/story";

export default function about_us() {
  const { query } = useRouter();
  const part = query.part;

  const [activeTab, setActiveTab] = useState("1");

  useEffect(() => {
    if (part) {
      setActiveTab(tabs.find(({ name }) => name === part)?.id || "1");
    }
  }, [part]);

  const handleChange = useCallback(
    (id: string) => {
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
        <TabListStyled
          handleChange={(_, id) => handleChange(id)}
          tabs={["Հաճախ տրվող հարցեր", "Կառուցվածք", "Պատմական ակնարկ"]}
        />
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
          {faq.map((el, i) => (
            <EducationAccordion el={el} key={`accordion-item_${el.title}-index_${i}`} />
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
          {government.map((el, i) => (
            <EducationAccordion el={el} key={`accordion-item-education_${el.title}-index_${i}`} />
          ))}
        </TabPanel>
        <TabPanel
          value="3"
          sx={{
            width: "100%",
            px: "0"
          }}
        >
          <StoryPage />
        </TabPanel>
      </TabContext>
    </Stack>
  );
}
