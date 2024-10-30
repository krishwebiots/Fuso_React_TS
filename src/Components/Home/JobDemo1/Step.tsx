import { Col, Container, Row } from "reactstrap";
import { StepImagesData, StepsData } from "../../../Data/Demo/JobDemo1";
import { dynamicImage, Image } from "../../../Utils";

const Step = () => {
  return (
    <section className="job-step-section pt-0">
      <Container>
        <Row className="gx-lg-5 align-items-center">
          <Col xl="4" lg="5">
            <div className="step-img">
              <Row className="gx-xl-5">
                {StepImagesData.map((column, colIndex) => (
                  <Col key={colIndex} md={6}>
                    <div className="step-inner-img">
                      {column.map((image, imgIndex) => (
                        <Image key={imgIndex} src={dynamicImage(image.src)} alt={image.alt} className={image.className} />
                      ))}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col xl="8" lg="7">
            <div className="title-style-3 dark-title">
              <h2>Step To Follow</h2>
              <p>Find the best match for your career goals.</p>
            </div>
            <Row className="g-xl-5 gy-4">
              {StepsData.map((step, index) => (
                <Col md="6" key={index}>
                  <div className="step-content-box">
                    <div className="step-icon-number">
                      <div className="step-icon">{step.icon}</div>
                      <span>{step.stepNumber}</span>
                    </div>
                    <div className="step-content">
                      <h5>{step.title}</h5>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Step;
