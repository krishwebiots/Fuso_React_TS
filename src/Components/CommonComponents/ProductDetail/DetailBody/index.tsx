import { FC, useState } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { Fragment } from "react/jsx-runtime";
import { AccordionBody, AccordionHeader, AccordionItem, Container, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledAccordion } from "reactstrap";
import { Sections } from "../../../../Data/Property";
import { PropertyDetailType } from "../../../../Types/ProductType";
import UseStickyBar from "../../../../Utils/UseStickyBar";
import Description from "./DetailBodyItem/Description";
import Faq from "./DetailBodyItem/Faq";
import Feature from "./DetailBodyItem/Feature";
import Overview from "./DetailBodyItem/Overview";
import Reviews from "./DetailBodyItem/Reviews";
import ScheduleTour from "./DetailBodyItem/ScheduleTour";

const DetailBody: FC<PropertyDetailType> = ({ type }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openItems, setOpenItems] = useState<string[]>(["overview", "amenities"]);
  const fix = UseStickyBar(300);

  const toggleAccordion = (id: string) => setOpenItems((items) => (items.includes(id) ? items.filter((item) => item !== id) : [...items, id]));

  return (
    <Fragment>
      {type === "scrollspy" ? (
        <Fragment>
          <div className={`sticky-header ${fix ? "sticky" : ""}`}>
            <Container>
              <Nav tabs>
                {Sections.slice(0, 6).map(({ id, label }) => (
                  <NavItem key={id}>
                    <NavLink data-to-scrollspy-id={id} href={`#${id}`}>
                      {label}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </Container>
          </div>
          <ScrollSpy activeClass="active" updateHistoryStack={false} scrollThrottle={100}>
            {Sections.map(({ labelComponent }, index) => (
              <Fragment key={index}>{labelComponent}</Fragment>
            ))}
          </ScrollSpy>
        </Fragment>
      ) : type === "tabs" ? (
        <Fragment>
          <Nav tabs>
            {Sections.slice(0, 6).map(({ id, label }) => (
              <NavItem key={id} onClick={() => setActiveTab(id)}>
                <NavLink tag="button" className={id === activeTab ? "active" : ""} href={`#${id}`}>
                  {label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={activeTab}>
            {Sections.slice(0, 6).map(({ id, component }) => (
              <TabPane key={id} tabId={id} className={`fade ${id === activeTab ? "show" : ""}`}>
                {component}
              </TabPane>
            ))}
          </TabContent>
          <Reviews label />
          <ScheduleTour label />
        </Fragment>
      ) : type === "accordion" ? (
        <UncontrolledAccordion defaultOpen={openItems} stayOpen toggle={toggleAccordion}>
          {Sections.map(({ id, label, component }) => (
            <AccordionItem key={id}>
              <AccordionHeader targetId={id}>{label}</AccordionHeader>
              <AccordionBody accordionId={id}>{component}</AccordionBody>
            </AccordionItem>
          ))}
        </UncontrolledAccordion>
      ) : type === "car" ? (
        <Fragment>
          <Overview type={type} label />
          <Description type={type} label />
          <Feature />
          <Faq />
          <Reviews type={type} label />
        </Fragment>
      ) : (
        Sections.map(({ labelComponent }, index) => <Fragment key={index}>{labelComponent}</Fragment>)
      )}
    </Fragment>
  );
};

export default DetailBody;
