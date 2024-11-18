import { Col, Container, Row } from "reactstrap";
import { AboutListData, ChooseUsContent } from "../../../Data/Demo/CarDemo2";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import { Link } from "react-router-dom";
import { RouteList } from "../../../Routers/RouteList";
import CommonHeader from "../Common/CommonHeader";
import { ChooseUs, LearnMore } from "../../../Constants/Constants";

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
              <CommonHeader title={ChooseUs} content={ChooseUsContent} />
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
                {LearnMore}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
