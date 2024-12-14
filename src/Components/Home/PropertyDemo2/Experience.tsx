import { Col, Container, Row } from "reactstrap";
import { Href, LearnMore, RemarkableAndTrustworthy, YearsOfExperience } from "../../../Constants/Constants";
import { ExperienceContent, ExperienceSubContent } from "../../../Data/Demo/PropertyDemo2";
import { dynamicImage, Image } from "../../../Utils";

const Experience = () => {
  return (
    <section className="section-t-lg-space property2-experience-section">
      <Container>
        <Row className="gy-lg-0 gy-4">
          <Col lg="7">
            <div className="experience-img">
              <div className="left-img">
                <h2>
                  <span>08</span>
                  {YearsOfExperience}
                </h2>
                <Image src={dynamicImage("property2/experince/1.jpg")} alt="e-1" className="img-fluid" />
                <span className="effect-circle" />
              </div>
              <div className="right-img">
                <Image src={dynamicImage("property2/experince/2.jpg")} alt="e-2" className="img-fluid" />
                <span className="effect-circle" />
              </div>
            </div>
          </Col>
          <Col lg="5">
            <div className="experience-content">
              <h2>{RemarkableAndTrustworthy}</h2>
              <p>{ExperienceSubContent}</p>
              <ul className="check-list">
                {ExperienceContent.map((item, index) => (
                  <li key={index}>
                    <i className="ri-check-line" />
                    <h6>{item}</h6>
                  </li>
                ))}
              </ul>
              <a href={Href} className="btn-solid">
                {LearnMore}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
