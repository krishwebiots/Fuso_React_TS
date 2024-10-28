import { Col, Container, Row } from "reactstrap";
import { ExperienceTitle } from "../../../Constants/Constants";
import { ExperienceCarData, ExperienceContentData, ExperienceData } from "../../../Data/Demo/CarDemo1";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const Experience = () => {
  return (
    <section className="car-experience-section section-b-space">
      <Container>
        <CommonHeader title={ExperienceTitle} content={ExperienceContentData} headClass="title-style-2 dark-title" animation />
        <div className="row align-items-center g-4">
          {ExperienceData.map((column, colIndex) => (
            <div key={colIndex} className={`col-lg-${colIndex === 1 ? "6 d-lg-block d-none p-0" : "3 col-sm-6 p-lg-0"}`}>
              {column.map((item, index) =>
                "image" in item ? (
                  <div className="center-car-circle" key={index}>
                    <Image src={dynamicImage("car/round.png")} alt="" className="img-fluid" />
                    <div className="second-car-circle">
                      <div className="inner-car-circle">
                        <Image src={dynamicImage("car/experience.png")} alt="experience" className="img-fluid" data-aos="zoom-in" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="service-box" key={index}>
                    <div className="service-icon">{item.icon}</div>
                    <div className="service-content">
                      <p>We provide free consultation to help you find a tenant for your new house.</p>
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </div>

        <div className="experience-car-feature">
          <Row>
            {ExperienceCarData.map((item, index) => (
              <Col md="3" xs="6" className="p-0" key={index}>
                <div className="experience-box">
                  <div className="experience-icon">
                    <Image src={dynamicSvg(item.icon)} alt={`e-${index + 1}`} className="img-fluid" />
                  </div>
                  <div className="experience-content">
                    <h5>{item.label}</h5>
                    <h4>{item.value}</h4>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
