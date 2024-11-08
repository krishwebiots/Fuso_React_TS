import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { AboutTitle, FollowUsForMore, FusoCarRental, LuxuryCar } from "../../../Constants/Constants";
import { AboutContentData, AboutData, LuxuryCarContentData } from "../../../Data/Demo/CarDemo1";
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
              <h2>{FusoCarRental}</h2>
              <Link to={RouteList.Pages.Other.AboutUs2} className="simple-btn">
                {FollowUsForMore}
                <ArrowRight />
              </Link>
            </div>
          </Col>
          <Col xl="5" lg="6" className="order-lg-0 order-1">
            <div className="about-bottom-content">
              <CommonHeader title={LuxuryCar} content={LuxuryCarContentData} />
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
