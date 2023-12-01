import React from "react";

// types
import { IMilEducation } from "src/constant/data";

// components
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, useMediaQuery } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  el: IMilEducation;
}

export default function EducationAccordion({ el }: Props) {
  const isSmallScreen = useMediaQuery("(max-width: 450px)");

  return (
    <Accordion disableGutters sx={{ p: "10px", backgroundColor: "rgba(0, 0, 0, 0.80)" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}>
        <Typography color="white" variant="h3" fontWeight="bold">
          {el.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {el.list ? (
          el.list.map((listItem, i) => {
            const isOrderedList = listItem.listType === "ordered";
            return (
              <Box key={`education-accordion-list-${listItem.listItems.length}-index_${i}`}>
                <Typography
                  component="p"
                  color="white"
                  lineHeight={2}
                  dangerouslySetInnerHTML={{ __html: listItem.info ?? "" }}
                />
                {listItem.listTitle && (
                  <Typography component="p" color="white" fontWeight={900}>
                    {listItem.listTitle}
                  </Typography>
                )}
                {isOrderedList ? (
                  <ol style={{ paddingLeft: isSmallScreen ? "10px" : undefined }}>
                    {listItem.listItems.map((item, index) => (
                      <li style={{ color: "white", fontSize: "18px" }} key={`list-item-li_${item}-index_${index}`}>
                        {item}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul style={{ paddingLeft: isSmallScreen ? "10px" : undefined }}>
                    {listItem.listItems.map((item, index) => (
                      <li style={{ color: "white", fontSize: "18px" }} key={`list-item-li_${item}-index_${index}`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {listItem.footer && (
                  <Typography
                    component="div"
                    color="white"
                    lineHeight={2}
                    dangerouslySetInnerHTML={{ __html: listItem.footer }}
                  />
                )}
              </Box>
            );
          })
        ) : (
          <Typography component="div" color="white" lineHeight={2} dangerouslySetInnerHTML={{ __html: el?.content ?? "" }} />
        )}
      </AccordionDetails>
    </Accordion>
  );
}
