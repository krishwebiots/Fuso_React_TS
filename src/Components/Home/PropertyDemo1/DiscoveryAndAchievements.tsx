import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { DiscoveryTitle, OurAchievementsTitle } from "../../../Constants/Constants";
import { AchievementsContent, AchievementsCounterData, DiscoverySliderData } from "../../../Data/Demo/PropertyDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const DiscoveryAndAchievements = () => {
  return (
    <Fragment>
      <section className="section-b-space property-discovery-section">
        <Container>
          <CommonHeader title={DiscoveryTitle} headClass="title-style-1 dark-title" />
          <Swiper slidesPerView={5} spaceBetween={30} loop={true} className="discovery-slider">
            {DiscoverySliderData.map((property, index) => (
              <SwiperSlide key={index}>
                <Link to={RouteList.Property.Grid.Property3Grid} className="discovery-img">
                  <Image src={dynamicImage(`property/discovery/${property.img}`)} alt={`${property.location}-img`} className="img-fluid" />
                  <div className="discovery-content">
                    <h5>{property.location}</h5>
                    <ul>
                      <li>
                        <span>{property.sale} Sale</span>
                      </li>
                      <li>
                        <span>{property.rent} Rent</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <section className="property-achievements-section section-b-space bg-color">
        <Container>
          <Row className="align-items-center gx-lg-5 gy-lg-5 gy-4">
            <Col lg="6">
              <div className="achievements-img">
                <Image src={dynamicImage("property/achievements/1.png")} alt="achievements" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
              <div className="achievements-content">
                <CommonHeader title={OurAchievementsTitle} content={AchievementsContent} headClass="title-style-1" />
                <ul className="achievements-counter-box">
                  {AchievementsCounterData.map((item, index) => (
                    <li className="counter-box" key={index}>
                      <span>
                        <CountUp end={item.end} delay={0} />
                        {item.suffix}
                      </span>
                      <h6>{item.label}</h6>
                    </li>
                  ))}
                </ul>
                <div className="achievements-circle">
                  <Image src={dynamicSvg("property/achievement/achievements-circle.svg")} alt="achievements-circle" className="img-fluid" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default DiscoveryAndAchievements;
