import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { AboutTitle } from "../../../Constants/Constants";
import { AboutContentData, AboutData } from "../../../Data/Demo/CarDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const About = () => {
  return (
    <section className="car-about-section section-b-space">
      <Container>
        <CommonHeader title={AboutTitle} content={AboutContentData} headClass="title-style-2" animation />
        <Row className="align-items-center gy-xl-0 gy-3">
          <Col xl="9" lg="8">
            <div className="about-top-img">
              <Image src={dynamicImage("car/about/1.jpg")} alt="a-1" className="img-fluid" />
            </div>
          </Col>
          <Col xl="3" lg="4">
            <div className="about-top-content">
              <h2>Fuso car rental</h2>
              <Link to={RouteList.Pages.Other.AboutUs2} className="simple-btn">
                Follow us for more
                <ArrowRight />
              </Link>
            </div>
          </Col>
          <Col xl="5" lg="6" className="order-lg-0 order-1">
            <div className="about-bottom-content">
              <h2>Luxury car rental FUSO</h2>
              <p>We provide free consultation to help you find a tenant for your new house.We provide free consultation to help you find a tenant for your new house.We provide free consultation to help .</p>
              <ul className="about-list">
                {AboutData.map((item, index) => (
                  <li key={index}>
                    <div className="about-list-icon">
                      <Image src={dynamicSvg(item.image)} alt="timer" className="img-fluid" />
                    </div>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col xl="7" lg="6">
            <div className="about-bottom-img">
              <Image src={dynamicImage("car/about/2.jpg")} alt="a-2" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
