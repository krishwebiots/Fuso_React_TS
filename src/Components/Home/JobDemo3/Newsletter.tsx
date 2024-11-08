import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { PaymentData } from "../../../Data/Demo/JobDemo3";
import { dynamicImage, dynamicNumber, Image } from "../../../Utils";

const Newsletter = () => {
  return (
    <section className="section-b-space job3-newsletter">
      <Container>
        <div className="newsletter-box position-relative">
          {dynamicNumber(3).map((item, index) => (
            <Image src={dynamicImage(`job-3/bg-effect/c-${item}.png`)} alt={`c-${item}`} className={`img-fluid position-absolute circle-${item} d-lg-block d-none`} key={index} />
          ))}
          <Row className="justify-content-between">
            <Col lg="6">
              <div className="newsletter-content">
                <h2>Get your Dream Job Easily</h2>
                <p>Whether you're a recent graduate, seasoned professional, or exploring new career paths, our app has you covered.</p>
                <div className="pay-flex-btn">
                  {PaymentData.map((item, index) => (
                    <Link to={item.utl} key={index}>
                      <Image src={dynamicImage(`job-3/${item.image}`)} alt="gpay" className="img-fluid" />
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
            <Col xxl="5" xs="6" className="d-lg-block d-none">
              <div className="newsletter-img h-100">
                <Image src={dynamicImage("job-3/phone-mockup.png")} alt="phone-mockup" className="img-fluid h-100" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
