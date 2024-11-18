import CountUp from "react-countup";
import { Col, Container, Row } from "reactstrap";
import { OurAchievementsTitle } from "../../../Constants/Constants";
import { AchievementsContent, AchievementsCounterData } from "../../../Data/Demo/PropertyDemo1";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const Achievements = () => {
  return (
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
  );
};

export default Achievements;
