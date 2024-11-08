import { Col, Container, Row } from "reactstrap";
import { dynamicImage, dynamicNumber, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";
import { WorldBestCompanies } from "../../../Constants/Constants";

const CompanyLogo = () => {
  return (
    <section className="job-logo-section section-b-space">
      <Container>
        <CommonHeader title={WorldBestCompanies} headClass="title-style-3 text-center" />
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
