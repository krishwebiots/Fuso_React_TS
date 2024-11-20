import { Col, Container, Row } from "reactstrap";
import { ServiceTitle } from "../../../Constants/Constants";
import { ServiceContentData, ServiceData } from "../../../Data/Demo/CarDemo1";
import { dynamicImage, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const Service = () => {
  return (
    <section className="car-service-section section-b-space">
      <Container>
        <CommonHeader title={ServiceTitle} content={ServiceContentData} headClass="title-style-2 dark-title" animation />
      </Container>
      <div className="padding-container-right">
        <Row className="align-items-center">
          <Col xxl="8" xl="7" className="d-xl-block d-none">
            <div className="service-image" data-aos="fade-right" data-aos-offset={200}>
              <Image src={dynamicImage("car/service-car.png")} alt="service-car" className="img-fluid" />
            </div>
          </Col>
          <Col xxl="4" xl="5">
            <Row className="g-md-5 g-4">
              {ServiceData.map((service, index) => (
                <Col sm="6" key={index}>
                  <div className="service-box">
                    <div className="service-icon">{service.icon}</div>
                    <div className="service-content">
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Service;
