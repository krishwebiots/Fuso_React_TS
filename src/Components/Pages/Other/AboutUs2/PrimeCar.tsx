import { Col, Container, Row } from "reactstrap";
import { dynamicImage, Image } from "../../../../Utils";
import { Href, LearnMore, PrimeCarRentals } from "../../../../Constants/Constants";
import { PrimeCarRentalsContent, PrimeCarRentalsList } from "../../../../Data/Pages/Other";

const PrimeCar = () => {
  return (
    <section className="service-page-first-section car-service-section car-about-2 section-b-space">
      <Container>
        <Row className="gx-lg-5 gy-4">
          <Col lg="6" className="order-lg-0 order-1">
            <div className="service-img">
              <Image src={dynamicImage("other/about/a-1.jpg")} alt="a-1" className="img-fluid main-img" />
              <Image src={dynamicImage("other/about/a-2.jpg")} alt="a-2" className="img-fluid sub-img" />
            </div>
          </Col>
          <Col lg="6">
            <div className="service-main-content">
              <div className="content-title text-start">
                <h2>{PrimeCarRentals}</h2>
                <p className="w-75">{PrimeCarRentalsContent}</p>
              </div>
              <ul className="about-list">
                {PrimeCarRentalsList.map((item, index) => (
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

export default PrimeCar;
