import { Clock, Location } from "iconsax-react";
import { useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Button, Col, Container, Label, Nav, NavItem, Row, TabContent, TabPane } from "reactstrap";
import { LatestJobOpenings, LearnMore, ProvideJobs, ViewDetails } from "../../../Constants/Constants";
import { LatestJobOpeningsContent, ServiceCounterListData } from "../../../Data/Demo/JobDemo2";
import { AboutImageData, AboutList, JobAboutContent } from "../../../Data/Demo/JobDemo3";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const AboutAndJobOpening = () => {
  const [activeTab, setActiveTab] = useState("part time");
  const { productItem, categoryItem } = useAppSelector((state) => state.product);
  return (
    <div className="overflow-x-hidden">
      <section className="job3-about">
        <Container>
          <Row className="justify-content-between align-items-center gy-4">
            <Col lg="5">
              <div className="about-img position-relative">
                {AboutImageData.map((item, index) => (
                  <Image src={dynamicImage(`job-3/about/${item.image}`)} alt="about-img" className={`img-fluid ${item.class ? item.class : ""}`} key={index} />
                ))}
              </div>
            </Col>
            <Col lg="6">
              <div className="about-content">
                <CommonHeader title={ProvideJobs} content={JobAboutContent} />
                <ul className="counter-list">
                  {ServiceCounterListData.map((item, index) => (
                    <li className="counter-box" key={index}>
                      <div className="counter-flex">
                        {item.prefix}
                        <CountUp end={item.end} className="counter-count" delay={0} />
                        {item.suffix}
                        <i className="ri-add-line" />
                      </div>
                      <h5>{item.label}</h5>
                    </li>
                  ))}
                </ul>
                <ul className="about-list">
                  {AboutList.map((item, index) => (
                    <li key={index}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to={RouteList.Pages.Other.AboutUs1} className="btn-solid">
                  {LearnMore}
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
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
                          <div className="job-box demo-job-box3">
                            <div className="job-title-flex">
                              <div className="job-title">
                                <div className="job-icon">
                                  {item.image.map((imgSrc, idx) => (
                                    <Image src={dynamicSvg(imgSrc)} alt={`job-${idx}`} className="img-fluid" key={idx} />
                                  ))}
                                </div>
                                <Link to={RouteList.Job.Detail.JobDetail1} className="job-detail">
                                  <span>{item.company}</span>
                                  <h5>{item.title}</h5>
                                </Link>
                              </div>
                              <div className="post-time">
                                <Clock />
                                <span>{item.time}</span>
                              </div>
                            </div>
                            <p>{item.description}</p>
                            <div className="job-tag">
                              <Label>{activeTab}</Label>
                              <Label>{item.salary}</Label>
                            </div>
                            <div className="location-flex">
                              <div className="post-time">
                                <Location />
                                <span>{item.location}</span>
                              </div>
                              <Link to={RouteList.Job.Detail.JobDetail1} className="text-btn">
                                {ViewDetails}
                              </Link>
                            </div>
                          </div>
                        </Col>
                      ))}
                  </Row>
                </TabPane>
              ))}
          </TabContent>
        </Container>
      </section>
    </div>
  );
};

export default AboutAndJobOpening;
