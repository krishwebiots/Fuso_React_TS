import { Col, Container, Row } from "reactstrap";
import { CheckListData, ServiceData } from "../../../Data/Demo/PropertyDemo2";
import { OurServiceTitle } from "../../../Constants/Constants";
import { dynamicSvg, Image } from "../../../Utils";

const Service = () => {
  return (
    <section className="property2-service-section">
      <Container>
        <Row className="justify-content-between gy-xl-0 gy-4">
          <Col xl="6">
            <div className="service-content">
              <h2>{OurServiceTitle}</h2>
              <p>We understand that real estate transactions are more than just buying or selling properties – they are about realizing dreams, making investments, and embracing new beginnings.</p>
              <ul className="check-list">
                {CheckListData.map((item, index) => (
                  <li key={index}>
                    <i className="ri-check-line" />
                    <h6>{item}</h6>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col xl="6">
            <div className="service-main">
              <div className="row justify-content-between gy-lg-4 gy-3">
                {ServiceData.map((service, index) => (
                  <Col md="6" key={index}>
                    <div className="service-box">
                      <div className="service-icon">
                        <Image src={dynamicSvg(`property/service/${service.img}`)} alt={`service-${index + 1}`} className="img-fluid" />
                      </div>
                      <div className="service-content">
                        <h5>{service.title}</h5>
                        <p>{service.desc}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
