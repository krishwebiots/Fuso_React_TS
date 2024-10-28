import { Col, Container, Row } from "reactstrap";
import { AboutListData } from "../../../Data/Demo/CarDemo2";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import { Link } from "react-router-dom";
import { RouteList } from "../../../Routers/RouteList";

const AboutUs = () => {
  return (
    <section className="car2-about section-t-lg-space position-relative">
      <Image src={dynamicImage("car2/bg-effect/about-bg.png")} alt="about-bg" className="img-fluid position-absolute dots-bg" />
      <Container>
        <Row className="m-auto align-items-center justify-content-between">
          <Col lg="6" className="p-0 d-lg-inline-block d-none">
            <div className="about-img">
              <Image src={dynamicImage("car2/about-img.png")} alt="about-img" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6">
            <div className="about-content">
              <h2>Why Choose Us</h2>
              <p>We understand that you have options when it comes to renting a car for your travels. Here's why we believe we stand out from the rest.</p>
              <ul className="about-list">
                {AboutListData.map((item, index) => (
                  <li key={index}>
                    <div className="about-icon">
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

export default AboutUs;
