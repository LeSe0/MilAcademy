import React from "react";

// types
import { IMilEducation } from "src/constant/data";

// components
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  el: IMilEducation;
}

export default function EducationAccordion({ el }: Props) {
  return (
    <Accordion disableGutters sx={{ p: "10px" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color="black" variant="h3" fontWeight="bold">
          {el.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {el.list ? (
          el.list.map(listItem => {
            return (
              <Box>
                <Typography component="p" color="black" dangerouslySetInnerHTML={{ __html: listItem.info ?? "" }} />
                <Typography component="p" color="black" fontWeight={900}>
                  {listItem.listTitle}
                </Typography>
                <ul>
                  {listItem.listItems.map(item => (
                    <li style={{ color: "black" }}>{item}</li>
                  ))}
                </ul>
                {listItem.footer && (
                  <Typography component="div" color="black" dangerouslySetInnerHTML={{ __html: listItem.footer }} />
                )}
              </Box>
            );
          })
        ) : (
          <Typography component="div" color="black" dangerouslySetInnerHTML={{ __html: el?.content ?? "" }} />
        )}
      </AccordionDetails>
    </Accordion>
  );
}
