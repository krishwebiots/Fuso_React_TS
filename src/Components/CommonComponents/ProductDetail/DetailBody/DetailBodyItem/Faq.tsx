import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import { CarFAQTitle } from "../../../../../Constants/Constants";
import { FaqItemsData } from "../../../../../Data/Car";

const Faq = () => {
  const [openItems, setOpenItems] = useState("1");

  const toggle = (id: string) => {
    if (openItems === id) setOpenItems("");
    else setOpenItems(id);
  };

  return (
    <div className="detail-box" id="faq">
      <h3 className="car-title">{CarFAQTitle}</h3>
      <div className="faq-box">
        <Accordion open={openItems} toggle={toggle}>
          {FaqItemsData.map(({ id, question, answer }, index) => (
            <AccordionItem key={index}>
              <AccordionHeader targetId={id}>{question}</AccordionHeader>
              <AccordionBody accordionId={id}>
                <p>{answer}</p>
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
