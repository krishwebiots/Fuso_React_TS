import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { Col, Container, Row } from "reactstrap";
import { LearnMore } from "../../../Constants/Constants";
import { ServiceCounterListData, ServiceIconData, ServiceListData, StepsGoalData } from "../../../Data/Demo/JobDemo2";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";

const GoalsAndService = () => {
  return (
    <Fragment>
      <section className="section-b-space dark-goal-section">
        <Container>
          <div className="horizontal-title">
            <h2>
              Get your <span>Dream Job</span> and Make your Own Goals.
            </h2>
            <p>To obtain the job you desire, follow these procedures. We'll assist you in locating a career that aligns with your interests.</p>
          </div>
          <div className="base-color-box">
            <Row className="g-xl-4 gy-sm-5 gy-4 justify-content-center">
              {StepsGoalData.map((step, index) => (
                <Col xl="3" lg="4" sm="6" key={index}>
                  <div className="goal-box">
                    <span>{step.number}</span>
                    <div className="goal-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
      <section className="dark-service-section">
        <Container>
          <Row className="align-items-center gy-4">
            <Col xl="6" lg="7">
              <div className="service-img">
                <Image src={dynamicImage("dark-job/service/service-img.png")} alt="service-img" className="img-fluid" />
                <ul className="service-icon">
                  {ServiceIconData.map((item, index) => (
                    <li data-aos="zoom-in" key={index}>
                      <Image src={dynamicSvg(item)} alt={`s-${index}`} className="img-fluid" />
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xl="6" lg="5">
              <div className="service-content">
                <h2>We Provide a Place to Find Trusted Jobs</h2>
                <p>We will help you to find a job with your interests and help build your project more elegant.</p>
                <ul className="service-list">
                  {ServiceListData.map((item, index) => (
                    <li key={index}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="counter-list">
                  {ServiceCounterListData.map((item, index) => (
                    <li className="counter-box" key={index}>
                      <div className="counter-flex">
                        {item.prefix}
                        <CountUp end={item.end} className="counter-count" delay={0} />
                        {item.suffix}
                        <i className="ri-add-line" />
                      </div>
                      <h5>{item.label}</h5>
                    </li>
                  ))}
                </ul>
                <Link to={RouteList.Pages.Other.AboutUs1} className="border-pills">
                  {LearnMore}
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default GoalsAndService;
