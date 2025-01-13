/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setScrollActive } from "../../../../ReduxToolkit/Reducers/LayoutReducers";

const DetailBody: FC<PropertyDetailType> = ({ type }) => {
  const { scrollActive } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const [openItems, setOpenItems] = useState<string[]>(["overview", "amenities"]);
  const fix = UseStickyBar(300);

  const toggleAccordion = (id: string) => setOpenItems((items) => (items.includes(id) ? items.filter((item) => item !== id) : [...items, id]));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      Sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            dispatch(setScrollActive(id));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      {type === "scrollspy" ? (
        <Fragment>
          <div className={`sticky-header ${fix ? "sticky" : ""}`}>
            <Container>
              <Nav tabs>
                {Sections.slice(0, 6).map(({ id, label }) => (
                  <NavItem key={id} onClick={() => dispatch(setScrollActive(id))}>
                    <NavLink className={`${scrollActive === id ? "active" : ""}`} href={`#${id}`}>
                      {label}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </Container>
          </div>
          {Sections.map(({ labelComponent }, index) => (
            <Fragment key={index}>{labelComponent}</Fragment>
          ))}
        </Fragment>
      ) : type === "tabs" ? (
        <Fragment>
          <Nav tabs>
            {Sections.slice(0, 6).map(({ id, label }) => (
              <NavItem key={id} onClick={() => dispatch(setScrollActive(id))}>
                <NavLink tag="button" className={id === scrollActive ? "active" : ""} href={`#${id}`}>
                  {label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={scrollActive}>
            {Sections.slice(0, 6).map(({ id, component }) => (
              <TabPane key={id} tabId={id} className={`fade ${id === scrollActive ? "show" : ""}`}>
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
