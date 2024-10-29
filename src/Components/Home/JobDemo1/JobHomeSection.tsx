import CountUp from "react-countup";
import { Col, Container, Row } from "reactstrap";
import { JobCounterData } from "../../../Data/Demo/JobDemo1";

const JobHomeSection = () => {
  return (
    <div className="job-home-section">
      <Container>
        <div className="home-block-space">
          <Row className="align-items-center">
            <Col xl="7" lg="6">
              <div className="home-content">
                <h3>Build your future with us</h3>
                <h1>Find your job &amp; make sure goal.</h1>
                <p>Your dream job is waiting for you Find the best real estate on your country Your dream job is waiting for you Find the best real estate on your country</p>
                <ul className="counter-list">
                  {JobCounterData.map((item, index) => (
                    <li className="counter-box" key={index}>
                      <div className="counter-info">
                        <h3>
                          <CountUp end={item.end} className="counter-count" delay={0} />
                          {item.suffix}
                        </h3>
                        <h4>{item.label}</h4>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xl="5" lg="6">
              <div className="home-img">
                <img src="assets/svg/job/home/7.svg" alt="ho-1" className="img-fluid home-job-box position-absolute" />
                <div className="round-shape-img">
                  <img src="assets/images/job/home/1.jpg" alt="h-1" className="img-fluid flip-img" />
                  <img src="assets/svg/job/home/5.svg" alt="ho-1" className="img-fluid top-left-box position-absolute rounded-0" />
                </div>
                <div className="round-shape round-shape-img radius-style-1">
                  <img src="assets/svg/job/home/3.svg" alt="hs-3" className="img-fluid animation-img" />
                </div>
                <div className="round-shape round-shape-img radius-style-2">
                  <div className="zoom-img">
                    <img src="assets/images/job/home/2.jpg" alt="h-2" className="img-fluid" />
                  </div>
                  <img src="assets/svg/job/home/6.svg" alt="ho-1" className="img-fluid vertical-line position-absolute rounded-0" />
                  <img src="assets/svg/job/home/6.svg" alt="ho-1" className="img-fluid horizontal-line position-absolute rounded-0" />
                </div>
                <div className="round-shape round-shape-img radius-style-3">
                  <img src="assets/svg/job/home/1.svg" alt="hs-1" className="img-fluid animation-img" />
                </div>
                <div className="round-shape round-shape-img radius-style-3">
                  <img src="assets/images/job/home/3.jpg" alt="h-3" className="img-fluid flip-img" />
                </div>
                <div className="round-shape round-shape-img radius-style-4">
                  <img src="assets/svg/job/home/2.svg" alt="hs-1" className="img-fluid animation-img" />
                </div>
                <div className="round-shape round-shape-img radius-style-3">
                  <img src="assets/images/job/home/4.jpg" alt="h-4" className="img-fluid flip-img" />
                  <img src="assets/svg/job/home/6.svg" alt="ho-1" className="img-fluid vertical-line position-absolute rounded-0" />
                  <img src="assets/svg/job/home/6.svg" alt="ho-1" className="img-fluid horizontal-line position-absolute rounded-0" />
                </div>
                <div className="round-shape round-shape-img radius-style-3">
                  <img src="assets/svg/job/home/4.svg" alt="hs-4" className="img-fluid animation-img" />
                </div>
                <div className="round-shape-img">
                  <img src="assets/images/job/home/5.jpg" alt="h-5" className="img-fluid flip-img" />
                  <img src="assets/svg/job/home/5.svg" alt="ho-1" className="img-fluid bottom-right-box position-absolute rounded-0" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default JobHomeSection;
