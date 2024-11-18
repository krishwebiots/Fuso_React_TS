import { Col, Container, Row } from "reactstrap";
import { AboutTitle } from "../../../Constants/Constants";
import { AboutContent, AboutListData } from "../../../Data/Demo/PropertyDemo1";
import { dynamicGrf, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const AboutUs = () => {
  return (
    <section className="property-about-section section-b-space">
      <Container>
        <Row className="align-items-center gy-lg-0 gy-4">
          <Col lg="6" className="order-lg-0 order-1">
            <div className="about-img">
              <Image src={dynamicGrf("p-about.gif")} alt="about-img" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6">
            <div className="about-content">
              <CommonHeader title={AboutTitle} content={AboutContent} headClass="title-style-1" />
              <ul className="about-list">
                {AboutListData.map((item, index) => (
                  <li key={index}>
                    <Image src={dynamicSvg("property/about-us/arrow-5.svg")} alt="about-arrow" className="img-fluid" />
                    <h4>{item}</h4>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
