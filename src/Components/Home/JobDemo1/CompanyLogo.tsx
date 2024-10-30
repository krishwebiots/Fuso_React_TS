import { Col, Container, Row } from "reactstrap";
import { dynamicImage, dynamicNumber, Image } from "../../../Utils";

const CompanyLogo = () => {
  return (
    <section className="job-logo-section section-b-space">
      <Container>
        <div className="title-style-3 text-center">
          <h3>World best companies are hiring on hireup</h3>
        </div>
        <div className="experience-car-feature">
          <Row className="row-cols-lg-5 row-cols-2">
            {dynamicNumber(10).map((item, index) => (
              <Col className="p-0" key={index}>
                <div className="logo-img">
                  <Image src={dynamicImage(`job/logo/${item}.png`)} alt="l-1" className="img-fluid" />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CompanyLogo;
