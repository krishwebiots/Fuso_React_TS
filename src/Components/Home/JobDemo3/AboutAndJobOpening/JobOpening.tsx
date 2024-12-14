import { useState } from "react";
import { Button, Col, Container, Nav, NavItem, Row, TabContent, TabPane } from "reactstrap";
import { LatestJobOpenings } from "../../../../Constants/Constants";
import { LatestJobOpeningsContent } from "../../../../Data/Demo/JobDemo2";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import JobProductBox4 from "../../../CommonComponents/ProductBox/JobProductBox4";
import CommonHeader from "../../Common/CommonHeader";

const JobOpening = () => {
  const [activeTab, setActiveTab] = useState("part_time");
  const { productItem, categoryItem } = useAppSelector((state) => state.product);
  return (
    <section className="job-box-section section-b-space position-relative">
      <div className="circle-animation" />
      <Container>
        <CommonHeader title={LatestJobOpenings} content={LatestJobOpeningsContent} headClass="title-style-5" />
        <Nav pills className="justify-content-center">
          {categoryItem
            .filter((e) => [22, 23, 24, 25, 26, 27, 28].includes(e.id))
            .map((tab, index) => (
              <NavItem key={index}>
                <Button color="" className={`nav-link${tab.value === activeTab ? " active" : ""}`} onClick={() => setActiveTab(tab.value)}>
                  {tab.label}
                </Button>
              </NavItem>
            ))}
        </Nav>
        <TabContent activeTab={activeTab}>
          {categoryItem
            .filter(({ id }) => [22, 23, 24, 25, 26, 27, 28].includes(id))
            .map((item, index) => (
              <TabPane className={`fade ${activeTab === item.value ? "show" : ""}`} tabId={item.value} key={index}>
                <Row className="g-4">
                  {productItem
                    .filter(({ jobType }) => jobType?.includes(activeTab))
                    .slice(0, 6)
                    .map((item, index) => (
                      <Col xl="4" md="6" data-aos="fade-up" data-aos-duration={200 * (index + 1)} key={index}>
                        <JobProductBox4 data={item} />
                      </Col>
                    ))}
                </Row>
              </TabPane>
            ))}
        </TabContent>
      </Container>
    </section>
  );
};

export default JobOpening;
