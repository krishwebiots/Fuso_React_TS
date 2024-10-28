import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ServiceListData } from "../../../Data/Demo/CarDemo2";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";

const Service = () => {
  return (
    <section className="section-t-lg-space section-b-lg-space car2-service-section">
      <Container>
        <Row className="align-items-center gy-sm-4 gy-3">
          <Col lg="6">
            <div className="service-img">
              <Image src={dynamicImage("car2/service-img.jpg")} alt="service-img" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6">
            <div className="service-content">
              <h2>Our dedication to ensuring your pleasure and contentment</h2>
              <p>We are committed to ensuring that every aspect of your rental experience is designed to bring you pleasure and contentment.</p>
              <ul className="service-list">
                {ServiceListData.map((item, index) => (
                  <li key={index}>
                    <div className="service-icon">
                      <Image src={dynamicSvg(item.src)} alt="image" className="img-fluid" />
                    </div>
                    <h6>{item.text}</h6>
                  </li>
                ))}
              </ul>
              <Link to={RouteList.Pages.Other.AboutUs1} className="btn-pills">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
