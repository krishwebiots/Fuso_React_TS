import { Add, ArrowRight } from "iconsax-react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { AboutImagesData, JobAboutCounterData } from "../../../Data/Demo/JobDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";

const About = () => {
  return (
    <section className="job-about-section section-b-space">
      <Container>
        <Row className="justify-content-center gy-4 align-items-center">
          <Col xl="7" lg="6" className="order-lg-0 order-1">
            <div className="about-content">
              <h2>We Provide a Place to Find Trusted Jobs</h2>
              <p>We will help you to find a job with your interests and help build your project more elegant.</p>
              <ul className="about-list">
                <li>Say goodbye to endless scrolling through unreliable job postings.</li>
                <li>Receive personalized job suggestions that match your criteria.</li>
                <li>We're more than just a job board.</li>
              </ul>
              <ul className="job-counter-box">
                {JobAboutCounterData.map((counter, index) => (
                  <li key={index} className="counter-box">
                    <div className="counter-flex">
                      <CountUp end={counter.count} className="counter-count" delay={0} />
                      <Add />
                    </div>
                    <h5>{counter.label}</h5>
                  </li>
                ))}
              </ul>
              <Link to={RouteList.Pages.Other.AboutUs1} className="text-btn">
                Learn More <ArrowRight />
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