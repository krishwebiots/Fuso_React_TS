import { Add, ArrowRight } from "iconsax-react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { LearnMore, TrustedJobs } from "../../../Constants/Constants";
import { AboutContent, AboutImagesData, AboutList, JobAboutCounterData } from "../../../Data/Demo/JobDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";

const About = () => {
  return (
    <section className="job-about-section section-b-space">
      <Container>
        <Row className="justify-content-center gy-4 align-items-center">
          <Col xl="7" lg="6" className="order-lg-0 order-1">
            <div className="about-content">
              <h2>{TrustedJobs}</h2>
              <p>{AboutContent}</p>
              <ul className="about-list">
                {AboutList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <ul className="job-counter-box">
                {JobAboutCounterData.map((counter, index) => (
                  <li key={index} className="counter-box">
                    <div className="counter-flex">
                      <CountUp end={counter.count} className="counter-count" delay={0} />
                      <Add className="iconsax" />
                    </div>
                    <h5>{counter.label}</h5>
                  </li>
                ))}
              </ul>
              <Link to={RouteList.Pages.Other.AboutUs1} className="text-btn">
                {LearnMore} <ArrowRight className="iconsax" />
              </Link>
            </div>
          </Col>
          <Col xl="5" lg="6" md="8">
            <div className="about-img">
              <Row className="gx-lg-4 gx-sm-5">
                {AboutImagesData.map((colImages, colIndex) => (
                  <Col xs="6" key={colIndex}>
                    {colImages.map((image, imgIndex) => (
                      <Image key={imgIndex} src={dynamicImage(image.src)} alt="a-1" className="img-fluid" />
                    ))}
                  </Col>
                ))}
              </Row>
              <Image src={dynamicSvg("job/a-1.svg")} alt="a-1" className="img-fluid about-object" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
