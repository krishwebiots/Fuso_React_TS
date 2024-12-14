import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { LearnMore, ProvideJobs } from "../../../../Constants/Constants";
import { ServiceCounterListData } from "../../../../Data/Demo/JobDemo2";
import { AboutImageData, AboutList, JobAboutContent } from "../../../../Data/Demo/JobDemo3";
import { RouteList } from "../../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../../Utils";
import CommonHeader from "../../Common/CommonHeader";

const AboutJob = () => {
  return (
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
  );
};

export default AboutJob;
