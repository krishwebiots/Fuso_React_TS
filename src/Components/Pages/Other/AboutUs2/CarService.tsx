import { Col, Container, Row } from "reactstrap";
import { ServiceData } from "../../../../Data/Demo/CarDemo1";
import { dynamicImage, dynamicSvg, Image } from "../../../../Utils";

const CarService = () => {
  return (
    <section className="car2-about job-category-section car-about-category section-b-space position-relative">
      <Container>
        <Row className="m-auto align-items-center justify-content-between">
          <Col lg="6" className="p-0 d-lg-inline-block d-none">
            <div className="about-img">
              <Image src={dynamicImage("car2/service-img.jpg")} alt="about-img" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6">
            <div className="about-content">
              <Row className="g-4">
                {ServiceData.slice(0, 2).map((service, index) => (
                  <Col sm="6" key={index}>
                    <div className="category-box">
                      <Image src={dynamicSvg("job/job-box/dots-category.svg")} alt="dots-category" className="img-fluid dot-img" />
                      <div className="category-icon">{service.icon}</div>
                      <div className="category-title">
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              <Row className="mt-sm-4 mt-0 g-4 translate-row">
                {ServiceData.slice(2).map((service, index) => (
                  <Col sm="6" key={index}>
                    <div className="category-box">
                      <Image src={dynamicSvg("job/job-box/dots-category.svg")} alt="dots-category" className="img-fluid dot-img" />
                      <div className="category-icon">{service.icon}</div>
                      <div className="category-title">
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarService;
