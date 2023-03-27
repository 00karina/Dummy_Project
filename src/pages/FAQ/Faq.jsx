import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import { Container } from "react-bootstrap";
import "../../css/Faq.css";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { IoChatbubbles } from "react-icons/io5";

export default function Faq() {
  return (
    <div>
      <Container className="wrapper_container">
        <h3 className="text-center" style={{ margin: "10vh 0vh" }}>
          Frequently Asked Questions
        </h3>
        <Accordion >
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography id="panel1a-header">
              How much bone broth should I drink per day to see benifits?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography id="panel1a">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography id="panel1a-header">
              What are the Shipping Details?(Tracking & Order Status)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography id="panel1a">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography id="panel1a-header">
              How do I cancel by subscription?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography id="panel1a">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<FaChevronDown />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography id="panel1a-header">
              How do I cancel by subscription?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography id="panel1a">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />

        <div id="faq_details">
          <div>
            {" "}
            <BsFillQuestionSquareFill className="icon" /> More Frequently Asked
            Questions
          </div>
          <div>
            {" "}
            <IoChatbubbles className="icon" /> Contact Us
          </div>
        </div>
      </Container>
      <hr />
    </div>
  );
}
