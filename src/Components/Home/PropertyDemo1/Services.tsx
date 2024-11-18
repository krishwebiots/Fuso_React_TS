import { Col, Container, Row } from "reactstrap";
import { OurServiceTitle } from "../../../Constants/Constants";
import { OurServiceContent, ServiceList, ServicesData } from "../../../Data/Demo/PropertyDemo1";
import { dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const Services = () => {
  return (
    <section className="section-b-space property-service-section">
      <Container>
        <Row className="gx-lg-5 gy-lg-0 gy-4 align-items-center">
          <Col lg="9" className="order-lg-0 order-1">
            <div className="service-main">
              <Row className="g-0 justify-content-between">
                {ServicesData.map((service, index) => (
                  <Col xl="4" md="6" key={index}>
                    <div className="service-box">
                      <div className="service-icon">
                        <Image src={dynamicSvg(`property/service/${index + 1}.svg`)} alt={`service-${index}`} className="img-fluid" />
                      </div>
                      <div className="service-content">
                        <h5>{service.title}</h5>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg="3">
            <CommonHeader title={OurServiceTitle} content={OurServiceContent} headClass="title-style-1" />
            <ul className="service-list">
              {ServiceList.map((item, index) => (
                <li key={index}>
                  <Image src={dynamicSvg("property/service/arrow_5.svg")} alt="arrow" className="img-fluid" />
                  <h6>{item}</h6>
                </li>
              ))}
            </ul>
            <div className="service-circle">
              <Image src={dynamicSvg("property/service/service-circle.svg")} alt="service-circle" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
