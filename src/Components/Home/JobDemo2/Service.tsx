import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { FindTrustedJobs, LearnMore } from "../../../Constants/Constants";
import { ServiceContent, ServiceCounterListData, ServiceIconData, ServiceListData } from "../../../Data/Demo/JobDemo2";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";

const Service = () => {
  return (
    <section className="dark-service-section">
      <Container>
        <Row className="align-items-center gy-4">
          <Col xl="6" lg="7">
            <div className="service-img">
              <Image src={dynamicImage("dark-job/service/service-img.png")} alt="service-img" className="img-fluid" />
              <ul className="service-icon">
                {ServiceIconData.map((item, index) => (
                  <li data-aos="zoom-in" key={index}>
                    <Image src={dynamicSvg(item)} alt={`s-${index}`} className="img-fluid" />
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col xl="6" lg="5">
            <div className="service-content">
              <h2>{FindTrustedJobs}</h2>
              <p>{ServiceContent}</p>
              <ul className="service-list">
                {ServiceListData.map((item, index) => (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
              <Link to={RouteList.Pages.Other.AboutUs1} className="border-pills">
                {LearnMore}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
