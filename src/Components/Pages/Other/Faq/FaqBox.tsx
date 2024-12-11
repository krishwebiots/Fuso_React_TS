import { FC, useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import { PropsType } from "../../../../Types/HomeDemo";
import { AccordionData } from "../../../../Data/Pages/Other";

const FaqBox: FC<PropsType> = ({ type }) => {
  const [open, setOpen] = useState<string>("1");

  const toggle = (id: string) => setOpen((prevOpen) => (prevOpen === id ? "" : id));

  const filteredData = AccordionData.find((data) => data.type === type)?.accordion || [];

  return (
    <div className="faq-box">
      <Accordion open={open} toggle={toggle}>
        {filteredData.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionHeader targetId={item.id.toString()}>{item.title}</AccordionHeader>
            <AccordionBody accordionId={item.id.toString()}>
              <p>{item.content}</p>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqBox;
