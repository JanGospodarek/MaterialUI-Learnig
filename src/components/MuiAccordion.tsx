import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
export function MuiAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false);
  function handleChange(isExpanded: boolean, string: string) {
    setExpanded(isExpanded ? string : false);
  }
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel1");
        }}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sed
            consequatur consequuntur tenetur voluptate aliquid nobis? Quasi
            dolor sit neque, perspiciatis odio, nobis exercitationem pariatur
            omnis architecto ad tempora officia.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel2");
        }}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sed
            consequatur consequuntur tenetur voluptate aliquid nobis? Quasi
            dolor sit neque, perspiciatis odio, nobis exercitationem pariatur
            omnis architecto ad tempora officia.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel3");
        }}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sed
            consequatur consequuntur tenetur voluptate aliquid nobis? Quasi
            dolor sit neque, perspiciatis odio, nobis exercitationem pariatur
            omnis architecto ad tempora officia.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
