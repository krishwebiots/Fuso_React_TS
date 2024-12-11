import { Col, Container, Row } from "reactstrap";
import { OurFounder } from "../../../../Constants/Constants";
import { FounderData } from "../../../../Data/Pages/Other";
import { dynamicImage, Image } from "../../../../Utils";

const Founder = () => {
  return (
    <section className="bg-color team-info-section">
      <Container>
        <h2 className="text-center">{OurFounder}</h2>
        {FounderData.map((item, index) => (
          <Row className={`justify-content-center align-items-center gx-lg-5 mt-3 ${index === 1 ? "right-img-box" : ""}`} key={index}>
            <Col xl="3" lg="4" md="5" className={`d-md-block d-none ${index === 1 ? "order-1" : ""}`}>
              <div className="person-img">
                <Image src={dynamicImage(item.image)} alt="p-1" className="img-fluid w-100" />
              </div>
            </Col>
            <Col md="7">
              <div className="person-info">
                <h2>
                  <i className="ri-double-quotes-l" />
                  {item.title}
                  <i className="ri-double-quotes-r" />
                </h2>
                <p>Welcome to Fuso, where quality meets creativity. We're proud to provide tailored solutions designed to meet a wide range of client needs. Our business was founded with a mission to redefine industry standards, blending insight with innovative design to deliver exceptional results.</p>
                <div className="person-title">
                  <h5>{item.name}</h5>
                  <h6>{item.text}</h6>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Founder;
